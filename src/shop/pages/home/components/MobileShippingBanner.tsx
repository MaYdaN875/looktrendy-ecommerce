export function MobileShippingBanner() {
  return (
    <section className="px-margin py-1.5">
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-secondary-fixed/50 text-on-secondary-fixed">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="material-symbols-outlined text-[18px] text-secondary">
            {"local_shipping"}
          </span>
          <span className="font-label-badge text-label-badge truncate">
            {"🚚 Envío Gratis en órdenes > $50 • Código "}
            <strong className="text-primary font-bold">
              {"TRENDY15"}
            </strong>
          </span>
        </div>
        <span className="font-label-badge text-label-badge text-secondary font-bold uppercase pl-1 shrink-0">
          {"Activo"}
        </span>
      </div>
    </section>
  )
}
