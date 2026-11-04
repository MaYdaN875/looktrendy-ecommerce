import { Link } from 'react-router'

export function FeaturedProductsSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-desktop py-space-lg" id="catalogo-trending">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
        <div>
          <div className="flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase font-black tracking-wider mb-1">
            <span className="material-symbols-outlined text-[16px]">
              {"local_fire_department"}
            </span>
            <span className="">
              {"Tendencias Calientes"}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold">
            {"Productos Más Deseados"}
          </h2>
        </div>
        <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
          <button className="filter-tab active bg-primary text-on-primary px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all shadow-sm" type="button">
            {" Todos los Drops "}
          </button>
          <button className="filter-tab bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all" type="button">
            {" Activewear "}
          </button>
          <button className="filter-tab bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all" type="button">
            {" Cardigans & Tops "}
          </button>
          <button className="filter-tab bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all" type="button">
            {" Vestidos Pop "}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        <div className="product-card group bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-[0_12px_28px_-4px_rgba(244,63,94,0.16)] transition-all duration-300 flex flex-col justify-between">
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
            <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Chic front view of a girl wearing an iconic oversized pink knit cardigan with cyan blue daisy flowers smiling playfully. High fashion commercial studio photograph with crisp lighting on white surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC7ANB2jxTrO2fcAW48xJQ3sD9baeXDqo-GYpfmI83q_Zp3TqQ4F14FOQBX51oB_RIi0sbDEZMMgxLxRvkZOn8esPdfZxRobIEpRy9AQhfMhmUCVJtcnpYZrrDEfK22-v8E5q-qCfAMRFfrz9FL0iKKtLWyFifPviXCVjNeAEWXh6uVOWWNKc6T4KkrXLjJQ8_EQM8qpgirnivcDjmiPQahYQTnpQ3UJFtRC7qdZYY" alt="" />
            </Link>
            <span className="absolute top-2 left-2 bg-primary text-on-primary font-label-badge text-label-badge uppercase px-space-sm py-0.5 rounded-full font-black">
              {" Bestseller "}
            </span>
            <button aria-label="Añadir a lista de deseos" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite"}
              </span>
            </button>
          </div>
          <div className="px-space-xs flex flex-col flex-1">
            <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider mb-0.5">
              {"Tejidos & Abrigos"}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight mb-space-xs line-clamp-1">
              {" Cardigan Floral Pop Bubblegum "}
            </h3>
            <div className="flex items-center gap-1.5 mb-space-sm">
              <span className="w-4 h-4 rounded-full bg-primary-container ring-2 ring-primary cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-secondary-container hover:scale-110 transition-transform cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-surface-container-highest hover:scale-110 transition-transform cursor-pointer">

              </span>
            </div>
            <div className="flex items-center gap-1 mb-space-sm">
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"XS"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-primary-fixed text-primary font-label-badge text-label-badge font-bold" type="button">
                {"S"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"M"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"L"}
              </button>
            </div>
            <div className="mt-auto pt-space-xs flex items-center justify-between border-t border-surface-container">
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline-sm text-headline-sm text-primary font-black">
                  {"$45.00"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">
                  {"$58.00"}
                </span>
              </div>
              <button className="add-to-cart-btn bg-primary hover:bg-primary-container active:scale-95 text-on-primary w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all" title="Añadir al Carrito" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"shopping_bag"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="product-card group bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-[0_12px_28px_-4px_rgba(244,63,94,0.16)] transition-all duration-300 flex flex-col justify-between">
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Studio photograph of a female athlete model showcasing an electric cyan and vibrant pink seamless activewear sports bra and high-rise gym leggings. Sleek pop style, crisp clean studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS2Z89Nl2zsVLu7RwoXg8gWt7Z7-E6-fQGqdRR65M922mtgZQBkYc_16vSOESCt1x3ItJ_MZjANf9wx_eFFbEnodfDePemd8iq48_X7SjPFwgkQEFXcMGuNLy3klI94fgghpCBHu1ggWbAvYmnMLDGm1bjmRB4HWmyRiufpzGx8PXEpmT-VmMiJNKAui5iD0JrFIF9x4TskeFfbJjDdvHE9SRcVhxd-fTy2MDuN7mo" alt="" />
            <span className="absolute top-2 left-2 bg-secondary text-on-secondary font-label-badge text-label-badge uppercase px-space-sm py-0.5 rounded-full font-black">
              {" -25% OFF "}
            </span>
            <button aria-label="Añadir a lista de deseos" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite"}
              </span>
            </button>
          </div>
          <div className="px-space-xs flex flex-col flex-1">
            <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider mb-0.5">
              {"Activewear"}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight mb-space-xs line-clamp-1">
              {" Set Deportivo Seamless Cyan Glow "}
            </h3>
            <div className="flex items-center gap-1.5 mb-space-sm">
              <span className="w-4 h-4 rounded-full bg-secondary ring-2 ring-secondary cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-primary-fixed-dim hover:scale-110 transition-transform cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-inverse-surface hover:scale-110 transition-transform cursor-pointer">

              </span>
            </div>
            <div className="flex items-center gap-1 mb-space-sm">
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"XS"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"S"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-primary-fixed text-primary font-label-badge text-label-badge font-bold" type="button">
                {"M"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"L"}
              </button>
            </div>
            <div className="mt-auto pt-space-xs flex items-center justify-between border-t border-surface-container">
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline-sm text-headline-sm text-primary font-black">
                  {"$38.00"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">
                  {"$52.00"}
                </span>
              </div>
              <button className="add-to-cart-btn bg-primary hover:bg-primary-container active:scale-95 text-on-primary w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all" title="Añadir al Carrito" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"shopping_bag"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="product-card group bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-[0_12px_28px_-4px_rgba(244,63,94,0.16)] transition-all duration-300 flex flex-col justify-between">
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Chic young brunette woman wearing an asymmetric cut-out ribbed crop top in vivid peach sunset tones posing in modern bright sunlight with cheerful expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3t7RBJFhAqeoR1s7t_qMm4w-5J5ppr7oV8lzZfubZODT3Qnr29WjO4fEM53WMcMPJd1_XCq3zqDxm_bU4Hhi-4lvKCPwU8Yy2hprrzj_w7YL4YL_1WUPo3SWrzro5mHajfyxqsXcWVXXCejgjDMa1HX-5LLtk6Ll6rCcIsvX2fNyuRw0aQlnGBacIHRv4MgH5zjJTal2SGKdNF51FhIIN9x6Bs2qvtogfupFFDv_s" alt="" />
            <span className="absolute top-2 left-2 bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge uppercase px-space-sm py-0.5 rounded-full font-black">
              {" NUEVO "}
            </span>
            <button aria-label="Añadir a lista de deseos" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite"}
              </span>
            </button>
          </div>
          <div className="px-space-xs flex flex-col flex-1">
            <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider mb-0.5">
              {"Tops & Baby Tees"}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight mb-space-xs line-clamp-1">
              {" Top Cut-Out Sunset Ribbed "}
            </h3>
            <div className="flex items-center gap-1.5 mb-space-sm">
              <span className="w-4 h-4 rounded-full bg-tertiary-fixed-dim ring-2 ring-tertiary cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-primary-fixed hover:scale-110 transition-transform cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-surface-container-lowest hover:scale-110 transition-transform cursor-pointer">

              </span>
            </div>
            <div className="flex items-center gap-1 mb-space-sm">
              <button className="size-pill px-2 py-0.5 rounded-lg bg-primary-fixed text-primary font-label-badge text-label-badge font-bold" type="button">
                {"XS"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"S"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"M"}
              </button>
            </div>
            <div className="mt-auto pt-space-xs flex items-center justify-between border-t border-surface-container">
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline-sm text-headline-sm text-primary font-black">
                  {"$24.00"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">
                  {"$30.00"}
                </span>
              </div>
              <button className="add-to-cart-btn bg-primary hover:bg-primary-container active:scale-95 text-on-primary w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all" title="Añadir al Carrito" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"shopping_bag"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="product-card group bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-[0_12px_28px_-4px_rgba(244,63,94,0.16)] transition-all duration-300 flex flex-col justify-between">
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="High fashion portrait of a model wearing a pastel bubblegum pink ribbed bodycon dress with spaghetti straps outdoors under warm golden sunshine, minimalist chic background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTS2uKHOYs8WQ9Yf1SviifGDGBFO6vjlaohu8qK8v37pCojZxXmFiEm_7hmT2zO-Y2bcH5FgeBWnq0jQPtwfTQvLSJhRswEEKIYTgrmjLOQgeb3a2CtZ1RB1RFG37AWy400zvuAyaGHAOMb3RiUKogupzB7SPAXL6oAmKe1J_WAA_t09bx2DdVbFk3MuLn1WeHBc1lNbA8UhA-tXee0_o2CGsrTiKD-iAgWe3Hu3EA" alt="" />
            <span className="absolute top-2 left-2 bg-primary text-on-primary font-label-badge text-label-badge uppercase px-space-sm py-0.5 rounded-full font-black">
              {" Trending "}
            </span>
            <button aria-label="Añadir a lista de deseos" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite"}
              </span>
            </button>
          </div>
          <div className="px-space-xs flex flex-col flex-1">
            <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider mb-0.5">
              {"Vestidos"}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight mb-space-xs line-clamp-1">
              {" Mini Vestido Ribbed Rosa Pastel "}
            </h3>
            <div className="flex items-center gap-1.5 mb-space-sm">
              <span className="w-4 h-4 rounded-full bg-primary-fixed-dim ring-2 ring-primary cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-secondary-fixed hover:scale-110 transition-transform cursor-pointer">

              </span>
            </div>
            <div className="flex items-center gap-1 mb-space-sm">
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"XS"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-primary-fixed text-primary font-label-badge text-label-badge font-bold" type="button">
                {"S"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"M"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"L"}
              </button>
            </div>
            <div className="mt-auto pt-space-xs flex items-center justify-between border-t border-surface-container">
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline-sm text-headline-sm text-primary font-black">
                  {"$34.00"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">
                  {"$45.00"}
                </span>
              </div>
              <button className="add-to-cart-btn bg-primary hover:bg-primary-container active:scale-95 text-on-primary w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all" title="Añadir al Carrito" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"shopping_bag"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="product-card group bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-[0_12px_28px_-4px_rgba(244,63,94,0.16)] transition-all duration-300 flex flex-col justify-between">
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Chic studio fashion shot of a smiling model wearing an oversized retro varsity zip-up jacket in bright raspberry pink and electric turquoise details. Fun young look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFYwJdIGy2Ev93SOQrptymK4ZLcXhWjrKtac7wHJk8HB0f42y0s_XWyWZxgso2MbAsk8OlAaZZsNtQdJAbTuc-VE9LlbO_EQrMXPsTQOPXFHeOrHq1UXl4liGAOV1408O39r05K7J5yvLsXjwE3cQwTjfwiuYoUo_uIlQ40ZoQxGKC5MSOYYkeKfEEFTgCB6zxCIaa4ZqFzI0KgZ0V7MYiMCOUT3pmO98bARJcuocG" alt="" />
            <span className="absolute top-2 left-2 bg-secondary text-on-secondary font-label-badge text-label-badge uppercase px-space-sm py-0.5 rounded-full font-black">
              {" POPULAR "}
            </span>
            <button aria-label="Añadir a lista de deseos" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite"}
              </span>
            </button>
          </div>
          <div className="px-space-xs flex flex-col flex-1">
            <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider mb-0.5">
              {"Chaquetas & Hoodies"}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight mb-space-xs line-clamp-1">
              {" Chaqueta Bomber Pop Pastel "}
            </h3>
            <div className="flex items-center gap-1.5 mb-space-sm">
              <span className="w-4 h-4 rounded-full bg-primary ring-2 ring-primary cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-secondary-fixed hover:scale-110 transition-transform cursor-pointer">

              </span>
            </div>
            <div className="flex items-center gap-1 mb-space-sm">
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"S"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-primary-fixed text-primary font-label-badge text-label-badge font-bold" type="button">
                {"M"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"L"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"XL"}
              </button>
            </div>
            <div className="mt-auto pt-space-xs flex items-center justify-between border-t border-surface-container">
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline-sm text-headline-sm text-primary font-black">
                  {"$56.00"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">
                  {"$70.00"}
                </span>
              </div>
              <button className="add-to-cart-btn bg-primary hover:bg-primary-container active:scale-95 text-on-primary w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all" title="Añadir al Carrito" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"shopping_bag"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="product-card group bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-[0_12px_28px_-4px_rgba(244,63,94,0.16)] transition-all duration-300 flex flex-col justify-between">
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Athletic woman standing in bright sunlit studio wearing high compression seamless biker shorts in deep turquoise blue and stylish sports crop tank. Modern active lifestyle look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADMUh2f-1thxvMw9AOAMTvfmORO3wR1ZGEFMC9zxjGd8lIegCd0ExADFS6PFl7ZT7jggcUrk4eFp0Yn672CXJ01yEMGz1CqPwTx4BqW9q6qCms4I6NdZ9MWfiEfEHEcc-fdMsTW6EkN0RV9TlAIKAFeLE5YtngzhnrmTt-loxCKle-eh5S9JMDfQ9__QtHkBg2iBvq6rQmUflvU1CX7C2dGfHBwHWUlhtCzGEcpNwq" alt="" />
            <span className="absolute top-2 left-2 bg-primary text-on-primary font-label-badge text-label-badge uppercase px-space-sm py-0.5 rounded-full font-black">
              {" TOP VENTA "}
            </span>
            <button aria-label="Añadir a lista de deseos" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite"}
              </span>
            </button>
          </div>
          <div className="px-space-xs flex flex-col flex-1">
            <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider mb-0.5">
              {"Activewear"}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight mb-space-xs line-clamp-1">
              {" Biker Shorts Sculpt Cyan "}
            </h3>
            <div className="flex items-center gap-1.5 mb-space-sm">
              <span className="w-4 h-4 rounded-full bg-secondary ring-2 ring-secondary cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-primary-fixed-dim hover:scale-110 transition-transform cursor-pointer">

              </span>
            </div>
            <div className="flex items-center gap-1 mb-space-sm">
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"XS"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"S"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-primary-fixed text-primary font-label-badge text-label-badge font-bold" type="button">
                {"M"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"L"}
              </button>
            </div>
            <div className="mt-auto pt-space-xs flex items-center justify-between border-t border-surface-container">
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline-sm text-headline-sm text-primary font-black">
                  {"$22.00"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">
                  {"$28.00"}
                </span>
              </div>
              <button className="add-to-cart-btn bg-primary hover:bg-primary-container active:scale-95 text-on-primary w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all" title="Añadir al Carrito" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"shopping_bag"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="product-card group bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-[0_12px_28px_-4px_rgba(244,63,94,0.16)] transition-all duration-300 flex flex-col justify-between">
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Model posing in a playful Y2K style pleated tennis skirt in soft blush pink paired with a fitted white baby graphic tee, clean studio aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfVn3GOwguZLe1lcbsoY75n8j57_3qJVy40sL2tPPpO_7wbtH9CME_EuT2c4_IcazVP4MRwqdDul5reYTG52DsS-e9gTyV3rzIX2LSvC1tD2pFTKJNR856OnaFqTP5Xk0w4Qx6_IlgEXMMcxwZ9OVFr7EULFqqgxZmemlWJM-dV8zXM-Ob-VSLyY2-8E3BnkIhzebckyQiGTXEixykcbnER_41LGJzcaZf6NkzIhaM" alt="" />
            <span className="absolute top-2 left-2 bg-tertiary text-on-tertiary font-label-badge text-label-badge uppercase px-space-sm py-0.5 rounded-full font-black">
              {" EDICIÓN LIMITADA "}
            </span>
            <button aria-label="Añadir a lista de deseos" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite"}
              </span>
            </button>
          </div>
          <div className="px-space-xs flex flex-col flex-1">
            <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider mb-0.5">
              {"Faldas & Minis"}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight mb-space-xs line-clamp-1">
              {" Falda Plisada Y2K Pink Doll "}
            </h3>
            <div className="flex items-center gap-1.5 mb-space-sm">
              <span className="w-4 h-4 rounded-full bg-primary-fixed ring-2 ring-primary cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-inverse-surface hover:scale-110 transition-transform cursor-pointer">

              </span>
            </div>
            <div className="flex items-center gap-1 mb-space-sm">
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"XS"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-primary-fixed text-primary font-label-badge text-label-badge font-bold" type="button">
                {"S"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"M"}
              </button>
            </div>
            <div className="mt-auto pt-space-xs flex items-center justify-between border-t border-surface-container">
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline-sm text-headline-sm text-primary font-black">
                  {"$29.00"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">
                  {"$36.00"}
                </span>
              </div>
              <button className="add-to-cart-btn bg-primary hover:bg-primary-container active:scale-95 text-on-primary w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all" title="Añadir al Carrito" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"shopping_bag"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="product-card group bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-[0_12px_28px_-4px_rgba(244,63,94,0.16)] transition-all duration-300 flex flex-col justify-between">
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Chic young model wearing a comfortable pastel oversized crewneck sweatshirt with embroidered floral smiley face in neon cyan and pink on chest, soft natural daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfkEcRVGaJUFQuaHwdQuZVBECb8ah7mXeSN_deEefToeTEP3AQbgsYQnM3HrrVrqByxd_Dt1j6bFfaC9D241gSU0RgPlFsotrWiYwSGcWJFcRAI9FZB727BmnADYTDqCGpZNqlFMmcYKOJUNs_eMpOBb46km2d04ncd4BUEasmwNParTmjZraUOdO1AU3ZEmHzuRuPF_qlgPmmzvWB_TvbAzyn2t0COQ0vdg7r9vHo" alt="" />
            <span className="absolute top-2 left-2 bg-primary text-on-primary font-label-badge text-label-badge uppercase px-space-sm py-0.5 rounded-full font-black">
              {" FAVORITO GABY "}
            </span>
            <button aria-label="Añadir a lista de deseos" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite"}
              </span>
            </button>
          </div>
          <div className="px-space-xs flex flex-col flex-1">
            <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider mb-0.5">
              {"Sweatshirts"}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight mb-space-xs line-clamp-1">
              {" Sweatshirt Smiley Floral Oversize "}
            </h3>
            <div className="flex items-center gap-1.5 mb-space-sm">
              <span className="w-4 h-4 rounded-full bg-surface-container-high ring-2 ring-primary cursor-pointer">

              </span>
              <span className="w-4 h-4 rounded-full bg-primary-fixed hover:scale-110 transition-transform cursor-pointer">

              </span>
            </div>
            <div className="flex items-center gap-1 mb-space-sm">
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"S"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-primary-fixed text-primary font-label-badge text-label-badge font-bold" type="button">
                {"M"}
              </button>
              <button className="size-pill px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-primary-fixed hover:text-primary font-label-badge text-label-badge text-on-surface font-bold transition-all" type="button">
                {"L"}
              </button>
            </div>
            <div className="mt-auto pt-space-xs flex items-center justify-between border-t border-surface-container">
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline-sm text-headline-sm text-primary font-black">
                  {"$46.00"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">
                  {"$58.00"}
                </span>
              </div>
              <button className="add-to-cart-btn bg-primary hover:bg-primary-container active:scale-95 text-on-primary w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all" title="Añadir al Carrito" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"shopping_bag"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-space-xl">
        <button className="inline-flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg px-space-xl py-space-md rounded-full shadow-sm transition-all hover:scale-105 active:scale-95" type="button">
          <span className="material-symbols-outlined text-[20px] text-primary">
            {"expand_more"}
          </span>
          <span className="">
            {"Cargar Más Prendas Trendy (+34 disponibles)"}
          </span>
        </button>
      </div>
    </section>
  )
}
