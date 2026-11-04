import { Link } from 'react-router'

export function CartContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
      <div className="lg:col-span-8 flex flex-col gap-space-lg">
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-space-sm px-space-md py-space-sm bg-surface-container-low font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">
            <span className="col-span-6">
              {"Prenda & Detalles"}
            </span>
            <span className="col-span-2 text-center">
              {"Precio"}
            </span>
            <span className="col-span-2 text-center">
              {"Cantidad"}
            </span>
            <span className="col-span-2 text-right">
              {"Subtotal"}
            </span>
          </div>
          <div className="p-space-md border-b-0 transition-all flex flex-col md:grid md:grid-cols-12 gap-space-md items-center" data-cart-item="" data-price="49.90">
            <div className="col-span-6 flex items-center gap-space-md w-full">
              <div className="relative w-24 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container">
                <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
                <img className="w-full h-full object-cover" data-alt="Chic girl wearing an oversized hot bubblegum pink cardigan adorned with bright cyan daisy flower motifs in vivid Y2K aesthetic, soft daylight fashion studio lighting, pastel gradient background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDpGFIAGaIzkPEZPLA1In0N2guOntgNPd6OWx--nBO8Qk6791-hOElNpWj87C7aHhAIk20WoPAhRZld57XzPL4yeOI3u75byiExbBQIaa_v6fwPi2rEYL-1g053xjHYDN97bONmLxzHhGYd8xxcQffnYz6khHZ_0g0VHPRwnUjOHd9gqzgrG66iEcGbG4JSo_9uIlpKQZUb4KI2u9sJcfhjnTQ9sxTI3bCJXWTflyZ" alt="" />
                </Link>
                <span className="absolute top-1 left-1 bg-secondary text-on-secondary px-1.5 py-0.5 rounded-full font-label-badge text-label-badge tracking-wider font-extrabold uppercase">
                  {"TOP SELLER"}
                </span>
              </div>
              <div className="flex flex-col gap-space-xs min-w-0">
                <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                  {"Cardigan Fluffy Pop Petals"}
                </span>
                <div className="flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <span>
                    {"Color: "}
                    <strong className="text-on-surface font-semibold">
                      {"Bubblegum Pink"}
                    </strong>
                  </span>
                  <span>
                    {"•"}
                  </span>
                  <span>
                    {"Talla: "}
                    <strong className="text-on-surface font-semibold">
                      {"M"}
                    </strong>
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-primary font-label-badge text-label-badge bg-primary-fixed/40 px-2 py-0.5 rounded-full w-fit">
                  <span className="material-symbols-outlined text-[13px]">
                    {"local_fire_department"}
                  </span>
                  <span>
                    {"¡Solo quedan 2 unidades en tu talla!"}
                  </span>
                </div>
                <div className="flex items-center gap-space-md mt-1 font-label-md text-label-md">
                  <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-0.5" type="button">
                    <span className="material-symbols-outlined text-[16px]">
                      {"favorite"}
                    </span>
                    {" Guardar "}
                  </button>
                  <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-0.5" type="button">
                    <span className="material-symbols-outlined text-[16px]">
                      {"delete"}
                    </span>
                    {" Eliminar "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col md:items-center justify-center w-full md:w-auto">
              <span className="font-label-lg text-label-lg text-primary font-bold">
                {"$49.90"}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">
                {"$65.00"}
              </span>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="flex items-center bg-surface-container-low rounded-full p-1 gap-2">
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">
                    {"remove"}
                  </span>
                </button>
                <span className="font-label-lg text-label-lg text-on-surface w-4 text-center font-bold" data-qty-val="">
                  {"1"}
                </span>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">
                    {"add"}
                  </span>
                </button>
              </div>
            </div>
            <div className="col-span-2 flex md:justify-end items-center w-full md:w-auto">
              <span className="font-headline-sm text-headline-sm text-primary font-extrabold" data-line-total="">
                {"$49.90"}
              </span>
            </div>
          </div>
          <div className="h-px bg-surface-container mx-space-md">

          </div>
          <div className="p-space-md border-b-0 transition-all flex flex-col md:grid md:grid-cols-12 gap-space-md items-center" data-cart-item="" data-price="38.50">
            <div className="col-span-6 flex items-center gap-space-md w-full">
              <div className="relative w-24 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Athletic feminine two-piece seamless gym set in vivid fuchsia pink top with vibrant cyan turquoise high-waisted leggings, energetic activewear editorial photography against minimal background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfAKNAt1sYCgVTTKWuB5NMpOSNcdECSzeYTCtyFIVaV9t0E46Bxsuq0lkFVI8Z5paUJV4wCIhYojCo7nBWqDPyMHkKlLmDT5N1cRKBBtY-hF-UfGfF9mDbrG5eIHSh31qFvg_mW3Oupnlr7ZC3v252rI2dOvqBogrS41zFSWEu0DFTas7deuPt2GKfbZlX80S9EF5OlVbxdegueOOamqRD-TUiThdd2BF_EI2K4Cgd" alt="" />
              </div>
              <div className="flex flex-col gap-space-xs min-w-0">
                <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                  {"Set Seamless Activewear Glow"}
                </span>
                <div className="flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <span>
                    {"Color: "}
                    <strong className="text-on-surface font-semibold">
                      {"Rosa Pop & Cyan"}
                    </strong>
                  </span>
                  <span>
                    {"•"}
                  </span>
                  <span>
                    {"Talla: "}
                    <strong className="text-on-surface font-semibold">
                      {"S"}
                    </strong>
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-secondary font-label-badge text-label-badge bg-secondary-fixed/40 px-2 py-0.5 rounded-full w-fit">
                  <span className="material-symbols-outlined text-[13px]">
                    {"check_circle"}
                  </span>
                  <span>
                    {"En stock para entrega inmediata"}
                  </span>
                </div>
                <div className="flex items-center gap-space-md mt-1 font-label-md text-label-md">
                  <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-0.5" type="button">
                    <span className="material-symbols-outlined text-[16px]">
                      {"favorite"}
                    </span>
                    {" Guardar "}
                  </button>
                  <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-0.5" type="button">
                    <span className="material-symbols-outlined text-[16px]">
                      {"delete"}
                    </span>
                    {" Eliminar "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col md:items-center justify-center w-full md:w-auto">
              <span className="font-label-lg text-label-lg text-primary font-bold">
                {"$38.50"}
              </span>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="flex items-center bg-surface-container-low rounded-full p-1 gap-2">
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">
                    {"remove"}
                  </span>
                </button>
                <span className="font-label-lg text-label-lg text-on-surface w-4 text-center font-bold" data-qty-val="">
                  {"1"}
                </span>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">
                    {"add"}
                  </span>
                </button>
              </div>
            </div>
            <div className="col-span-2 flex md:justify-end items-center w-full md:w-auto">
              <span className="font-headline-sm text-headline-sm text-primary font-extrabold" data-line-total="">
                {"$38.50"}
              </span>
            </div>
          </div>
          <div className="h-px bg-surface-container mx-space-md">

          </div>
          <div className="p-space-md border-b-0 transition-all flex flex-col md:grid md:grid-cols-12 gap-space-md items-center" data-cart-item="" data-price="29.90">
            <div className="col-span-6 flex items-center gap-space-md w-full">
              <div className="relative w-24 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Playful Y2K style pleated tennis skirt in soft mint cyan with micro baby pink waist detail, modern youth streetwear look in clean bright daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlkhnsRqgr5fvnTHu4Uizu0x58FnNfhVpjfpVU_O_Uhp3tSIGn_nzO5sOm1Q_T5kGHejdwmHGFyq-RYfa3U5G8dlhHhqP_spwE6snFVoL2eKgTrp3_jk-y_9hznHslqfftECl0FAdXtAiEFajuhpCsrQbvFhTY6ZSrjB0ykMhZP8m19KAqU9oy8TSHKLOem-NSNVMnKuMA6v0bz5lSMryyAqQOnZH29ZMRpO0Wnq-O" alt="" />
              </div>
              <div className="flex flex-col gap-space-xs min-w-0">
                <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                  {"Falda Plisada Y2K Cyber Pastel"}
                </span>
                <div className="flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <span>
                    {"Color: "}
                    <strong className="text-on-surface font-semibold">
                      {"Cyan Menta"}
                    </strong>
                  </span>
                  <span>
                    {"•"}
                  </span>
                  <span>
                    {"Talla: "}
                    <strong className="text-on-surface font-semibold">
                      {"M"}
                    </strong>
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-secondary font-label-badge text-label-badge bg-secondary-fixed/40 px-2 py-0.5 rounded-full w-fit">
                  <span className="material-symbols-outlined text-[13px]">
                    {"star"}
                  </span>
                  <span>
                    {"Edición Limitada"}
                  </span>
                </div>
                <div className="flex items-center gap-space-md mt-1 font-label-md text-label-md">
                  <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-0.5" type="button">
                    <span className="material-symbols-outlined text-[16px]">
                      {"favorite"}
                    </span>
                    {" Guardar "}
                  </button>
                  <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-0.5" type="button">
                    <span className="material-symbols-outlined text-[16px]">
                      {"delete"}
                    </span>
                    {" Eliminar "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col md:items-center justify-center w-full md:w-auto">
              <span className="font-label-lg text-label-lg text-primary font-bold">
                {"$29.90"}
              </span>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <div className="flex items-center bg-surface-container-low rounded-full p-1 gap-2">
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">
                    {"remove"}
                  </span>
                </button>
                <span className="font-label-lg text-label-lg text-on-surface w-4 text-center font-bold" data-qty-val="">
                  {"1"}
                </span>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">
                    {"add"}
                  </span>
                </button>
              </div>
            </div>
            <div className="col-span-2 flex md:justify-end items-center w-full md:w-auto">
              <span className="font-headline-sm text-headline-sm text-primary font-extrabold" data-line-total="">
                {"$29.90"}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex items-center justify-between gap-space-md">
          <label className="flex items-center gap-space-sm cursor-pointer select-none">
            <input className="w-5 h-5 rounded accent-primary text-primary cursor-pointer" id="gift-wrap-check" type="checkbox" />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1">
                {" ¿Es un regalo especial? 🎀 "}
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                {" Incluye caja coleccionable decorada, listón satín y tarjeta con dedicatoria personalizada (+ $3.50 USD). "}
              </span>
            </div>
          </label>
          <span className="font-label-lg text-label-lg text-secondary font-bold whitespace-nowrap">
            {"+$3.50"}
          </span>
        </div>
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[22px]">
                {"auto_awesome"}
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                {"Completa tu Look"}
              </h2>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase font-bold">
                {"Trendy Match"}
              </span>
            </div>
            <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-0.5" href="#">
              {" Ver más recomendaciones "}
              <span className="material-symbols-outlined text-[14px]">
                {"arrow_forward"}
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col justify-between hover:shadow-[0_10px_25px_-4px_rgba(244,63,94,0.15)] transition-all group">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-space-xs">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Trendy 2000s iridescent holographic micro mini bag with silver chain strap on bright clean pastel studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCyZjqu2HNvEvIgvOFbj7O2WUZ1j9mIWdQdP43sGnJzd0eguykYiVlfYIHydLhctDTPLycGye-ekD42SfasPBOdTsScjBv2ZXDReEbWCWaZqCm9Di-oOuXHWme_AMoiZWElaCPI4ZG8c5klugbOpsGzg_xV9mwEQjaPHo5bey-Scn53vixSBFX4JHzD5uNshdntQekjaRubl_w-ZPrX54KSFj_HEDtfOeW4h5OsE_Z" alt="" />
                <span className="absolute top-2 right-2 bg-surface-container-lowest/80 backdrop-blur-sm p-1 rounded-full text-primary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-label-lg text-label-lg text-on-surface truncate">
                  {"Mini Bag Holográfica Y2K"}
                </h3>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"$22.80"}
                </span>
              </div>
              <button className="mt-space-xs w-full py-1.5 px-space-sm rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1" type="button">
                <span className="material-symbols-outlined text-[16px]">
                  {"keyboard_double_arrow_left"}
                </span>
                {" + Añadir al Carrito "}
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col justify-between hover:shadow-[0_10px_25px_-4px_rgba(244,63,94,0.15)] transition-all group">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-space-xs">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Chic sunny yellow ribbed halter crop top styled with dainty silver chain necklace on fashionable female mannequin in bright daylight studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBspd57tShnAPbmHciaBP2TYQJrMQPh_ikFgbDoH5Ryoaj8RIXF9Qa3BQtWcP-G8H2SfqQ9iwroC6y5kREeGW7pUbh4f4Uy8VUgsF06bHmJnIcaVK9PvRk8h4iaLOJYvPS-T_tvkoL-lxD32XUu_dfWRCLl6ZomOjqjEvg9LetF9mRng7-aJERjEOzsXEJ-phdrO_2jhmW1hCOlIanT5341M694EYS_haU7z7JbNCv6" alt="" />
                <span className="absolute top-2 right-2 bg-surface-container-lowest/80 backdrop-blur-sm p-1 rounded-full text-primary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-label-lg text-label-lg text-on-surface truncate">
                  {"Top Halter Sunbeam"}
                </h3>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"$19.90"}
                </span>
              </div>
              <button className="mt-space-xs w-full py-1.5 px-space-sm rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1" type="button">
                <span className="material-symbols-outlined text-[16px]">
                  {"keyboard_double_arrow_left"}
                </span>
                {" + Añadir al Carrito "}
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] flex flex-col justify-between hover:shadow-[0_10px_25px_-4px_rgba(244,63,94,0.15)] transition-all group">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container mb-space-xs">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Chunky pink and pastel turquoise resin ring set and oversized flower hair clips Y2K aesthetic accessory flatlay photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoKJQA3tOM7wugDsPP0CwNQMwl1YBa2tC8-vmZ51OofoFnOa7tvUVs7344Bo16tfyHEJvOLFbx6FZHC-qaHoMf0LcR_uAuePd-27griItb_q5aPDttT5NQ1cWgg4yLXA6m7oXp6DjHNOsVHnYgsy178CwWcXD5H-pK7k1NRS6DXERYqfp19zPBaWOI3jjHujtIismJ2VJE2WSEARiZJBHl8moqwnVF9t5yuvHTKKO6" alt="" />
                <span className="absolute top-2 right-2 bg-surface-container-lowest/80 backdrop-blur-sm p-1 rounded-full text-primary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-label-lg text-label-lg text-on-surface truncate">
                  {"Pack Hair Clips Pop Daisy"}
                </h3>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"$14.50"}
                </span>
              </div>
              <button className="mt-space-xs w-full py-1.5 px-space-sm rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1" type="button">
                <span className="material-symbols-outlined text-[16px]">
                  {"keyboard_double_arrow_left"}
                </span>
                {" + Añadir al Carrito "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 flex flex-col gap-space-md lg:sticky lg:top-[152px]">
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_4px_20px_-2px_rgba(244,63,94,0.12)] flex flex-col gap-space-md">
          <div className="flex items-center justify-between pb-space-xs border-b border-surface-container">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              {"Resumen del Pedido"}
            </h2>
            <span className="material-symbols-outlined text-primary text-[24px]">
              {"receipt_long"}
            </span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-label-md text-on-surface-variant font-bold">
              {"Código de Descuento o Gift Card"}
            </label>
            <div className="flex items-center gap-space-xs">
              <input className="bg-surface-container-low text-on-surface font-body-md text-body-md px-space-md py-2 rounded-full flex-1 focus:outline-none focus:ring-2 focus:ring-primary uppercase tracking-wider font-semibold placeholder:text-on-surface-variant/50" type="text" defaultValue="TRENDY15" />
              <button className="bg-secondary text-on-secondary hover:bg-on-secondary-container font-label-md text-label-md font-bold px-space-md py-2 rounded-full transition-all" type="button">
                {" Aplicar "}
              </button>
            </div>
            <div className="flex items-center justify-between bg-primary-fixed/50 text-on-primary-fixed-variant px-space-sm py-1 rounded-full font-label-badge text-label-badge mt-1">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  {"loyalty"}
                </span>
                <span>
                  {"Cupón 'TRENDY15' aplicado (-15% OFF primera compra)"}
                </span>
              </div>
              <button className="text-on-primary-fixed-variant hover:text-error transition-colors" type="button">
                <span className="material-symbols-outlined text-[14px]">
                  {"close"}
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant pt-space-xs">
            <div className="flex items-center justify-between">
              <span>
                {"Subtotal prendas:"}
              </span>
              <span className="font-label-lg text-label-lg text-on-surface font-semibold" id="summary-subtotal">
                {"$118.30"}
              </span>
            </div>
            <div className="flex items-center justify-between text-primary">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">
                  {"celebration"}
                </span>
                {" Descuento Club (15%): "}
              </span>
              <span className="font-label-lg text-label-lg font-bold" id="summary-discount">
                {"-$17.75"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                {" Envío Estándar: "}
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant/60" title="Gratis en órdenes mayores a $100">
                  {"info"}
                </span>
              </span>
              <span className="font-label-lg text-label-lg text-on-surface font-semibold" id="shipping-estimate-amount">
                {"$4.99"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>
                {"Impuestos estimados (IVA):"}
              </span>
              <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                {"$0.00"}
              </span>
            </div>
          </div>
          <div className="pt-space-sm border-t border-surface-container flex flex-col gap-1">
            <div className="flex items-baseline justify-between">
              <span className="font-headline-md text-headline-md text-on-surface font-bold">
                {"Total Final:"}
              </span>
              <span className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight" id="summary-final-total">
                {" $105.54 USD "}
              </span>
            </div>
            <span className="text-right font-body-sm text-body-sm text-secondary font-medium">
              {"✨ Ahorraste $32.85 en esta orden"}
            </span>
          </div>
          <Link className="w-full py-space-sm px-space-lg rounded-full bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold shadow-[0_8px_20px_-4px_rgba(185,5,56,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-space-xs text-center cursor-pointer" to="/checkout">
            <span className="material-symbols-outlined text-[22px]">
              {"lock"}
            </span>
            <span>
              {"Proceder al Pago Seguro"}
            </span>
          </Link>
          <div className="flex items-center gap-space-xs my-space-xs">
            <div className="h-px bg-surface-container flex-1">

            </div>
            <span className="font-label-badge text-label-badge text-on-surface-variant uppercase font-bold tracking-wider">
              {"o compra express"}
            </span>
            <div className="h-px bg-surface-container flex-1">

            </div>
          </div>
          <div className="grid grid-cols-3 gap-space-xs">
            <button className="py-2 rounded-full bg-on-background text-surface font-label-md text-label-md font-bold hover:opacity-90 transition-all flex items-center justify-center shadow-sm" type="button">
              <span className="font-black tracking-wider text-[13px]">
                {"Pay"}
              </span>
            </button>
            <button className="py-2 rounded-full bg-[#ffc439] text-[#003087] font-label-md text-label-md font-bold hover:brightness-105 transition-all flex items-center justify-center shadow-sm" type="button">
              <span className="font-black italic text-[13px]">
                {"PayPal"}
              </span>
            </button>
            <button className="py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold hover:bg-secondary-fixed-dim transition-all flex items-center justify-center shadow-sm" type="button">
              <span className="font-bold text-[12px]">
                {"MercadoPago"}
              </span>
            </button>
          </div>
          <div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-space-xs mt-space-xs text-on-surface-variant font-body-sm text-body-sm">
            <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md font-bold">
              <span className="material-symbols-outlined text-[18px]">
                {"verified_user"}
              </span>
              <span>
                {"Compra 100% Protegida & Cifrada"}
              </span>
            </div>
            <div className="flex flex-col gap-1 text-[13px]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  {"published_with_changes"}
                </span>
                <span>
                  {"30 días para cambios y devoluciones fáciles"}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  {"support_agent"}
                </span>
                <span>
                  {"Atención personalizada VIP por WhatsApp"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <a className="flex items-center justify-center gap-space-xs font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors py-1" href="#">
          <span className="material-symbols-outlined text-[18px]">
            {"arrow_back"}
          </span>
          <span>
            {"Continuar Descubriendo Prendas"}
          </span>
        </a>
      </div>
    </div>
  )
}
