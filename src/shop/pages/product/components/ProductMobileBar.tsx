export function ProductMobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-surface-container-lowest/95 backdrop-blur-xl px-gutter py-3 shadow-[0_-4px_20px_rgba(185,5,56,0.12)] flex items-center justify-between gap-3">
      <div className="flex flex-col">
        <span className="font-label-badge text-on-surface-variant uppercase">
          {"Total Prenda"}
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="font-headline-sm text-primary font-black">
            {"$42.00"}
          </span>
          <span className="font-body-sm text-on-surface-variant line-through text-xs">
            {"$58.00"}
          </span>
        </div>
      </div>
      <button className="flex-1 py-3 px-space-md rounded-full bg-primary text-on-primary font-label-md font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2" type="button">
        <span className="material-symbols-outlined text-lg">
          {"shopping_bag"}
        </span>
        <span>
          {"Añadir a la Bolsa"}
        </span>
      </button>
    </div>
  )
}
