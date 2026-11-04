import { Link } from 'react-router'

export function MobileTrendingProducts() {
  return (
    <section className="px-margin py-space-sm">
      <div className="flex items-center justify-between mb-space-xs">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            {"Visto en TikTok & Viral 🔥"}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {"Los looks más compartidos por la comunidad"}
          </p>
        </div>
        <Link className="font-label-lg text-label-lg text-primary flex items-center gap-0.5 hover:underline" data-path="catalogo" to="/catalogo">
          <span>
            {"Explorar"}
          </span>
          <span className="material-symbols-outlined text-[18px]">
            {"chevron_right"}
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col overflow-hidden group">
          <div className="relative h-56 w-full overflow-hidden bg-surface-container">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Full body shot of girl wearing pastel pleated tennis mini skirt with white baby tee and chunky white sneakers, Y2K aesthetic clean studio aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtlEPbgzqCXMvOe88Pmmp-iasKuBiCtZeIiBlQYfi1yBzy6-IRqfKIkROMtN2HBSnUvt8M9hC8U-VU2SrrYQP9tDDd5LDfsk2kMlFuaxVxW7UrKomZwbrt3rMhWaUGStX-2VpoVsKsfAMctnzJvkNzVAlPpqOdxsD5CDqNvw28AbOeiUfxq-2CF4v1oHOMMHk_eZfhFSEkAQDIJRtK87DKQrOvrvEHb3UizKTopXbd" alt="" />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-badge text-label-badge flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[12px]">
                {"trending_up"}
              </span>
              {" Top 1 "}
            </span>
            <button aria-label="Favorito" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur text-on-surface flex items-center justify-center shadow-sm" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite_border"}
              </span>
            </button>
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-on-surface flex items-center gap-1">
              <span className="text-tertiary-container">
                {"★"}
              </span>
              {" 4.9 (142) "}
            </div>
          </div>
          <div className="p-3 flex flex-col flex-1 justify-between gap-2">
            <div>
              <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block truncate">
                {"Faldas & Minis"}
              </span>
              <h4 className="font-label-lg text-label-lg text-on-surface truncate">
                {"Mini Plisada Cyber Pastel"}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"$29.00"}
                </span>
                <span className="font-body-sm text-body-sm text-outline line-through">
                  {"$36.00"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center font-label-badge text-label-badge text-on-surface">
                {"XS"}
              </span>
              <span className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center font-label-badge text-label-badge text-on-surface">
                {"S"}
              </span>
              <span className="w-6 h-6 rounded-md bg-primary-fixed text-primary flex items-center justify-center font-label-badge text-label-badge font-bold">
                {"M"}
              </span>
              <span className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center font-label-badge text-label-badge text-on-surface">
                {"L"}
              </span>
            </div>
            <button className="w-full h-8 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 transition-colors active:scale-98" type="button">
              <span className="material-symbols-outlined text-[16px]">
                {"shopping_bag"}
              </span>
              <span>
                {"Comprar"}
              </span>
            </button>
          </div>
        </div>
        <div className="rounded-xl bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col overflow-hidden group">
          <div className="relative h-56 w-full overflow-hidden bg-surface-container">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Young smiling woman wearing trendy turquoise cyan cutout bodysuit with high-waisted cargo pants, urban street photography modern fashion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU7hD6FeAE2YTA10CRLsqvgCjsPiGkQUiuxvSzN5zkbXHl1YMiJUAC2lZPUS6W6GNKNNCgBjYUUACAAzKP-hlzAaibb-mAX48iW8am-jCURiM1Ust-J3jy4tFDbYhejY2L9snjHhx_QZPOU5BMsginw65GIHESazSLsPKWvK4gGGtW0AEVzzNq3tSjz-hIZuPD18xvaA-CkN8_474kPPaWbPlUgTACHJgNURww0eYx" alt="" />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-badge text-label-badge flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[12px]">
                {"local_fire_department"}
              </span>
              {" Hot "}
            </span>
            <button aria-label="Favorito" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur text-on-surface flex items-center justify-center shadow-sm" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite_border"}
              </span>
            </button>
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-on-surface flex items-center gap-1">
              <span className="text-tertiary-container">
                {"★"}
              </span>
              {" 5.0 (98) "}
            </div>
          </div>
          <div className="p-3 flex flex-col flex-1 justify-between gap-2">
            <div>
              <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block truncate">
                {"Tops & Bodysuits"}
              </span>
              <h4 className="font-label-lg text-label-lg text-on-surface truncate">
                {"Bodysuit Cut-Out Aqua"}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"$24.99"}
                </span>
                <span className="font-body-sm text-body-sm text-outline line-through">
                  {"$32.00"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center font-label-badge text-label-badge text-on-surface">
                {"S"}
              </span>
              <span className="w-6 h-6 rounded-md bg-primary-fixed text-primary flex items-center justify-center font-label-badge text-label-badge font-bold">
                {"M"}
              </span>
              <span className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center font-label-badge text-label-badge text-on-surface">
                {"L"}
              </span>
            </div>
            <button className="w-full h-8 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 transition-colors active:scale-98" type="button">
              <span className="material-symbols-outlined text-[16px]">
                {"shopping_bag"}
              </span>
              <span>
                {"Comprar"}
              </span>
            </button>
          </div>
        </div>
        <div className="rounded-xl bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col overflow-hidden group">
          <div className="relative h-56 w-full overflow-hidden bg-surface-container">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Fashion portrait of woman in lavender purple matching jogger set with oversized hoodie, relaxed urban aesthetic with clean styling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9ylGA0OPvWJns-P_UdYMfceWVmHAGJXt1B7xKPOq1J_fdXWPm1k0rj5RpbqK4a-UyDFUb8pOL8Bp_03y948o18THG6qwXKdjGeT2rzDk-Hd7nXggQ-1-DG-LyuKDG8dX_GoZf1ssrKiM3iHejZEgLaKYko5twCpMCIwCC59nWiDCGOBTntiSquBQx7eOM1bdR6ptFilTr-GVwo9EtzbD4zZi0lihmbsyTeo15w-0a" alt="" />
            <button aria-label="Favorito" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur text-on-surface flex items-center justify-center shadow-sm" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite_border"}
              </span>
            </button>
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-on-surface flex items-center gap-1">
              <span className="text-tertiary-container">
                {"★"}
              </span>
              {" 4.8 (64) "}
            </div>
          </div>
          <div className="p-3 flex flex-col flex-1 justify-between gap-2">
            <div>
              <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block truncate">
                {"Sets Cómodos"}
              </span>
              <h4 className="font-label-lg text-label-lg text-on-surface truncate">
                {"Conjunto Cozy Lilac"}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"$44.00"}
                </span>
                <span className="font-body-sm text-body-sm text-outline line-through">
                  {"$55.00"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center font-label-badge text-label-badge text-on-surface">
                {"S"}
              </span>
              <span className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center font-label-badge text-label-badge text-on-surface">
                {"M"}
              </span>
              <span className="w-6 h-6 rounded-md bg-surface-container flex items-center justify-center font-label-badge text-label-badge text-on-surface">
                {"L"}
              </span>
            </div>
            <button className="w-full h-8 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 transition-colors active:scale-98" type="button">
              <span className="material-symbols-outlined text-[16px]">
                {"shopping_bag"}
              </span>
              <span>
                {"Comprar"}
              </span>
            </button>
          </div>
        </div>
        <div className="rounded-xl bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col overflow-hidden group">
          <div className="relative h-56 w-full overflow-hidden bg-surface-container">
            <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Signature hot pink chunky knit cardigan with teal and yellow smiley flower graphics, modeled with retro sunglasses and smile, Look Trendy Gaby collection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa1FILfGAaiOZVXVNyeh7kRtqLfcoIMj1uoT8yDLYl4V1502iOrFwr633i3XbndMrYdSsHq2RRUBO3g_KqiTIrjrezEcuUke1d3L56s5ZokvhAcIo29NaOrPv_z5Th9K3YbSc4PWgYVyS3X1fY1FcbmUY-_CIuap0_f0kV53hRLMatIvg04bsUJyjXTp-LRucwovxTRU3pfnWO5BJtWd2QM3ll6UmQPFEq7koRmw9M" alt="" />
            </Link>
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-badge text-label-badge">
              {" Gaby's Pick ⭐ "}
            </span>
            <button aria-label="Favorito" className="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur text-on-surface flex items-center justify-center shadow-sm" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"favorite_border"}
              </span>
            </button>
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur font-label-badge text-label-badge text-on-surface flex items-center gap-1">
              <span className="text-tertiary-container">
                {"★"}
              </span>
              {" 5.0 (310) "}
            </div>
          </div>
          <div className="p-3 flex flex-col flex-1 justify-between gap-2">
            <div>
              <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] block truncate">
                {"Edición Limitada"}
              </span>
              <h4 className="font-label-lg text-label-lg text-on-surface truncate">
                {"Cardigan Daisy Gaby"}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"$49.99"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="px-2 h-6 rounded-md bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-badge text-label-badge font-bold">
                {"Oversize"}
              </span>
            </div>
            <button className="w-full h-8 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1 shadow-sm active:scale-98" type="button">
              <span className="material-symbols-outlined text-[16px]">
                {"shopping_bag"}
              </span>
              <span>
                {"Lo Quiero"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
