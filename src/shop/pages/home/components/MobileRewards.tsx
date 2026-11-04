export function MobileRewards() {
  return (
    <section className="px-margin py-space-xs">
      <div className="relative overflow-hidden rounded-xl p-margin bg-gradient-to-br from-surface-container-high via-surface-container-highest to-surface-container text-on-surface shadow-[0_4px_16px_rgba(244,63,94,0.06)]">
        <div className="relative z-10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm shadow-sm">
                <span className="material-symbols-outlined text-[18px]">
                  {"diamond"}
                </span>
              </span>
              <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wide">
                {"Trendy Rewards App"}
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-primary font-extrabold">
              {"340 Pts"}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {" Estás a "}
            <strong className="text-primary">
              {"60 puntos"}
            </strong>
            {" de tu próximo regalo sorpresa en la bolsa. "}
          </p>
          <div className="w-full bg-surface-container-lowest rounded-full h-2 overflow-hidden shadow-inner">
            <div className="bg-gradient-to-r from-secondary-container via-primary-container to-primary h-full rounded-full" style={{"width": "85%"}}>

            </div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="font-body-sm text-body-sm text-[11px] text-on-surface-variant">
              {"Nivel: Trendsetter Oro"}
            </span>
            <button className="font-label-md text-label-md text-primary font-bold flex items-center gap-0.5 hover:underline" type="button">
              <span>
                {"Canjear Beneficios"}
              </span>
              <span className="material-symbols-outlined text-[16px]">
                {"arrow_forward"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
