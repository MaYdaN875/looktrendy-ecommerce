# Look Trendy Gaby

Prototipo visual en React + TypeScript + Vite. Las páginas reproducen los HTML
de Stitch conservados en `desing/`, con sus imágenes, textos, precios y estados
de ejemplo. No procesa compras ni pagos.

## Desarrollo

- `npm install`
- `npm run dev`
- `npm run build`: TypeScript y compilación de producción.
- `npm run lint`: revisión de ESLint.

## Estructura

```text
src/
  components/              # Header y footer compartidos
  lib/                     # Utilidades generales
  router/
    app.router.tsx         # Configuración createBrowserRouter
  shop/
    layouts/
      StoreLayout.tsx      # Outlet y desplazamiento al navegar
    pages/
      home/
      catalog/
      product/
      cart/
      checkout/
      not-found/
  LooktrendyApp.tsx        # RouterProvider
  main.tsx
  index.css
```

Cada carpeta de página contiene su componente Page, su composición View y
una carpeta components con las secciones visuales. Inicio y checkout incluyen
las versiones móviles de Stitch, visibles por debajo de 768 px.

Se conservó la configuración de rutas del usuario, actualizando solo los imports.
El layout deja que cada vista componga el encabezado y pie correspondientes
porque Stitch usa variantes diferentes en producto y móvil.

## Rutas

| URL | Pantalla |
| --- | --- |
| `/` | Inicio |
| `/catalogo` | Catálogo completo de muestra |
| `/producto/:slug` | Ficha visual de Cardigan Floral Pop |
| `/carrito` | Carrito con artículos y resumen de ejemplo |
| `/checkout` | Checkout visual |
| Cualquier otra | Página no encontrada |

Ejemplo: `/producto/cardigan-floral-pop`.
Los enlaces principales permiten recorrer el prototipo. Los filtros, contadores,
cupones, cantidades, membresías y botones de pago no tienen lógica comercial.
Los campos nativos se pueden editar, pero no se envía ni persiste información.
Los parámetros de colección en los enlaces aún no filtran productos.

## Estilos y recursos

Tailwind CSS 3 se compila localmente con PostCSS; la configuración recoge los
tokens del diseño original. No se ejecuta el CDN JavaScript de Tailwind.
Imágenes, Plus Jakarta Sans y Material Symbols conservan sus fuentes externas
y requieren conexión. Algunos recursos del export original pueden no estar disponibles.

`scripts/import-stitch.py` fue usado para convertir los HTML locales a JSX editable,
excluyendo scripts y manejadores de eventos originales. No forma parte del build.
No volver a ejecutarlo sin intención de sobrescribir los componentes visuales.

## Pendiente

Conectar los componentes a datos reales, definir variantes e inventario,
implementar el carrito y seleccionar la integración de pagos.
Los precios, promociones y promesas operativas del diseño son únicamente muestras.

Para desplegar, configurar el hosting con fallback a `index.html` para las rutas
de React Router. No se ha publicado la aplicación.
