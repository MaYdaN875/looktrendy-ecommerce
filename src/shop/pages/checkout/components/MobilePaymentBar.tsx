export function MobilePaymentBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl shadow-[0_-8px_24px_rgba(244,63,94,0.12)] p-margin pb-safe">
      <div className="max-w-md mx-auto flex flex-col gap-2">
        <div className="flex items-center justify-between px-1">
          <div>
            <span className="font-body-sm text-body-sm text-on-surface-variant block">
              {"Total a Pagar"}
            </span>
            <span className="font-label-badge text-[10px] text-secondary font-bold">
              {"IVA y envío express incluidos"}
            </span>
          </div>
          <div className="text-right">
            <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-extrabold leading-none">
              {"$105.54"}
            </span>
            <span className="font-label-badge text-label-badge text-on-surface-variant ml-0.5">
              {"USD"}
            </span>
          </div>
        </div>
        <button className="w-full py-3.5 px-6 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all" id="pay-submit-btn" type="button">
          <span>
            {"Pagar $105.54 USD"}
          </span>
          <span className="material-symbols-outlined text-[20px]">
            {"lock"}
          </span>
        </button>
        <div className="flex items-center justify-center gap-3 pt-0.5 text-center">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-secondary">
              {"verified"}
            </span>
            <span className="font-body-sm text-[11px] text-on-surface-variant">
              {"Garantía 30 días"}
            </span>
          </div>
          <span className="text-on-surface-variant/30">
            {"•"}
          </span>
          <a className="flex items-center gap-1 font-body-sm text-[11px] text-primary font-bold" href="#whatsapp-concierge">
            <span className="material-symbols-outlined text-[14px] text-primary">
              {"chat"}
            </span>
            {" Gaby Concierge 24/7 "}
          </a>
        </div>
      </div>
    </div>
  )
}
