import { Link } from 'react-router'

export function CollectionsSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-desktop py-space-xl">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-lg gap-space-sm">
        <div>
          <span className="font-label-badge text-label-badge text-primary uppercase font-black tracking-widest block mb-1">
            {"Explora Nuestro Universo"}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            {"Categorías Estrella"}
          </h2>
        </div>
        <Link className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-space-xs rounded-full shadow-md transition-all hover:scale-105 active:scale-95" data-path="catalogo" to="/catalogo">
          <span className="material-symbols-outlined text-[18px]">
            {"shopping_basket"}
          </span>
          <span className="">
            {"Ver Todo el Catálogo ✨"}
          </span>
          <span className="material-symbols-outlined text-[16px]">
            {"east"}
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
        <Link className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-xl transition-all duration-300 flex flex-col h-96" data-path="ropa-deportiva" to="/catalogo?coleccion=deportiva">
          <div className="relative w-full h-full overflow-hidden">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="A stylish confident athletic young woman posing in a high-waisted seamless matching workout set with pastel magenta and electric cyan accents inside a vibrant sunlit urban gym studio. Bright natural light, joyful pop commercial aesthetic, vibrant and crisp." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB50aEu_BKBMPAxolx_zXOiLgDbUXYq9ISynU5tDK7Nm1xd7XLhNPa1EhT-OmSjrPTh7rwcuvywzrydWwvO4Xe6Auq3rv5Aps_0Mn_YTTHYH9Qc_Q50vfxRmYiOHpNS0uNDx-HVmLXqIhwtJpT1E8K4GyDVJgoNOFuYATfSTmkScUYIEWvz-BaboCZ8QZYvbKSVgE8gZuEyCeX-BePFRMEJns6oBuWs6z4rgvGk7hDB" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent">

            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-space-md text-surface flex flex-col justify-end">
            <span className="bg-secondary text-on-secondary px-space-sm py-0.5 rounded-full font-label-badge text-label-badge uppercase tracking-wider inline-block w-max mb-1">
              {"Activewear"}
            </span>
            <h3 className="font-headline-md text-headline-md text-surface font-extrabold leading-tight">
              {"Ropa Deportiva"}
            </h3>
            <p className="font-body-sm text-body-sm text-surface-container-high mt-1 opacity-90 line-clamp-2">
              {"Sets seamless, biker shorts & tops de soporte alto."}
            </p>
          </div>
        </Link>
        <Link className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-xl transition-all duration-300 flex flex-col h-96" data-path="invierno" to="/catalogo?coleccion=invierno">
          <div className="relative w-full h-full overflow-hidden">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Fashionable model wearing an oversized hot fuchsia chunky knit cardigan and pastel blue scarf standing against a minimal aesthetic city backdrop. Warm soft ambient lighting, Y2K youth fashion editorial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCfr4-fmKCZiUCgTqHxIGaiZwEu-R9cr0IzRzj6x_7iJUBM7gZX7QJx67WBe7wZlgndJNf3YZUHhBCnGW8IjxpxSwmw_SWQVynCGgjg1ZWlrrbxoynG3tFKKiCepilS3zDwkne36jgaWniNJ1w9-qkSJ-H54RnKRXnXqA5zqHzHw2wy5nRai-fysb-Wbr4OkL4tAjXVoQvenFGZ--QeyCcioRNW4wabqpL7TwwCCHV" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent">

            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-space-md text-surface flex flex-col justify-end">
            <span className="bg-primary text-on-primary px-space-sm py-0.5 rounded-full font-label-badge text-label-badge uppercase tracking-wider inline-block w-max mb-1">
              {"Cozy Vibes"}
            </span>
            <h3 className="font-headline-md text-headline-md text-surface font-extrabold leading-tight">
              {"Colección Invierno"}
            </h3>
            <p className="font-body-sm text-body-sm text-surface-container-high mt-1 opacity-90 line-clamp-2">
              {"Cardigans florales, chaquetas puffy & hoodies oversize."}
            </p>
          </div>
        </Link>
        <Link className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-xl transition-all duration-300 flex flex-col h-96" data-path="verano" to="/catalogo?coleccion=verano">
          <div className="relative w-full h-full overflow-hidden">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Chic sun-drenched photography of a smiling trendy model wearing a vibrant pink and yellow cutout summer dress and cool retro sunglasses on a breezy terrace. Modern resort and streetwear pop fusion with bright sun flares." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5XGZBNFGcseQ4lH7YoR4Q1XT-ic_b0fYSqcqh1UC4NtXno5TX0aytuMueCbPXv5g5JwjGcFN0jrmvju6oT48RS2VmbJqtsGPkqCyN3_Q05lMC_YkcItCOP1Ca6HslwM_IeSUWqj-koKfaRs8RvyqKcnZ5SV20yZQ9yzYNm-tlVc_2IaBnR3neT6nu6EusZH0lkXYSJ-72ZstQERP0M_L7ilCYTxI3-sN5lQWwq_MT" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent">

            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-space-md text-surface flex flex-col justify-end">
            <span className="bg-tertiary-container text-on-tertiary-container px-space-sm py-0.5 rounded-full font-label-badge text-label-badge uppercase tracking-wider inline-block w-max mb-1">
              {"Sun & Fun"}
            </span>
            <h3 className="font-headline-md text-headline-md text-surface font-extrabold leading-tight">
              {"Colección Verano"}
            </h3>
            <p className="font-body-sm text-body-sm text-surface-container-high mt-1 opacity-90 line-clamp-2">
              {"Vestidos frescos, tops bandeau & mini faldas plisadas."}
            </p>
          </div>
        </Link>
        <Link className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)] hover:shadow-xl transition-all duration-300 flex flex-col h-96" data-path="tendencias" to="/catalogo?coleccion=tendencias">
          <div className="relative w-full h-full overflow-hidden">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="High energy editorial photoshoot of a young stylish woman wearing Y2K aesthetic retro low-rise cargo pants with a bright graphic cyan crop top surrounded by neon pink ambient studio illumination. Playful energetic vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnu3bn_A_EDcnzbx8Mnmikh9oXz0lF4PXLE1C85eZuCvMTYscybdfnDr45j8n1mvvM80FYvb12yBKnevRCdpsMOiBTkvPynyVBXHSQLsl3hSU6UZYW5fJAJ3MT3XO6ErFKm2I9kc2xNTNVyPRfGq91FnJ6Fs52IqjqcHdDN_heIWRfUsrIwyabQRUjuHjR260shHJMEuiQZv8bsM_y0GVZWG9YD1WGApxtXcdhIxxM" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent">

            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-space-md text-surface flex flex-col justify-end">
            <span className="bg-secondary-fixed text-on-secondary-fixed px-space-sm py-0.5 rounded-full font-label-badge text-label-badge uppercase tracking-wider inline-block w-max mb-1 font-extrabold">
              {"Hot Trends"}
            </span>
            <h3 className="font-headline-md text-headline-md text-surface font-extrabold leading-tight">
              {"Drops Semanales"}
            </h3>
            <p className="font-body-sm text-body-sm text-surface-container-high mt-1 opacity-90 line-clamp-2">
              {"Piezas virales de TikTok, prints florales & estética Y2K."}
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
