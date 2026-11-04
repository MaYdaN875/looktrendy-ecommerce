export function FlashSaleSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-desktop mb-space-xl" id="ofertas-flash">
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-primary to-primary-container p-space-lg md:p-space-xl text-on-primary shadow-[0_10px_30px_-5px_rgba(185,5,56,0.3)]">
        <div className="absolute right-0 top-0 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none">

        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-primary font-label-badge text-label-badge uppercase tracking-wider px-space-md py-1 rounded-full mb-space-sm font-extrabold">
              <span className="material-symbols-outlined text-[16px] text-tertiary animate-bounce">
                {"alarm"}
              </span>
              <span className="">
                {"OFERTA FLASH DE TEMPORADA"}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-primary font-black mb-1">
              {" Hasta 40% OFF en Prendas Seleccionadas "}
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed max-w-lg">
              {" Aplica el cupón especial "}
              <span className="bg-surface-container-lowest text-primary font-extrabold px-2 py-0.5 rounded-md font-mono tracking-wider">
                {"TRENDY40"}
              </span>
              {" antes de que el cronómetro llegue a cero. "}
            </p>
          </div>
          <div className="flex items-center gap-space-sm sm:gap-space-md">
            <div className="flex flex-col items-center justify-center bg-surface-container-lowest/15 backdrop-blur-md rounded-xl p-space-sm sm:p-space-md min-w-[70px]">
              <span className="font-headline-lg text-headline-lg font-extrabold text-on-primary" id="timer-hours">
                {"23"}
              </span>
              <span className="font-label-badge text-label-badge uppercase text-primary-fixed">
                {"Horas"}
              </span>
            </div>
            <span className="font-headline-md text-headline-md text-primary-fixed font-black">
              {":"}
            </span>
            <div className="flex flex-col items-center justify-center bg-surface-container-lowest/15 backdrop-blur-md rounded-xl p-space-sm sm:p-space-md min-w-[70px]">
              <span className="font-headline-lg text-headline-lg font-extrabold text-on-primary" id="timer-minutes">
                {"42"}
              </span>
              <span className="font-label-badge text-label-badge uppercase text-primary-fixed">
                {"Minutos"}
              </span>
            </div>
            <span className="font-headline-md text-headline-md text-primary-fixed font-black">
              {":"}
            </span>
            <div className="flex flex-col items-center justify-center bg-surface-container-lowest/15 backdrop-blur-md rounded-xl p-space-sm sm:p-space-md min-w-[70px]">
              <span className="font-headline-lg text-headline-lg font-extrabold text-on-primary" id="timer-seconds">
                {"59"}
              </span>
              <span className="font-label-badge text-label-badge uppercase text-primary-fixed">
                {"Segundos"}
              </span>
            </div>
          </div>
          <a className="bg-surface-container-lowest hover:bg-secondary-fixed text-primary hover:text-on-secondary-fixed font-label-lg text-label-lg px-space-xl py-space-md rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-center shrink-0" href="#catalogo-trending">
            {" Comprar Ahora con Descuento "}
          </a>
        </div>
      </div>
    </section>
  )
}
