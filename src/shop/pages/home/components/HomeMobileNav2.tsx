import { Link } from 'react-router'

export function HomeMobileNav2() {
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_20px_-4px_rgba(244,63,94,0.1)]" data-active-classes="text-primary font-bold">
      <div className="h-16 px-space-xs flex items-center justify-around">
        <Link aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 transition-colors text-primary font-bold" data-path="inicio" to="/">
          <span className="material-symbols-outlined text-[22px]">
            {"home"}
          </span>
          <span className="font-label-md text-label-md text-[11px]">
            {"Inicio"}
          </span>
        </Link>
        <Link className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors" data-path="catalogo" to="/catalogo">
          <span className="material-symbols-outlined text-[22px]">
            {"grid_view"}
          </span>
          <span className="font-label-md text-label-md text-[11px]">
            {"Catálogo"}
          </span>
        </Link>
        <Link className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors relative" data-path="drops" to="/catalogo?coleccion=tendencias">
          <span className="material-symbols-outlined text-[22px] text-tertiary-container">
            {"local_fire_department"}
          </span>
          <span className="font-label-md text-label-md text-[11px]">
            {"Drops"}
          </span>
        </Link>
        <Link className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors relative" data-path="bolsa" to="/carrito">
          <div className="relative flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">
              {"shopping_bag"}
            </span>
            <span className="absolute -top-1 -right-2.5 bg-primary text-on-primary font-label-badge text-label-badge text-[10px] w-4 h-4 rounded-full flex items-center justify-center leading-none">
              {"3"}
            </span>
          </div>
          <span className="font-label-md text-label-md text-[11px]">
            {"Bolsa"}
          </span>
        </Link>
        <a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant transition-colors" data-path="perfil" href="#">
          <span className="material-symbols-outlined text-[22px]">
            {"person"}
          </span>
          <span className="font-label-md text-label-md text-[11px]">
            {"Perfil"}
          </span>
        </a>
      </div>
    </nav>
  )
}
