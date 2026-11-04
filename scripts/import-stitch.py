"""One-time conversion of local Stitch exports into editable React components.

Scripts and inline event handlers are intentionally excluded from the mockup.
Run only when intentionally replacing the generated presentation components.
"""
from html.parser import HTMLParser
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'desing/stitch_remix_of_look_trendy_gaby_e_commerce_ux_ui'
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())

class Node:
    def __init__(self, tag, attrs=()):
        self.tag, self.attrs, self.children = tag, dict(attrs), []

class Parser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('root')
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                self.stack = self.stack[:i]
                return

    def handle_data(self, data):
        if data.strip():
            self.stack[-1].children.append(data)

def find(node, tag):
    if isinstance(node, str):
        return None
    if node.tag == tag:
        return node
    return next((found for child in node.children if (found := find(child, tag))), None)

PATHS = {'inicio': '/', 'catalogo': '/catalogo', 'carrito': '/carrito', 'bolsa': '/carrito',
         'ropa-deportiva': '/catalogo?coleccion=deportiva', 'invierno': '/catalogo?coleccion=invierno',
         'verano': '/catalogo?coleccion=verano', 'tendencias': '/catalogo?coleccion=tendencias',
         'ofertas': '/catalogo?coleccion=ofertas', 'drops': '/catalogo?coleccion=tendencias'}
ATTRS = {'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'readonly': 'readOnly',
         'maxlength': 'maxLength', 'minlength': 'minLength', 'colspan': 'colSpan', 'rowspan': 'rowSpan',
         'autocomplete': 'autoComplete', 'autofocus': 'autoFocus', 'srcset': 'srcSet',
         'crossorigin': 'crossOrigin', 'viewbox': 'viewBox', 'stroke-width': 'strokeWidth',
         'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'stroke-linecap': 'strokeLinecap',
         'stroke-linejoin': 'strokeLinejoin', 'checked': 'defaultChecked'}
BOOLS = {'disabled', 'required', 'multiple', 'readOnly', 'autoFocus', 'defaultChecked', 'hidden', 'open'}

def write(path, content):
    path = ROOT / path
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding='utf-8')

def text(node):
    return node if isinstance(node, str) else ' '.join(text(child) for child in node.children)

def jsx(node, depth=2, in_link=False):
    pad = '  ' * depth
    if isinstance(node, str):
        return pad + '{' + json.dumps(re.sub(r'\s+', ' ', node), ensure_ascii=False) + '}'
    if node.tag in ('script', 'style'):
        return ''
    tag, attrs = node.tag, dict(node.attrs)
    target = PATHS.get(attrs.get('data-path'))
    label = text(node).lower()
    if tag == 'a' and not target:
        if any(word in label for word in ('ver detalle', 'ver prenda')):
            target = '/producto/cardigan-floral-pop'
        elif 'catálogo' in label or 'catalogo' in label or 'seguir comprando' in label:
            target = '/catalogo'
    if tag == 'button' and any(word in label for word in ('proceder al pago', 'pago seguro')):
        target = '/checkout'
    if target and tag in ('a', 'button'):
        tag = 'Link'
        attrs.pop('href', None)
        attrs.pop('type', None)
        attrs['to'] = target
    # Product thumbnails lead to the single visual product fixture.
    wrap_product = not in_link and tag == 'img' and ('cardigan' in attrs.get('alt', '').lower() or 'cardigan' in attrs.get('data-alt', '').lower())
    output = []
    for key, value in attrs.items():
        if key.startswith('on') or key in ('selected',):
            continue
        if key == 'style':
            style = {}
            for declaration in (value or '').split(';'):
                if ':' in declaration:
                    prop, val = declaration.split(':', 1)
                    prop = re.sub(r'-([a-z])', lambda match: match[1].upper(), prop.strip())
                    style[prop] = val.strip()
            output.append('style={' + json.dumps(style) + '}')
            continue
        key = ATTRS.get(key, key)
        if key == 'value' and tag in ('input', 'textarea', 'select'):
            key = 'defaultValue'
        if key in BOOLS:
            output.append(key)
        elif key in ('maxLength', 'minLength', 'tabIndex', 'colSpan', 'rowSpan'):
            output.append(key + '={' + str(int(value)) + '}')
        elif value is not None:
            output.append(key + '=' + json.dumps(value, ensure_ascii=False))
    if tag == 'img' and 'alt' not in attrs:
        output.append('alt=""')
    if tag == 'button' and 'type' not in attrs:
        output.append('type="button"')
    opening = '<' + tag + (' ' + ' '.join(output) if output else '')
    if node.tag in VOID:
        rendered = pad + opening + ' />'
        return pad + '<Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">\n' + rendered + '\n' + pad + '</Link>' if wrap_product else rendered
    children = '\n'.join(filter(None, (jsx(child, depth + 1, in_link or tag in ('a', 'Link')) for child in node.children)))
    return pad + opening + '>\n' + children + '\n' + pad + '</' + tag + '>'

