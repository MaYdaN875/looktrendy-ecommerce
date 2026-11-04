export function CartGuarantees() {
  return (
    <div className="mt-space-xl pt-space-lg border-t border-surface-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)] flex items-center gap-space-sm">
        <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
          <span className="material-symbols-outlined text-[24px]">
            {"electric_bolt"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-lg text-label-lg text-on-surface font-bold">
            {"Envío Rápido 24-48 hrs"}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {"Despacho express a toda la república."}
          </span>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)] flex items-center gap-space-sm">
        <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary flex-shrink-0">
          <span className="material-symbols-outlined text-[24px]">
            {"all_inclusive"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-lg text-label-lg text-on-surface font-bold">
            {"Cambios Sin Costo"}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {"Si no te queda perfecto, lo cambiamos."}
          </span>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)] flex items-center gap-space-sm">
        <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary flex-shrink-0">
          <span className="material-symbols-outlined text-[24px]">
            {"eco"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-lg text-label-lg text-on-surface font-bold">
            {"Empaque Aesthetic & Eco"}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {"Cajas 100% biodegradables y cute."}
          </span>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)] flex items-center gap-space-sm">
        <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface flex-shrink-0">
          <span className="material-symbols-outlined text-[24px]">
            {"forum"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-lg text-label-lg text-on-surface font-bold">
            {"Gaby Concierge 24/7"}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {"Asesoría de moda y dudas en vivo."}
          </span>
        </div>
      </div>
    </div>
  )
}
