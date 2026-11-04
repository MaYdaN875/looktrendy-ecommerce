import { Link } from 'react-router'

export function ProductBreadcrumb() {
  return (
    <section className="max-w-[1280px] mx-auto w-full px-gutter lg:px-gutter-desktop pt-space-md pb-space-sm">
      <div className="flex flex-wrap items-center justify-between gap-space-sm">
        <nav className="flex items-center flex-wrap gap-1.5 font-label-md text-on-surface-variant">
          <Link className="hover:text-primary transition-colors" data-path="inicio" to="/">
            {"Inicio"}
          </Link>
          <span className="material-symbols-outlined text-xs">
            {"chevron_right"}
          </span>
          <a className="hover:text-primary transition-colors" href="#">
            {"Tejidos & Abrigos"}
          </a>
          <span className="material-symbols-outlined text-xs">
            {"chevron_right"}
          </span>
          <a className="hover:text-primary transition-colors" href="#">
            {"Cardigans"}
          </a>
          <span className="material-symbols-outlined text-xs">
            {"chevron_right"}
          </span>
          <span className="text-on-surface font-bold">
            {"Cardigan Floral Pop Petals"}
          </span>
          <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full font-label-badge ml-1.5">
            {"SKU: LTG-CD-042"}
          </span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-badge animate-pulse">
          <span className="material-symbols-outlined text-sm text-primary">
            {"local_fire_department"}
          </span>
          <span>
            {"48 CHICAS TIENEN ESTE DROP EN SU CARRITO"}
          </span>
        </div>
      </div>
    </section>
  )
}
