export function MobileCheckoutStepper() {
  return (
    <div className="w-full bg-surface-container-high px-margin py-space-xs flex items-center justify-center gap-1.5 shadow-sm">
      <span className="material-symbols-outlined text-[14px] text-secondary">
        {"verified_user"}
      </span>
      <span className="font-label-badge text-label-badge text-on-surface uppercase tracking-wider">
        {"SSL 256-Bit Encriptado • Transacción Segura"}
      </span>
    </div>
  )
}
