import { Link } from 'react-router'

export function MobileHero() {
  return (
    <section className="px-margin py-space-xs">
      <div className="relative rounded-xl overflow-hidden shadow-[0_10px_25px_-4px_rgba(244,63,94,0.18)] bg-surface-container-lowest flex flex-col">
        <div className="relative h-60 w-full overflow-hidden">
          <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
          <img className="w-full h-full object-cover" data-alt="Editorial fashion photoshoot of a trendy stylish brunette girl lounging in a bright pop pink cardigan decorated with smiling turquoise daisy flowers, inspired by Look Trendy Gaby aesthetic, sunny bright pastel studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB263-RTFayUdEmHINc8WIb9qvi6vGAIpYJ1_BOrjPAXDlzvhHmVZs_bzEhSOopzkHsZA2xIuSeAWJbH_1wkTPfpZpQs6fVwvWorwwvQWZ5HP748J6vEq4UZoeH7QVrRcrMcRX2BRg_TJiUje7uePu4fz8_W14c4v3gNAXX_S30CQMQXVjWGk_jBCMbQWRMdiJojlif586IfQbWRzMiy5YnGqPNx2IIQt1FjHGPcFEa" alt="" />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent flex flex-col justify-end p-margin">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-badge text-label-badge uppercase tracking-wider shadow-sm">
                {" Hasta 40% OFF "}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge uppercase">
                {" Cupón: TRENDY40 "}
              </span>
            </div>
            <h3 className="font-display-hero-mobile text-display-hero-mobile text-surface-container-lowest leading-tight tracking-tight drop-shadow-sm">
              {" FLOWER POWER 🌸 "}
            </h3>
            <p className="font-body-sm text-body-sm text-surface-container-high mb-3 max-w-[280px]">
              {" Nueva colección Primavera/Verano. Siluetas relajadas y vibras Y2K auténticas. "}
            </p>
            <div className="flex items-center gap-3">
              <Link className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container active:scale-95 transition-all" data-path="catalogo" to="/catalogo">
                <span>
                  {"Ver Catálogo"}
                </span>
                <span className="material-symbols-outlined text-[18px]">
                  {"arrow_forward"}
                </span>
              </Link>
              <button aria-label="Guardar colección" className="w-10 h-10 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-on-surface flex items-center justify-center active:scale-95 transition-transform" type="button">
                <span className="material-symbols-outlined text-[20px] text-primary">
                  {"bookmark_border"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 py-2 bg-surface-container-low">
          <span className="w-5 h-1.5 rounded-full bg-primary">

          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant">

          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant">

          </span>
        </div>
      </div>
    </section>
  )
}
