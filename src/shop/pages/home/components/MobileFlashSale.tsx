import { Link } from 'react-router'

export function MobileFlashSale() {
  return (
    <section className="py-space-sm">
      <div className="px-margin flex items-center justify-between mb-space-xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">
              {"bolt"}
            </span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
              {"Flash Drop de Hoy"}
            </h3>
            <div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
              <span>
                {"Termina en:"}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-badge text-label-badge font-mono tracking-wider font-bold" id="flash-timer">
                {"04:28:15"}
              </span>
            </div>
          </div>
        </div>
        <Link className="font-label-lg text-label-lg text-primary flex items-center gap-0.5 hover:underline" data-path="drops" to="/catalogo?coleccion=tendencias">
          <span>
            {"Ver todos"}
          </span>
          <span className="material-symbols-outlined text-[18px]">
            {"chevron_right"}
          </span>
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto px-margin no-scrollbar scroll-smooth">
        <div className="w-44 shrink-0 rounded-xl bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col overflow-hidden group">
          <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
            <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Young model wearing oversized bright pink knit cardigan sweater featuring bright turquoise flower patch embroidery, playful Y2K style studio shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsOr2ija8hZr36FcSicXU3tXo-SC51NBgztAEknKrXNZ4ktCx-9fhh-mdcu4ibnASStRVu8NdgfYfXoxBTcju8KGiTljwBak0ziQTE5VK2FlTSbxSYS57f3XoOBNEZjSNLAPdX0aWvh95Pa7B3J2ag7LupVUr4RoXdYdu9NGHcifn4atylcCCKnJSKbofEbx2Oiraxvg7ssJsTtxGiRIyjh7s36MuSw4pzMKU_sQYh" alt="" />
            </Link>
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-error text-on-error font-label-badge text-label-badge">
              {" -35% "}
            </span>
            <button aria-label="Favorito" className="wishlist-btn absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest/85 backdrop-blur text-on-surface flex items-center justify-center shadow-sm" type="button">
              <span className="material-symbols-outlined text-[16px]">
                {"favorite_border"}
              </span>
            </button>
          </div>
          <div className="p-3 flex flex-col gap-1">
            <span className="font-label-badge text-label-badge text-secondary font-bold uppercase truncate">
              {"Prenda Viral"}
            </span>
            <h4 className="font-label-lg text-label-lg text-on-surface truncate">
              {"Cardigan Fluffy Pop"}
            </h4>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {"$38.99"}
              </span>
              <span className="font-body-sm text-body-sm text-outline line-through">
                {"$59.99"}
              </span>
            </div>
            <div className="w-full bg-surface-container rounded-full h-1.5 mt-1 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{"width": "78%"}}>

              </div>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant text-[10px]">
              {"Quedan solo 4 pzs"}
            </span>
            <button className="mt-2 w-full h-8 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-all" type="button">
              <span className="material-symbols-outlined text-[16px]">
                {"keyboard_double_arrow_left"}
              </span>
              <span>
                {"Añadir"}
              </span>
            </button>
          </div>
        </div>
        <div className="w-44 shrink-0 rounded-xl bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col overflow-hidden group">
          <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Athletic fitness matching outfit in turquoise crop top and high waist leggings, studio soft light on female model, modern sporty athleisure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHEoPtunT58ybAdTi71Dr9OKzxzk-kYzE_vnpkbDBkJUD4g9mFrqJ7_pwobvAYB93C1wmaItqRYymXegPVO0s6IDt2u8pm9wKoIb4hTiaPGaXbgpTgVFtbyb_DusJeVpyCZVnQ6C_23Fp1xb6t2_9npGqJ9Wx7XJ6_CQSwaF-AsGPsT3Lt-xEZToiK6QxHjcdzSCgDWwYsTeZTyyoZ2YCyNxW25mMsKEuSaY9wP7Df" alt="" />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-error text-on-error font-label-badge text-label-badge">
              {" -25% "}
            </span>
            <button aria-label="Favorito" className="wishlist-btn absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest/85 backdrop-blur text-on-surface flex items-center justify-center shadow-sm" type="button">
              <span className="material-symbols-outlined text-[16px]">
                {"favorite_border"}
              </span>
            </button>
          </div>
          <div className="p-3 flex flex-col gap-1">
            <span className="font-label-badge text-label-badge text-secondary font-bold uppercase truncate">
              {"Activewear"}
            </span>
            <h4 className="font-label-lg text-label-lg text-on-surface truncate">
              {"Set Seamless Glow"}
            </h4>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {"$34.50"}
              </span>
              <span className="font-body-sm text-body-sm text-outline line-through">
                {"$46.00"}
              </span>
            </div>
            <div className="w-full bg-surface-container rounded-full h-1.5 mt-1 overflow-hidden">
              <div className="bg-secondary-container h-full rounded-full" style={{"width": "52%"}}>

              </div>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant text-[10px]">
              {"Quedan 9 pzs"}
            </span>
            <button className="mt-2 w-full h-8 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-all" type="button">
              <span className="material-symbols-outlined text-[16px]">
                {"keyboard_double_arrow_left"}
              </span>
              <span>
                {"Añadir"}
              </span>
            </button>
          </div>
        </div>
        <div className="w-44 shrink-0 rounded-xl bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col overflow-hidden group">
          <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Fitted cropped baby tee in baby pink with retro rhinestone typography, paired with wide leg low-rise jeans, Y2K aesthetic model portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKL2NJp9fGnw-i6pwTOyOLytkGtQnuKzZY01sRWEUSoiWkdko-T7lJvfSEZi3QU82fKKol5itnFX_oaYZkNOsD9fzN43llnhLi_VB9vKsavyE60clO-gtz8JmKYAaxWbAHUDDLCU8U7pGebl-PJUHswAF0b0l1XTh2Npsx0dDYTM4Sl45NTKo1myNF4Ye-QIvipQW0yQsKfIXOPMlRFf3HS5m5VDOPb8RZcfW4rTib" alt="" />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-error text-on-error font-label-badge text-label-badge">
              {" -40% "}
            </span>
            <button aria-label="Favorito" className="wishlist-btn absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-container-lowest/85 backdrop-blur text-on-surface flex items-center justify-center shadow-sm" type="button">
              <span className="material-symbols-outlined text-[16px]">
                {"favorite_border"}
              </span>
            </button>
          </div>
          <div className="p-3 flex flex-col gap-1">
            <span className="font-label-badge text-label-badge text-tertiary-container font-bold uppercase truncate">
              {"Básico Top"}
            </span>
            <h4 className="font-label-lg text-label-lg text-on-surface truncate">
              {"Baby Tee Rhinestone"}
            </h4>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {"$16.80"}
              </span>
              <span className="font-body-sm text-body-sm text-outline line-through">
                {"$28.00"}
              </span>
            </div>
            <div className="w-full bg-surface-container rounded-full h-1.5 mt-1 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{"width": "90%"}}>

              </div>
            </div>
            <span className="font-body-sm text-body-sm text-error font-bold text-[10px]">
              {"¡Últimas 2 pzs!"}
            </span>
            <button className="mt-2 w-full h-8 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-all" type="button">
              <span className="material-symbols-outlined text-[16px]">
                {"keyboard_double_arrow_left"}
              </span>
              <span>
                {"Añadir"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
