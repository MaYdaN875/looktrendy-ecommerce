import { Link } from 'react-router'

export function ProductHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(185,5,56,0.06)]">
      <div className="bg-primary text-on-primary py-space-xs px-gutter lg:px-gutter-desktop">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between text-center font-label-md">
          <span className="hidden md:inline font-normal text-on-primary/80">
            {"Envíos gratis en compras mayores a $89.00"}
          </span>
          <div className="flex-1 md:flex-none flex items-center justify-center gap-space-xs font-bold">
            <span>
              {"🔥 ÚLTIMA OPORTUNIDAD: 20% OFF CON CÓDIGO"}
            </span>
            <span className="bg-on-primary text-primary px-space-xs py-0.5 rounded-full font-label-badge tracking-wider">
              {"TRENDY20"}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-space-md">
            <button className="flex items-center gap-space-xs text-on-primary hover:text-on-primary/80 font-label-md" type="button">
              <span className="material-symbols-outlined text-base">
                {"language"}
              </span>
              <span>
                {"ES / USD $"}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-28 max-w-[1280px] mx-auto px-gutter lg:px-gutter-desktop flex flex-col justify-between pt-space-sm pb-space-xs">
        <div className="flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <button className="lg:hidden text-on-surface p-space-xs rounded-full hover:bg-surface-container-high hover:text-on-surface" type="button">
              <span className="material-symbols-outlined text-2xl">
                {"menu"}
              </span>
            </button>
            <Link className="flex items-center gap-space-xs group" data-path="inicio" to="/">
              <span className="font-headline-md tracking-tight font-extrabold text-primary">
                {"LOOK TRENDY GABY"}
              </span>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 max-w-lg mx-space-lg">
            <div className="relative w-full">
              <input className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm pl-10 pr-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-primary" placeholder="Buscar vestidos, tops, conjuntos deportivos..." type="search" />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                {"search"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm sm:gap-space-md">
            <button className="md:hidden text-on-surface-variant hover:text-on-surface p-space-xs rounded-full hover:bg-surface-container-high" type="button">
              <span className="material-symbols-outlined text-xl">
                {"search"}
              </span>
            </button>
            <a className="relative p-space-xs text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-container-high transition-colors" data-path="favoritos" href="#">
              <span className="material-symbols-outlined text-2xl">
                {"favorite"}
              </span>
              <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary font-label-badge w-4 h-4 rounded-full flex items-center justify-center">
                {"3"}
              </span>
            </a>
            <Link className="flex items-center gap-space-xs bg-surface-container-lowest px-3 py-1.5 rounded-full shadow-[0_2px_8px_rgba(185,5,56,0.08)] hover:bg-surface-container-high transition-colors group" data-path="carrito" to="/carrito">
              <div className="relative flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">
                  {"shopping_bag"}
                </span>
                <span className="absolute -top-1 -right-1 bg-primary text-on-primary font-label-badge w-4 h-4 rounded-full flex items-center justify-center">
                  {"2"}
                </span>
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-label-badge text-on-surface-variant uppercase">
                  {"Bolsa"}
                </span>
                <span className="font-label-md text-primary font-bold">
                  {"$128.00"}
                </span>
              </div>
            </Link>
            <a className="flex items-center gap-space-xs pl-space-xs rounded-full hover:bg-surface-container-high p-1 transition-colors" data-path="mi-cuenta" href="#">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-fixed" src="https://lh3.googleusercontent.com/aida/AEtjO1Wv058rfePymUAAiyvI65TxqTt4kTkyvC524wlk4yWbtHakLrgxv7Oo4N400yQyZWcWvzmiOpOTUd-fgWlTnL6YdOSMvWkG7dNCypGYNcJ_pyq_aKnDMtrm_NNlGLRgYUrLw0X3mxJIqK6nKJNFE9nzdHVrYwNJ8AavYNgEZeu7LYWf6LVHFkEsw6hCQ2_PNig6Cweq_4IkxzUj9n4egwgbTmCzD7P7HBVqf2xh6urLHRq7BXUypT0_JQ" />
              <span className="hidden xl:inline font-label-md text-on-surface font-semibold">
                {"Gaby"}
              </span>
            </a>
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar pt-1">
          <nav className="flex items-center gap-space-xs lg:gap-space-sm whitespace-nowrap min-w-max pb-1" data-active-classes="bg-primary-container text-on-primary-container font-bold rounded-full">
            <Link className="px-space-md py-1.5 rounded-full font-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="inicio" to="/">
              {"Inicio"}
            </Link>
            <Link className="px-space-md py-1.5 rounded-full font-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="ropa-deportiva" to="/catalogo?coleccion=deportiva">
              {"Ropa Deportiva"}
            </Link>
            <Link className="px-space-md py-1.5 rounded-full font-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="invierno" to="/catalogo?coleccion=invierno">
              {"Invierno"}
            </Link>
            <Link className="px-space-md py-1.5 rounded-full font-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="verano" to="/catalogo?coleccion=verano">
              {"Verano"}
            </Link>
            <Link className="px-space-md py-1.5 rounded-full font-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="tendencias" to="/catalogo?coleccion=tendencias">
              {"Tendencias"}
            </Link>
            <Link className="px-space-md py-1.5 rounded-full font-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="ofertas" to="/catalogo?coleccion=ofertas">
              {"Ofertas"}
            </Link>
            <Link className="px-space-md py-1.5 rounded-full font-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="catalogo" to="/catalogo">
              {"Catálogo"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