def component(path, name, markup):
    imports = "import { Link } from 'react-router'\n\n" if '<Link ' in markup else ''
    write(path, imports + 'export function ' + name + '() {\n  return (\n' + markup + '\n  )\n}\n')

PAGES = [
    ('inicio_look_trendy_gaby', 'home', 'Home', False),
    ('inicio_look_trendy_gaby_app_m_vil', 'home', 'HomeMobile', True),
    ('cat_logo_look_trendy_gaby', 'catalog', 'Catalog', False),
    ('ficha-producto', 'product', 'Product', False),
    ('bolsa_de_compras_look_trendy_gaby', 'cart', 'Cart', False),
    ('checkout_seguro_look_trendy_gaby', 'checkout', 'Checkout', False),
    ('checkout_m_vil_look_trendy_gaby', 'checkout', 'CheckoutMobile', True),
]

NAMES = {
    'Home': ['PromotionalTicker', 'HeroSection', 'TrustBadges', 'CollectionsSection', 'FlashSaleSection', 'FeaturedProductsSection', 'CommunitySection', 'WelcomeCoupon', 'HomeOverlay'],
    'HomeMobile': ['MobileGreeting', 'MobileSearch', 'MobileShippingBanner', 'MobileCollections', 'MobileHero', 'MobileFlashSale', 'MobileRewards', 'MobileTrendingProducts', 'MobileCommunity', 'MobileCatalogLink'],
    'Catalog': ['CatalogBreadcrumb', 'CatalogContent'],
    'Cart': ['CartHeading', 'FreeShippingProgress', 'CartContent', 'CartGuarantees'],
    'Checkout': ['CheckoutStepper', 'CheckoutContent'],
    'CheckoutMobile': ['MobileCheckoutStepper', 'MobileCheckoutContent', 'MobilePaymentBar'],
    'Product': ['ProductBreadcrumb', 'ProductOverview', 'CompleteLook', 'ProductInformation', 'ProductReviews', 'ProductMobileBar', 'ProductVideoDialog', 'SizeGuideDialog'],
}

for source, folder, name, mobile in PAGES:
    parser = Parser()
    parser.feed((SOURCE / source / 'code.html').read_text(encoding='utf-8'))
    body = find(parser.root, 'body')
    imports, parts = [], []
    section_index = 0
    for index, node in enumerate(body.children):
        if isinstance(node, str) or node.tag in ('script', 'style'):
            continue
        if node.tag == 'main':
            # Keep the original main wrapper and split its sections into editable components.
            inner = [child for child in node.children if isinstance(child, Node) and child.tag not in ('script', 'style')]
            wrappers = []
            while len(inner) == 1 and inner[0].tag == 'div':
                wrappers.append(inner[0])
                inner = [child for child in inner[0].children if isinstance(child, Node) and child.tag not in ('script', 'style')]
            refs = []
            for child in inner:
                if isinstance(child, str) or child.tag in ('script', 'style'):
                    continue
                names = NAMES.get(name, [])
                section_name = names[section_index] if section_index < len(names) else name + 'Section' + str(section_index + 1)
                section_index += 1
                component(f'src/shop/pages/{folder}/components/{section_name}.tsx', section_name, jsx(child))
                imports.append(f"import {{ {section_name} }} from './components/{section_name}'")
                refs.append('      <' + section_name + ' />')
            main_class = node.attrs.get('class', '')
            content = '\n'.join(refs)
            for wrapper in reversed(wrappers):
                content = '    <div className=' + json.dumps(wrapper.attrs.get('class', '')) + '>\n' + content + '\n    </div>'
            parts.append('    <main className=' + json.dumps(main_class) + '>\n' + content + '\n    </main>')
        else:
            shared = not mobile and name != 'Product' and node.tag in ('header', 'footer')
            part_name = ('Store' if shared else name) + node.tag.title() + ('' if node.tag in ('header', 'footer') else str(index))
            path = f'src/components/{part_name}.tsx' if shared else f'src/shop/pages/{folder}/components/{part_name}.tsx'
            if not shared or not (ROOT / path).exists():
                component(path, part_name, jsx(node))
            imports.append(f"import {{ {part_name} }} from '" + (f'../../../components/{part_name}' if shared else f'./components/{part_name}') + "'")
            parts.append('    <' + part_name + ' />')
    outer_class = body.attrs.get('class', '')
    component_name = name + 'View'
    write(f'src/shop/pages/{folder}/{component_name}.tsx', '\n'.join(imports) + '\n\nexport function ' + component_name + '() {\n  return (\n    <div className=' + json.dumps(outer_class) + '>\n' + '\n'.join(parts) + '\n    </div>\n  )\n}\n')
    print(component_name, section_index, 'sections')
