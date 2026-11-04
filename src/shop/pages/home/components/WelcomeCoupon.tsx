export function WelcomeCoupon() {
  return (
    <aside className="fixed bottom-4 right-4 z-40 max-w-sm w-[calc(100%-2rem)] bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-space-md shadow-[0_12px_32px_-4px_rgba(185,5,56,0.25)] transition-all duration-300" id="welcome-floating-toast">
      <div className="flex items-start justify-between gap-space-sm">
        <div className="flex items-start gap-space-sm">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">
              {"loyalty"}
            </span>
          </div>
          <div>
            <span className="bg-secondary text-on-secondary px-space-xs py-0.2 rounded font-label-badge text-label-badge uppercase font-extrabold inline-block">
              {"15% DE REGALO"}
            </span>
            <h4 className="font-label-lg text-label-lg text-on-surface font-extrabold leading-tight mt-0.5">
              {"¡Tu Primera Compra Brilla!"}
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
              {" Copia el cupón y llévate envío prioritario de inmediato. "}
            </p>
            <div className="flex items-center gap-space-xs mt-space-xs">
              <span className="bg-surface-container text-primary font-mono font-extrabold text-[12px] px-2 py-0.5 rounded">
                {"TRENDY15"}
              </span>
              <button className="text-secondary hover:text-primary font-label-badge text-label-badge font-bold uppercase transition-colors" id="copy-coupon-btn" type="button">
                {" Copiar "}
              </button>
            </div>
          </div>
        </div>
        <button aria-label="Cerrar aviso" className="text-on-surface-variant hover:text-on-surface p-1 rounded-full" id="close-floating-toast" type="button">
          <span className="material-symbols-outlined text-[18px]">
            {"close"}
          </span>
        </button>
      </div>
    </aside>
  )
}
