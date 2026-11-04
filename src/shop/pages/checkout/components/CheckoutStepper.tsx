export function CheckoutStepper() {
  return (
    <div className="mb-space-lg bg-surface-container-lowest rounded-xl p-space-md shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pb-space-sm">
        <div className="flex items-center gap-space-xs text-secondary">
          <span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>
            {"lock"}
          </span>
          <span className="font-label-lg text-label-lg tracking-wide uppercase">
            {"Checkout Seguro & Encriptado"}
          </span>
        </div>
        <div className="flex items-center gap-space-sm text-on-surface-variant font-label-md text-label-md bg-surface-container-low px-space-md py-1 rounded-full">
          <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse">

          </span>
          <span>
            {"Transacción SSL 256-Bit Certificada"}
          </span>
          <span className="text-outline-variant">
            {"•"}
          </span>
          <span>
            {"Protección Antifraude Activa"}
          </span>
        </div>
      </div>
      <div className="pt-space-sm">
        <div className="grid grid-cols-3 gap-space-sm relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-surface-container -translate-y-1/2 z-0 hidden sm:block">

          </div>
          <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-gradient-to-r from-secondary to-primary -translate-y-1/2 z-0 hidden sm:block">

          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center gap-space-xs sm:gap-space-sm bg-surface-container-lowest sm:bg-transparent pr-2">
            <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-badge text-label-badge shadow-sm">
              <span className="material-symbols-outlined text-[18px]">
                {"check"}
              </span>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-label-badge text-label-badge text-secondary uppercase tracking-wider font-bold">
                {"Paso 1"}
              </p>
              <p className="font-label-md text-label-md text-on-surface font-semibold">
                {"Envío & Dirección"}
              </p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center gap-space-xs sm:gap-space-sm bg-surface-container-lowest sm:bg-transparent px-2">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-badge text-label-badge shadow-md shadow-primary/20">
              <span>
                {"2"}
              </span>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-label-badge text-label-badge text-primary uppercase tracking-wider font-bold">
                {"Paso 2 • Activo"}
              </p>
              <p className="font-label-md text-label-md text-on-surface font-extrabold">
                {"Método de Pago"}
              </p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center justify-end gap-space-xs sm:gap-space-sm bg-surface-container-lowest sm:bg-transparent pl-2">
            <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-label-badge text-label-badge">
              <span>
                {"3"}
              </span>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-wider">
                {"Paso 3"}
              </p>
              <p className="font-label-md text-label-md text-on-surface-variant">
                {"Confirmación"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
