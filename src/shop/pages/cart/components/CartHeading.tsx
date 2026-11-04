export function CartHeading() {
  return (
    <div className="flex flex-col gap-space-xs">
      <nav className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
        <a className="hover:text-primary transition-colors" href="#">
          {"Inicio"}
        </a>
        <span className="material-symbols-outlined text-[14px]">
          {"chevron_right"}
        </span>
        <span className="text-primary font-headline-sm">
          {"Bolsa de Compras"}
        </span>
        <span className="material-symbols-outlined text-[14px] text-outline-variant">
          {"chevron_right"}
        </span>
        <span className="text-outline-variant">
          {"Checkout Seguro"}
        </span>
      </nav>
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs mt-space-xs">
        <div className="flex items-baseline gap-space-sm flex-wrap">
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            {" Tu Bolsa Trendy "}
            <span className="inline-block animate-pulse">
              {"🛍️"}
            </span>
          </h1>
          <span className="font-body-md text-body-md text-on-surface-variant font-medium" id="cart-items-counter">
            {" (3 productos seleccionados) "}
          </span>
        </div>
        <div className="flex items-center gap-space-xs text-secondary font-label-lg text-label-lg">
          <span className="material-symbols-outlined text-[18px]">
            {"verified"}
          </span>
          <span>
            {"Stock reservado por 15:00 min"}
          </span>
        </div>
      </div>
    </div>
  )
}
