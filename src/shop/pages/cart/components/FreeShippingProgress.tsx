export function FreeShippingProgress() {
  return (
    <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col gap-space-xs">
      <div className="flex items-center justify-between text-on-surface">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[20px]">
            {"local_shipping"}
          </span>
          <span className="font-body-md text-body-md text-on-surface" id="free-shipping-text">
            {" ¡Te faltan solo "}
            <strong className="text-primary font-headline-sm">
              {"$12.00"}
            </strong>
            {" para obtener Envío Gratis! ✨ "}
          </span>
        </div>
        <span className="font-label-md text-label-md text-on-surface-variant font-bold">
          {"Meta: $100.00"}
        </span>
      </div>
      <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden p-0.5 relative">
        <div className="h-full bg-gradient-to-r from-secondary-container via-primary-container to-primary rounded-full transition-all duration-500 ease-out" id="free-shipping-progress" style={{"width": "88%"}}>

        </div>
      </div>
      <div className="flex items-center justify-between text-on-surface-variant font-label-badge text-label-badge pt-0.5">
        <span>
          {"$0.00"}
        </span>
        <span className="text-secondary font-bold">
          {"🎯 ¡Casi listo! Agrega un accesorio y ahorra el envío"}
        </span>
        <span>
          {"$100.00"}
        </span>
      </div>
    </div>
  )
}
