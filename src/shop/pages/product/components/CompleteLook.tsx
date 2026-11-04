import { Link } from 'react-router'

export function CompleteLook() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl my-space-md">
      <div className="max-w-[1280px] mx-auto px-gutter lg:px-gutter-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-space-lg">
          <div>
            <span className="font-label-badge text-primary uppercase tracking-wider font-extrabold">
              {"Shop The Aesthetic"}
            </span>
            <h2 className="font-headline-lg text-on-surface font-extrabold">
              {"Completa Tu Look Trendy Pop"}
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-md">
            {" Ahorra un 15% extra combinando las piezas clave aprobadas por nuestras estilistas para este drop. "}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2 relative">
              <span className="absolute top-2 right-2 bg-primary-fixed text-primary px-2 py-0.5 rounded-full font-label-badge">
                {"Esta Prenda"}
              </span>
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-surface-container">
                <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
                <img alt="Cardigan Pop Petals" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp1rVCxrZ_Qiv1V_RR_wa7ggpX9h2JehnUxBCAFaVEHBB4wlX7DHAg8CQYWvpJ04eIkYLchgdkuWHXi1G27K7KRgG2uYhOjmbkXrNfsbQHe4-WzvR8xY0ToSQdOlMr1cq1EeakBQcpBNtaARYcUiSFcP989IUyJZg86HjcRrWcPv3ewRNCJGeyvX0H8aKJ3fu7cVN0MAFo4hmPq4JF6IvhW3AaME9U5hvji8e8c372lo9Lr3-joM5k" />
                </Link>
              </div>
              <div>
                <p className="font-label-md text-on-surface font-bold truncate">
                  {"Cardigan Floral Pop"}
                </p>
                <p className="font-label-badge text-on-surface-variant">
                  {"Talla Seleccionada: S"}
                </p>
              </div>
              <div className="flex items-baseline gap-2 mt-auto">
                <span className="font-label-lg text-primary font-extrabold">
                  {"$42.00"}
                </span>
                <span className="font-body-sm text-on-surface-variant line-through">
                  {"$58.00"}
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2 relative">
              <span className="absolute top-2 right-2 bg-secondary text-on-secondary px-2 py-0.5 rounded-full font-label-badge">
                {"Match +"}
              </span>
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-surface-container">
                <img alt="Top Bandeau Cyan Ribbed" className="w-full h-full object-cover" data-alt="Ribbed knit cyan bandeau crop top with delicate spaghetti straps, studio shoot on pastel lavender gradient background, clean fashion flatlay." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ9zYUW9iAd36O3bMp3tjo8MDjUiB_waAlG4YD00xDQtTtZ4vv4kA_G1TdewoXnKOM9VGSIJDI73KYroQnzdQMo2L2-Hne9Q-YsxWqx6PjXcK2TnPW6_V4nNc9QrtrQD0oct08kPfCXS-KgzGYTwhWz-oVAhaZDmYjczMMYg_v6M68LlSjhLsKZrkeVbTP_c_d0QjahPKljOhgKEInEitXWiT3x9H4yI1F-yC4OZ0" />
              </div>
              <div>
                <p className="font-label-md text-on-surface font-bold truncate">
                  {"Top Bandeau Ribbed Cyan"}
                </p>
                <p className="font-label-badge text-secondary font-semibold">
                  {"Tallas XS, S, M, L"}
                </p>
              </div>
              <div className="flex items-baseline gap-2 mt-auto">
                <span className="font-label-lg text-on-surface font-extrabold">
                  {"$18.00"}
                </span>
                <span className="font-body-sm text-on-surface-variant line-through">
                  {"$24.00"}
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2 relative">
              <span className="absolute top-2 right-2 bg-secondary text-on-secondary px-2 py-0.5 rounded-full font-label-badge">
                {"Match +"}
              </span>
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-surface-container">
                <img alt="Falda Plisada Tenis Pink" className="w-full h-full object-cover" data-alt="Y2K pastel pink pleated mini tennis skirt with inner built-in safety shorts, high rise fit, hanging in crisp fashion editorial lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR14XLf2nT67aBxVn4uqGzIXsGwZMz3ehi0k97HDZ5_WqqgVW-si8XG_PTCOVbQW7srYCMqF7tLgcHmyk57azEAEh2RBg-75CCOjpGc7Idl3kGuir5Dndk56_Vb5Lttum89iu93U5PDatQ8jCm-kdPucRwpQECTnrhVfvRZlRP0t0WiEtd5OaE_U1j1WS9zifoywmSf44GLqtMmRDKAyNTbzD8bVIdWE0O47TlOj4" />
              </div>
              <div>
                <p className="font-label-md text-on-surface font-bold truncate">
                  {"Falda Tenis Plisada Pink"}
                </p>
                <p className="font-label-badge text-secondary font-semibold">
                  {"Tallas XS, S, M"}
                </p>
              </div>
              <div className="flex items-baseline gap-2 mt-auto">
                <span className="font-label-lg text-on-surface font-extrabold">
                  {"$29.00"}
                </span>
                <span className="font-body-sm text-on-surface-variant line-through">
                  {"$36.00"}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-2xl">
                {"loyalty"}
              </span>
              <div>
                <h3 className="font-headline-sm text-on-surface font-bold">
                  {"Pack 'Petals Dream 3-Piece'"}
                </h3>
                <p className="font-body-sm text-on-surface-variant">
                  {"Ahorro instantáneo de bundle"}
                </p>
              </div>
            </div>
            <div className="space-y-1.5 font-body-sm text-on-surface-variant">
              <div className="flex justify-between">
                <span>
                  {"Precio regular por separado:"}
                </span>
                <span className="line-through">
                  {"$89.00 USD"}
                </span>
              </div>
              <div className="flex justify-between text-secondary font-bold">
                <span>
                  {"Descuento de Set (15% OFF):"}
                </span>
                <span>
                  {"-$13.35 USD"}
                </span>
              </div>
              <div className="flex justify-between font-label-lg text-on-surface pt-2">
                <span className="font-extrabold">
                  {"Total por el outfit completo:"}
                </span>
                <span className="text-primary font-black text-xl">
                  {"$75.65 USD"}
                </span>
              </div>
            </div>
            <div className="bg-primary-fixed/50 p-2.5 rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                {"local_shipping"}
              </span>
              <span className="font-label-badge text-primary">
                {"¡Este bundle califica a ENVÍO GRATIS EXPRESS!"}
              </span>
            </div>
            <button className="w-full py-3.5 px-space-md rounded-full bg-secondary hover:bg-secondary-container text-on-secondary hover:text-on-secondary-container font-label-lg font-extrabold shadow-md transition-all active:scale-95 flex items-center justify-center gap-2" type="button">
              <span className="material-symbols-outlined text-lg">
                {"auto_fix_high"}
              </span>
              <span>
                {"Añadir Set Completo al Carrito"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
