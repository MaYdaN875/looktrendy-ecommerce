export function TrustBadges() {
  return (
    <section className="w-full bg-surface-container-low py-space-lg shadow-inner">
      <div className="max-w-[1280px] mx-auto px-margin md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
          <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)]">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[26px]">
                {"local_shipping"}
              </span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface font-extrabold">
                {"Envío Gratis"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"En pedidos desde $50"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)]">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-[26px]">
                {"change_circle"}
              </span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface font-extrabold">
                {"Devolución Fácil"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"30 días sin complicaciones"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)]">
            <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
              <span className="material-symbols-outlined text-[26px]">
                {"lock"}
              </span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface font-extrabold">
                {"Pago 100% Seguro"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"Encriptación SSL 256-bit"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)]">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[26px]">
                {"forum"}
              </span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface font-extrabold">
                {"Soporte VIP"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"WhatsApp personalizado 24/7"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
