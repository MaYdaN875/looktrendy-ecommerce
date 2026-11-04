import { Link } from 'react-router'

export function StoreFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest pt-space-xl pb-space-lg shadow-[0_-4px_20px_-4px_rgba(30,27,75,0.06)]">
      <div className="max-w-[1280px] mx-auto px-margin md:px-margin-desktop">
        <div className="bg-gradient-to-r from-primary-fixed to-surface-container p-space-lg md:p-space-xl rounded-xl mb-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-[0_4px_14px_-2px_rgba(244,63,94,0.08)]">
          <div className="max-w-md text-center md:text-left">
            <span className="bg-secondary text-on-secondary px-space-sm py-0.5 rounded-full font-label-badge text-label-badge uppercase tracking-wider inline-block mb-space-xs">
              {"Únete al Club Trendy"}
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              {"Recibe 15% OFF en tu primera compra"}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              {"Tendencias exclusivas, preventas secretas y drops semanales directos a tu inbox."}
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-space-xs">
            <input className="bg-surface-container-lowest text-on-surface font-body-md text-body-md px-space-md py-space-sm rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary min-w-[280px] shadow-sm" placeholder="Ingresa tu correo electrónico..." type="email" />
            <button className="bg-primary text-on-primary font-label-lg text-label-lg px-space-lg py-space-sm rounded-full hover:bg-primary-container transition-all shadow-md" type="button">
              {"Suscribirme"}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg mb-space-xl">
          <div className="lg:col-span-2">
            <span className="font-headline-sm text-headline-sm text-primary font-extrabold uppercase tracking-tight block mb-space-sm">
              {"LOOK TRENDY GABY"}
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-md">
              {"Tu destino definitivo de moda femenina Y2K, urbana y activewear diseñada para elevar tu confianza, estilo y energía diaria."}
            </p>
            <div className="flex items-center gap-space-sm">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                {"Síguenos:"}
              </span>
              <span className="font-label-lg text-label-lg text-primary font-bold">
                {"@looktrendygaby"}
              </span>
            </div>
            <div className="flex items-center gap-space-xs mt-space-sm text-primary">
              <span className="material-symbols-outlined text-[24px]">
                {"photo_camera"}
              </span>
              <span className="material-symbols-outlined text-[24px]">
                {"play_circle"}
              </span>
              <span className="material-symbols-outlined text-[24px]">
                {"favorite"}
              </span>
              <span className="material-symbols-outlined text-[24px]">
                {"send"}
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider mb-space-md font-bold">
              {"Colecciones"}
            </h4>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <li className="">
                <Link className="hover:text-primary transition-colors" data-path="ropa-deportiva" to="/catalogo?coleccion=deportiva">
                  {"Ropa Deportiva"}
                </Link>
              </li>
              <li className="">
                <Link className="hover:text-primary transition-colors" data-path="invierno" to="/catalogo?coleccion=invierno">
                  {"Temporada Invierno"}
                </Link>
              </li>
              <li className="">
                <Link className="hover:text-primary transition-colors" data-path="verano" to="/catalogo?coleccion=verano">
                  {"Temporada Verano"}
                </Link>
              </li>
              <li className="">
                <Link className="hover:text-primary transition-colors" data-path="tendencias" to="/catalogo?coleccion=tendencias">
                  {"Nuevas Tendencias"}
                </Link>
              </li>
              <li className="">
                <Link className="hover:text-primary transition-colors" data-path="ofertas" to="/catalogo?coleccion=ofertas">
                  {"Ofertas y Rebajas"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider mb-space-md font-bold">
              {"Atención al Cliente"}
            </h4>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="preguntas-frecuentes" href="#">
                  {"Preguntas Frecuentes"}
                </a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="guias-de-tallas" href="#">
                  {"Guía de Tallas"}
                </a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="politica-de-envios" href="#">
                  {"Envíos y Entregas"}
                </a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="devoluciones" href="#">
                  {"Devoluciones"}
                </a>
              </li>
              <li className="">
                <a className="hover:text-primary transition-colors" data-path="contacto" href="#">
                  {"Contacto y WhatsApp"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider mb-space-md font-bold">
              {"Compra Segura"}
            </h4>
            <div className="flex items-center gap-space-xs text-secondary mb-space-sm">
              <span className="material-symbols-outlined text-[24px]">
                {"verified_user"}
              </span>
              <span className="font-label-md text-label-md font-bold">
                {"SSL 256-bit Encriptado"}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              {"Tus transacciones y datos personales están completamente protegidos."}
            </p>
            <div className="flex flex-wrap gap-space-xs items-center">
              <span className="px-space-xs py-0.5 bg-surface-container rounded font-label-badge text-label-badge text-on-surface font-bold">
                {"VISA"}
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container rounded font-label-badge text-label-badge text-on-surface font-bold">
                {"MASTERCARD"}
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container rounded font-label-badge text-label-badge text-on-surface font-bold">
                {"PAYPAL"}
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container rounded font-label-badge text-label-badge text-on-surface font-bold">
                {"MERCADO PAGO"}
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container rounded font-label-badge text-label-badge text-on-surface font-bold">
                {"APPLE PAY"}
              </span>
            </div>
          </div>
        </div>
        <div className="pt-space-lg border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <p className="">
            {"© 2024 LOOK TRENDY GABY. Todos los derechos reservados."}
          </p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-primary transition-colors" data-path="terminos" href="#">
              {"Términos y Condiciones"}
            </a>
            <a className="hover:text-primary transition-colors" data-path="privacidad" href="#">
              {"Aviso de Privacidad"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
