import { Link } from 'react-router'

export function ProductOverview() {
  return (
    <section className="max-w-[1280px] mx-auto w-full px-gutter lg:px-gutter-desktop pb-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <div className="relative w-full aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-lg group">
            <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
            <img alt="Cardigan Floral Pop Petals Y2K Edition - Vista Frontal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in" id="main-product-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp1rVCxrZ_Qiv1V_RR_wa7ggpX9h2JehnUxBCAFaVEHBB4wlX7DHAg8CQYWvpJ04eIkYLchgdkuWHXi1G27K7KRgG2uYhOjmbkXrNfsbQHe4-WzvR8xY0ToSQdOlMr1cq1EeakBQcpBNtaARYcUiSFcP989IUyJZg86HjcRrWcPv3ewRNCJGeyvX0H8aKJ3fu7cVN0MAFo4hmPq4JF6IvhW3AaME9U5hvji8e8c372lo9Lr3-joM5k" />
            </Link>
            <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
              <span className="bg-secondary text-on-secondary px-3 py-1.5 rounded-full font-label-badge uppercase tracking-wider shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">
                  {"auto_awesome"}
                </span>
                {" Bestseller Drop #04 "}
              </span>
              <span className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-label-badge uppercase tracking-wider shadow-sm">
                {" -28% Y2K POP SALE "}
              </span>
            </div>
            <button className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md text-on-surface hover:text-primary px-3 py-1.5 rounded-full font-label-md flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all" type="button">
              <span className="material-symbols-outlined text-base text-primary">
                {"play_circle"}
              </span>
              <span>
                {"Video Try-On (360°)"}
              </span>
            </button>
            <div className="absolute bottom-4 left-4 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2 max-w-xs">
              <div className="flex -space-x-1.5">
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-badge flex items-center justify-center">
                  {"S"}
                </span>
                <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-label-badge flex items-center justify-center">
                  {"M"}
                </span>
                <span className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary font-label-badge flex items-center justify-center">
                  {"XS"}
                </span>
              </div>
              <div className="text-left leading-tight">
                <p className="font-label-badge text-on-surface font-bold">
                  {"⭐ 4.9/5 (184 valoraciones)"}
                </p>
                <p className="font-body-sm text-on-surface-variant">
                  {"Calce comprobado & real"}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-space-sm sm:gap-space-md">
            <button className="thumbnail-btn relative aspect-square rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-md transition-all ring-2 ring-primary p-0.5" type="button">
              <img alt="Miniatura Vista Frontal" className="w-full h-full object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp1rVCxrZ_Qiv1V_RR_wa7ggpX9h2JehnUxBCAFaVEHBB4wlX7DHAg8CQYWvpJ04eIkYLchgdkuWHXi1G27K7KRgG2uYhOjmbkXrNfsbQHe4-WzvR8xY0ToSQdOlMr1cq1EeakBQcpBNtaARYcUiSFcP989IUyJZg86HjcRrWcPv3ewRNCJGeyvX0H8aKJ3fu7cVN0MAFo4hmPq4JF6IvhW3AaME9U5hvji8e8c372lo9Lr3-joM5k" />
              <span className="absolute bottom-1 right-1 bg-surface-container-lowest/90 font-label-badge text-on-surface px-1.5 py-0.5 rounded text-[10px]">
                {"Frente"}
              </span>
            </button>
            <button className="thumbnail-btn relative aspect-square rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-md transition-all p-0.5" type="button">
              <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
              <img alt="Miniatura Espalda Floral" className="w-full h-full object-cover rounded-lg" data-alt="Back angle view of a pastel pink floral knit cardigan with bold white and cyan pop petal embroidery on the shoulder and rear hem, studio light, Y2K aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATT6EEWKolEkKiJo9Usv0miuFLm25VT1nitHO2ZeFWZBQ4Banwf1iic3KXfrPa5HOdWF8NotYGYU9dyQ40ubtZhiVFrK6CJTskRFLmdheVi5-osCwEy7YKbPU3YN2KXOwecSnjFiKes1iCHGAmYJlZ07y-mKFt-_qKuqW9re_Zb4MOhnZuHwLBLSOmi7K5nI3WU5WgdYWZzgt26KQrYQQYhfxVIPFCHwibqqhX5OU" />
              </Link>
              <span className="absolute bottom-1 right-1 bg-surface-container-lowest/90 font-label-badge text-on-surface px-1.5 py-0.5 rounded text-[10px]">
                {"Espalda"}
              </span>
            </button>
            <button className="thumbnail-btn relative aspect-square rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-md transition-all p-0.5" type="button">
              <img alt="Miniatura Textura Tejido Macro" className="w-full h-full object-cover rounded-lg" data-alt="Extreme macro close-up of high quality organic jacquard knit cotton fibers in bubblegum pink with raised tactile floral petal relief, soft morning daylight, hyper detailed texture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATsbLAJYCc5bNswISkrYUh_yoG-brHN5zzZ7gfFU5MZLqZx_q5QFeqrSWBzc9IFnAzEt_GLcBFfoX1ag9F7WbeZuK-t9cBSo7gfJ_faQqGEly4qqTgjfu7sBU-47hG2CON1AGShwzUqVg9ZnAysvc2VwoAMtUiI3KpyYvqwi0QQkOnJdMCO2lOgMr14KUzILfgsQlJ8hnAjCU2jQV6IVsz-KjAbmaByh1Xzn1H47w" />
              <span className="absolute bottom-1 right-1 bg-surface-container-lowest/90 font-label-badge text-on-surface px-1.5 py-0.5 rounded text-[10px]">
                {"Macro 380g"}
              </span>
            </button>
            <button className="relative aspect-square rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-md transition-all p-0.5 group" type="button">
              <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
              <img alt="Miniatura Fitting Camila" className="w-full h-full object-cover rounded-lg group-hover:opacity-90" data-alt="Young stylish Latina model smiling in dynamic movement wearing the floral cardigan, studio set with soft pink and cyan neon ambient gradients, modern pop styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByIABoZnayfag4PVTfvNIQv0XFJXUqomLQ9FOxQ2xRkCdOZnUpIsbVV5WtHJKgDCcNfitY2Vdrf2-S1apqmPVbW9CHlVv_DoVKqGTld-gpLz7ZnFQ4waBRl0em9ODU2e7jDknPXmCKjUw9JCZI4SvCk2SF7HujlGsjoNxdG-CYxKfjEKJGmyDP5z0ujRdSmiJbWmVxhovKOyv9jhTfBsEZGHUixxFmj6lWeSxVSYg" />
              </Link>
              <div className="absolute inset-0 bg-primary/20 flex flex-col items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-2xl drop-shadow">
                  {"play_circle"}
                </span>
                <span className="font-label-badge mt-0.5 text-[9px] uppercase tracking-wider bg-surface-container-lowest/90 text-on-surface px-1 py-0.5 rounded">
                  {"Camila (1.68m)"}
                </span>
              </div>
            </button>
          </div>
          <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold font-label-lg">
                {" C "}
              </div>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  {"Camila mide 1.68m y usa Talla S"}
                </p>
                <p className="font-body-sm text-on-surface-variant">
                  {"Busto 86cm • Cintura 64cm • Cadera 92cm"}
                </p>
              </div>
            </div>
            <button className="text-primary hover:text-primary-container font-label-md flex items-center gap-1" type="button">
              <span>
                {"Ver tabla completa"}
              </span>
              <span className="material-symbols-outlined text-base">
                {"straighten"}
              </span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-space-md lg:sticky lg:top-32">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="font-label-badge text-secondary uppercase tracking-widest font-extrabold">
                {"Edición Limitada Pop Y2K"}
              </span>
              <span className="font-label-badge text-on-surface-variant flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping">

                </span>
                {" Stock listo para envío "}
              </span>
            </div>
            <h1 className="font-headline-lg text-on-surface font-extrabold tracking-tight">
              {" Cardigan Floral Pop Petals "}
            </h1>
            <p className="font-body-md text-on-surface-variant mt-1">
              {" Tejido jacquard premium de tacto nube con pétalos bordados en relieve y botones en tono pastel candy. "}
            </p>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="font-display-hero text-primary font-black tracking-tight" id="display-price">
                {"$42.00"}
              </span>
              <span className="font-headline-sm text-on-surface-variant/60 line-through font-normal">
                {"$58.00 USD"}
              </span>
              <span className="bg-primary-fixed text-primary px-2.5 py-1 rounded-full font-label-badge font-bold">
                {" AHORRAS $16.00 (28% OFF) "}
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1 font-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary text-lg">
                {"credit_card"}
              </span>
              <span>
                {"o "}
                <strong>
                  {"3 cuotas sin interés de $14.00"}
                </strong>
                {" con Kueski, Klarna o Mercado Pago"}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-on-surface font-bold">
                {" Color: "}
                <span className="text-primary font-semibold" id="selected-color-name">
                  {"Bubblegum Pink & Cyan"}
                </span>
              </span>
              <span className="font-label-badge text-secondary font-bold">
                {"En Stock"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="color-btn relative w-10 h-10 rounded-full bg-gradient-to-tr from-pink-400 via-rose-300 to-cyan-300 shadow-md ring-2 ring-primary p-0.5 focus:outline-none transition-transform hover:scale-110" title="Bubblegum Pink & Cyan" type="button">
                <span className="sr-only">
                  {"Bubblegum Pink"}
                </span>
              </button>
              <button className="color-btn relative w-10 h-10 rounded-full bg-gradient-to-tr from-purple-300 via-violet-200 to-indigo-300 shadow-sm ring-0 hover:ring-2 hover:ring-primary p-0.5 focus:outline-none transition-transform hover:scale-110" title="Lilac Sunset Lavender" type="button">
                <span className="sr-only">
                  {"Lilac Sunset Lavender"}
                </span>
              </button>
              <button className="color-btn relative w-10 h-10 rounded-full bg-gradient-to-tr from-amber-100 via-emerald-100 to-teal-200 shadow-sm ring-0 hover:ring-2 hover:ring-primary p-0.5 focus:outline-none transition-transform hover:scale-110 opacity-70" title="Retro Butter Mint" type="button">
                <span className="absolute inset-0 flex items-center justify-center text-error">
                  <span className="material-symbols-outlined text-xs">
                    {"block"}
                  </span>
                </span>
                <span className="sr-only">
                  {"Retro Butter Mint"}
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-on-surface font-bold">
                {" Talla: "}
                <span className="text-primary font-semibold" id="selected-size-label">
                  {"S"}
                </span>
              </span>
              <button className="text-primary hover:text-primary-container font-label-md flex items-center gap-1 underline decoration-primary/40 underline-offset-4" type="button">
                <span className="material-symbols-outlined text-sm">
                  {"straighten"}
                </span>
                <span>
                  {"Calculador de Medidas Exactas"}
                </span>
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              <button className="size-pill py-2.5 px-1 rounded-xl bg-surface-container-lowest text-on-surface font-label-md shadow-sm hover:shadow transition-all flex flex-col items-center" type="button">
                <span>
                  {"XS"}
                </span>
                <span className="text-[9px] font-label-badge text-error">
                  {"2 unid."}
                </span>
              </button>
              <button className="size-pill active-size py-2.5 px-1 rounded-xl bg-primary-fixed text-primary font-label-md font-extrabold shadow-sm transition-all flex flex-col items-center" type="button">
                <span>
                  {"S"}
                </span>
                <span className="text-[9px] font-label-badge text-secondary font-bold">
                  {"In Stock"}
                </span>
              </button>
              <button className="size-pill py-2.5 px-1 rounded-xl bg-surface-container-lowest text-on-surface font-label-md shadow-sm hover:shadow transition-all flex flex-col items-center" type="button">
                <span>
                  {"M"}
                </span>
                <span className="text-[9px] font-label-badge text-secondary font-bold">
                  {"In Stock"}
                </span>
              </button>
              <button className="size-pill py-2.5 px-1 rounded-xl bg-surface-container text-on-surface-variant/40 font-label-md cursor-not-allowed flex flex-col items-center line-through opacity-70" type="button">
                <span>
                  {"L"}
                </span>
                <span className="text-[9px] font-label-badge text-error no-underline">
                  {"Agotada"}
                </span>
              </button>
              <button className="size-pill py-2.5 px-1 rounded-xl bg-surface-container-lowest text-on-surface font-label-md shadow-sm hover:shadow transition-all flex flex-col items-center" type="button">
                <span>
                  {"XL"}
                </span>
                <span className="text-[9px] font-label-badge text-tertiary">
                  {"Pre-order"}
                </span>
              </button>
            </div>
            <div className="bg-surface-container-low p-2.5 rounded-xl flex items-center justify-between text-on-surface-variant mt-1">
              <span className="font-label-badge">
                {"Ajuste:"}
              </span>
              <div className="flex-1 mx-3 h-2 bg-surface-container-highest rounded-full overflow-hidden relative">
                <div className="h-full bg-secondary rounded-full" style={{"width": "65%"}}>

                </div>
              </div>
              <span className="font-body-sm font-semibold text-on-surface">
                {"Ligeramente Oversize"}
              </span>
            </div>
            <p className="font-body-sm text-secondary font-bold" id="size-availability-notice">
              {" ✓ Talla S disponible para despacho hoy mismo "}
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <div className="flex items-center gap-space-sm">
              <div className="flex items-center bg-surface-container-lowest rounded-full p-1 shadow-sm">
                <button className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center font-bold" type="button">
                  <span className="material-symbols-outlined text-sm">
                    {"remove"}
                  </span>
                </button>
                <span className="w-10 text-center font-label-lg text-on-surface font-bold" id="qty-val">
                  {"1"}
                </span>
                <button className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center font-bold" type="button">
                  <span className="material-symbols-outlined text-sm">
                    {"add"}
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-1.5 ml-auto">
                <button className="w-11 h-11 rounded-full bg-surface-container-lowest hover:bg-primary-fixed text-on-surface-variant hover:text-primary flex items-center justify-center shadow-sm transition-all" title="Añadir a deseados" type="button">
                  <span className="material-symbols-outlined text-xl">
                    {"favorite"}
                  </span>
                </button>
                <button className="w-11 h-11 rounded-full bg-surface-container-lowest hover:bg-surface-container-high text-on-surface-variant flex items-center justify-center shadow-sm transition-all" title="Compartir link" type="button">
                  <span className="material-symbols-outlined text-xl">
                    {"share"}
                  </span>
                </button>
              </div>
            </div>
            <button className="w-full py-4 px-space-lg rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg font-extrabold shadow-[0_10px_25px_-4px_rgba(185,5,56,0.35)] hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2" id="add-to-cart-btn" type="button">
              <span className="material-symbols-outlined text-xl">
                {"shopping_bag"}
              </span>
              <span id="cta-btn-text">
                {"AÑADIR A LA BOLSA — $42.00 USD"}
              </span>
            </button>
            <button className="w-full py-3 px-space-lg rounded-full bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md font-bold shadow-sm transition-all flex items-center justify-center gap-2" type="button">
              <span className="material-symbols-outlined text-secondary text-lg">
                {"bolt"}
              </span>
              <span>
                {"Comprar con 1 Clic (Apple Pay / Tarjeta)"}
              </span>
            </button>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-3 mt-1">
            <div>
              <div className="flex items-center justify-between text-body-sm font-label-badge mb-1">
                <span className="text-on-surface font-bold">
                  {"¡Estás muy cerca del Envío Gratis!"}
                </span>
                <span className="text-primary font-bold">
                  {"Faltan $8.00"}
                </span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-700" style={{"width": "84%"}}>

                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-on-surface">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">
                  {"local_shipping"}
                </span>
                <div>
                  <p className="font-label-md font-bold">
                    {"Despacho en 24h"}
                  </p>
                  <p className="font-body-sm text-on-surface-variant">
                    {"Llega en 2 a 3 días hábiles"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-xl">
                  {"published_with_changes"}
                </span>
                <div>
                  <p className="font-label-md font-bold">
                    {"30 Días para Cambios"}
                  </p>
                  <p className="font-body-sm text-on-surface-variant">
                    {"Devoluciones sin preguntas"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary text-xl">
                  {"redeem"}
                </span>
                <div>
                  <p className="font-label-md font-bold">
                    {"Packaging Aesthetic"}
                  </p>
                  <p className="font-body-sm text-on-surface-variant">
                    {"Con perfume & stickers Y2K"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">
                  {"verified"}
                </span>
                <div>
                  <p className="font-label-md font-bold">
                    {"Garantía Antipilling"}
                  </p>
                  <p className="font-body-sm text-on-surface-variant">
                    {"Tejido 100% no se deforma"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
