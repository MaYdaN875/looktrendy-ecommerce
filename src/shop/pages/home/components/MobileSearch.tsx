export function MobileSearch() {
  return (
    <section className="px-margin py-space-xs">
      <div className="relative flex items-center">
        <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
          {"search"}
        </span>
        <input className="w-full h-11 pl-10 pr-20 bg-surface-container rounded-full text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-[0_2px_8px_rgba(244,63,94,0.06)] transition-all" placeholder="Buscar tops, cardigans Y2K, bikinis..." type="search" />
        <div className="absolute right-2 flex items-center gap-1">
          <button aria-label="Búsqueda Visual por Foto" className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-transform" type="button">
            <span className="material-symbols-outlined text-[19px]">
              {"photo_camera"}
            </span>
          </button>
          <button aria-label="Filtros rápidos" className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center active:scale-95 transition-transform" type="button">
            <span className="material-symbols-outlined text-[19px]">
              {"tune"}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
