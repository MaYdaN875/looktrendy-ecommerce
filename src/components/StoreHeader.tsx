import { Link } from 'react-router'

export function StoreHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 shadow-[0_4px_20px_-4px_rgba(244,63,94,0.12)]">
      <div className="bg-primary text-on-primary py-space-xs px-margin text-center font-label-md text-label-md flex items-center justify-center gap-space-sm">
        <span className="material-symbols-outlined text-[16px]">
          {"auto_awesome"}
        </span>
        <span className="">
          {"ENVÍOS GRATIS en compras mayores a $50 | 15% OFF en tu primera compra con el cupón TRENDY15"}
        </span>
        <span className="material-symbols-outlined text-[16px]">
          {"auto_awesome"}
        </span>
      </div>
      <div className="bg-surface-container-lowest/95 backdrop-blur-md px-margin md:px-margin-desktop">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-space-md py-space-sm">
          <div className="flex items-center gap-space-sm">
            <Link className="flex items-center gap-space-sm group" data-path="inicio" to="/">
              <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-primary to-secondary-container">
                <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1USNOUTZm7uqytwbvQeklQ-WfZ_yPXW3ya2sYf-vAXCpxWcwzJse2sPHTF6LeAeWltXd4hjdqA3aW2kCjpx7bL6F4-j3IPf7LrSBRuepTsNLt97u7rUhlUYgYUatlFbgyqJw6MUukO9AZfRCbX599t26IM7SoWf6KmhLMMx79Ubfk-mj9zC8DBSPjNnz9xMA9e9l5iIfSK7FaE4vdNG3dG8eeDOnw8T0qcJj4KrX8kMlj5FVvqHTeLscJyp" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-none uppercase font-extrabold">
                  {"LOOK TRENDY"}
                </span>
                <span className="font-label-badge text-label-badge text-secondary tracking-widest leading-none uppercase font-bold">
                  {"GABY BOUTIQUE"}
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 max-w-lg mx-space-md">
            <div className="relative w-full flex items-center">
              <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-full pl-space-md pr-space-xl py-space-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner placeholder:text-on-surface-variant/60" placeholder="Buscar vestidos, activewear, abrigos, tops..." type="text" />
              <button className="absolute right-1 w-8 h-8 bg-primary hover:bg-primary-container text-on-primary rounded-full flex items-center justify-center transition-all" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"search"}
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden lg:flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md cursor-pointer hover:text-on-surface">
              <span className="material-symbols-outlined text-[18px]">
                {"language"}
              </span>
              <span className="">
                {"ES / USD"}
              </span>
              <span className="material-symbols-outlined text-[14px]">
                {"expand_more"}
              </span>
            </div>
            <a className="hidden sm:flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" data-path="mi-cuenta" href="#">
              <span className="material-symbols-outlined text-[20px]">
                {"person"}
              </span>
              <span className="hidden xl:inline">
                {"Mi Cuenta"}
              </span>
            </a>
            <a className="relative flex items-center text-on-surface-variant hover:text-primary transition-colors p-space-xs" data-path="lista-de-deseos" href="#">
              <span className="material-symbols-outlined text-[22px]">
                {"favorite"}
              </span>
              <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary rounded-full font-label-badge text-label-badge w-4 h-4 flex items-center justify-center">
                {"3"}
              </span>
            </a>
            <div className="relative group">
              <Link className="flex items-center gap-space-xs bg-primary text-on-primary px-space-md py-space-sm rounded-full shadow-[0_4px_14px_-2px_rgba(244,63,94,0.3)] hover:bg-primary-container transition-all" data-path="carrito" to="/carrito">
                <span className="material-symbols-outlined text-[20px]">
                  {"shopping_bag"}
                </span>
                <span className="font-label-lg text-label-lg hidden sm:inline">
                  {"$128.00"}
                </span>
                <span className="bg-surface-container-lowest text-primary rounded-full font-label-badge text-label-badge w-5 h-5 flex items-center justify-center ml-1">
                  {"2"}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <nav className="max-w-[1280px] mx-auto flex items-center justify-center gap-space-lg overflow-x-auto py-space-xs border-t border-surface-container" data-active-classes="text-primary font-headline-sm border-b-2 border-primary">
          <Link aria-current="page" className="whitespace-nowrap transition-colors py-1 text-primary font-headline-sm border-b-2 border-primary" data-path="inicio" to="/">
            {"Inicio"}
          </Link>
          <Link className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg whitespace-nowrap transition-colors py-1" data-path="ropa-deportiva" to="/catalogo?coleccion=deportiva">
            {"Ropa Deportiva"}
          </Link>
          <Link className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg whitespace-nowrap transition-colors py-1" data-path="invierno" to="/catalogo?coleccion=invierno">
            {"Invierno"}
          </Link>
          <Link className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg whitespace-nowrap transition-colors py-1" data-path="verano" to="/catalogo?coleccion=verano">
            {"Verano"}
          </Link>
          <Link className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg whitespace-nowrap transition-colors py-1" data-path="tendencias" to="/catalogo?coleccion=tendencias">
            {"Tendencias"}
          </Link>
          <Link className="text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg whitespace-nowrap transition-colors py-1" data-path="ofertas" to="/catalogo?coleccion=ofertas">
            {"Ofertas"}
          </Link>
          <Link className="inline-flex items-center gap-1 bg-primary text-on-primary font-label-md text-label-md px-space-md py-1 rounded-full shadow-sm hover:bg-primary-container transition-all whitespace-nowrap" data-path="catalogo" to="/catalogo">
            <span className="material-symbols-outlined text-[16px]">
              {"storefront"}
            </span>
            <span className="">
              {"Ver Catálogo 🛍️"}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
