import { Link } from 'react-router'

export function MobileCatalogLink() {
  return (
    <div className="px-margin pt-space-xs pb-space-sm flex justify-center">
      <Link className="w-full py-3 rounded-full bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_10px_25px_-4px_rgba(30,27,75,0.2)] active:scale-98 transition-transform" data-path="catalogo" to="/catalogo">
        <span className="material-symbols-outlined text-[20px] text-secondary-container">
          {"tune"}
        </span>
        <span>
          {"Explorar Todo el Catálogo (140+ Prendas)"}
        </span>
        <span className="material-symbols-outlined text-[18px]">
          {"arrow_forward"}
        </span>
      </Link>
    </div>
  )
}
