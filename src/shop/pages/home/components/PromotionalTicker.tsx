export function PromotionalTicker() {
  return (
    <div className="w-full bg-secondary text-on-secondary overflow-hidden py-space-xs shadow-sm">
      <div className="flex items-center gap-space-lg whitespace-nowrap animate-pulse px-margin">
        <span className="font-label-badge text-label-badge uppercase tracking-widest flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">
            {"bolt"}
          </span>
          {" NUEVO DROP EXCLUSIVO Y2K "}
        </span>
        <span className="text-secondary-fixed text-[10px]">
          {"•"}
        </span>
        <span className="font-label-badge text-label-badge uppercase tracking-widest">
          {"ENVÍOS EXPRESS EN 24 HORAS"}
        </span>
        <span className="text-secondary-fixed text-[10px]">
          {"•"}
        </span>
        <span className="font-label-badge text-label-badge uppercase tracking-widest flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">
            {"local_mall"}
          </span>
          {" HASTA 3 CUOTAS SIN INTERÉS "}
        </span>
        <span className="text-secondary-fixed text-[10px]">
          {"•"}
        </span>
        <span className="font-label-badge text-label-badge uppercase tracking-widest">
          {"15% OFF PRIMER PEDIDO: CODE TRENDY15"}
        </span>
      </div>
    </div>
  )
}
