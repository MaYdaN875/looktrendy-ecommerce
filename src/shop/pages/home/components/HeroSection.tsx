import { Link } from 'react-router'

export function HeroSection() {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-desktop pt-space-md md:pt-space-xl pb-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-space-xs bg-primary-fixed text-on-primary-fixed px-space-md py-1 rounded-full shadow-sm mb-space-md">
            <span className="material-symbols-outlined text-primary text-[18px]">
              {"verified"}
            </span>
            <span className="font-label-badge text-label-badge uppercase tracking-wider font-extrabold">
              {"Edición Limitada 2024"}
            </span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface leading-[1.1] mb-space-md">
            {" Define Tu Propio "}
            <br />
            <span className="text-primary italic font-black">
              {"Estilo Pop & Chic"}
            </span>
            <span className="inline-block transform rotate-6 ml-2 text-tertiary">
              {"✨"}
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg leading-relaxed">
            {" Descubre la nueva colección con vibras frescas, colores atrevidos y prendas diseñadas para elevar tu confianza y destacar en cualquier momento. "}
          </p>
          <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto mb-space-xl">
            <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-xl py-space-md rounded-full shadow-[0_6px_20px_-2px_rgba(185,5,56,0.35)] transition-all hover:scale-105 active:scale-95 text-center" to="/catalogo">
              <span className="material-symbols-outlined text-[20px]">
                {"shopping_bag"}
              </span>
              <span className="">
                {"Ver Catálogo Completo"}
              </span>
              <span className="material-symbols-outlined text-[18px]">
                {"arrow_forward"}
              </span>
            </Link>
            <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest hover:bg-secondary-fixed text-secondary font-label-lg text-label-lg px-space-lg py-space-md rounded-full shadow-sm transition-all hover:scale-105 active:scale-95 text-center" href="#ofertas-flash">
              <span className="material-symbols-outlined text-[18px]">
                {"local_fire_department"}
              </span>
              <span className="">
                {"Ver Ofertas de Temporada"}
              </span>
            </a>
          </div>
          <div className="grid grid-cols-3 gap-space-md pt-space-md bg-surface-container-low/60 p-space-md rounded-xl w-full sm:max-w-lg shadow-inner">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary font-extrabold">
                {"+12.5k"}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                {"Trendy Babes"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-secondary font-extrabold">
                {"4.9/5"}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-0.5">
                <span className="material-symbols-outlined text-tertiary-container text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                {" Calificación "}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-on-surface font-extrabold">
                {"24h"}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                {"Despacho Veloz"}
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative flex justify-center mt-space-md lg:mt-0">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-fixed-dim/40 rounded-full blur-3xl pointer-events-none">

          </div>
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary-container/40 rounded-full blur-3xl pointer-events-none">

          </div>
          <div className="relative w-full max-w-md bg-surface-container-lowest p-space-md rounded-xl shadow-[0_12px_36px_-6px_rgba(185,5,56,0.18)] transition-transform hover:-translate-y-1">
            <div className="relative w-full h-[420px] rounded-lg overflow-hidden bg-gradient-to-b from-primary-fixed to-surface-container">
              <img alt="Look Trendy Gaby Estilo Pop Y2K" className="w-full h-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwctidDUBZRKLm7dg7_UY85S8vUr6m6vahaQoy-c5ZQtYRw_J-kX7wIdSfeDA-rbt7af6v8rw5EeoYUPmv444UPOP_dv3yQD2632dEIxkbYr7oyxDVTv9_17-5ClIcFsUrkAUMYkJpfLDJIrshzN-BKXo3k1wRkRwZB9UaLF9b-VDecmnv2JurywuEucRkpoEEUMTNcXpoyUH0ZI6X8zG4qh_wU22cHk6496alOQVosqJ8Ap-PcvlXYw" />
              <div className="absolute top-space-md left-space-md bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-1 rounded-full shadow-md flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping">

                </span>
                <span className="font-label-badge text-label-badge text-on-surface uppercase font-black">
                  {"DROP #04 ACTIVO"}
                </span>
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-lg shadow-lg flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold">
                    {"Outfit Icónico"}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight">
                    {"Cardigan Pop Petals"}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Colección Bubblegum Pink"}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-headline-sm text-headline-sm text-primary font-extrabold block">
                    {"$42.00"}
                  </span>
                  <Link className="inline-flex items-center text-secondary hover:text-on-surface font-label-md text-label-md font-bold mt-0.5" to="/producto/cardigan-floral-pop">
                    {" Ver detalle → "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-surface-container-lowest p-space-sm px-space-md rounded-full shadow-[0_8px_20px_-2px_rgba(0,104,122,0.2)] flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                {"favorite"}
              </span>
              <span className="font-label-badge text-label-badge text-on-surface font-extrabold uppercase">
                {"Must-Have Y2K"}
              </span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-tertiary-fixed text-on-tertiary-fixed p-space-sm px-space-md rounded-full shadow-[0_8px_20px_-2px_rgba(163,103,0,0.2)] flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-tertiary text-[18px]">
                {"verified_user"}
              </span>
              <span className="font-label-badge text-label-badge font-extrabold">
                {"Calidad 100% Garantizada"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
