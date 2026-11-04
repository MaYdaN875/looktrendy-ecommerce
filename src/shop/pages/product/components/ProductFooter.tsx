import { Link } from 'react-router'

export function ProductFooter() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg mt-space-xl">
      <div className="max-w-[1280px] mx-auto px-gutter lg:px-gutter-desktop">
        <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-[0_4px_16px_rgba(185,5,56,0.05)] mb-space-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg">
          <div className="max-w-xl text-center lg:text-left">
            <span className="font-label-badge text-primary uppercase tracking-wider mb-space-xs block">
              {"Club Trendy VIP"}
            </span>
            <h3 className="font-headline-sm text-on-surface font-bold mb-space-xs">
              {"Únete y recibe 15% OFF en tu primer pedido"}
            </h3>
            <p className="font-body-md text-on-surface-variant">
              {"Entérate antes que nadie de lanzamientos de temporada, drops exclusivos y ventas privadas."}
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-space-sm items-center">
            <div className="relative w-full sm:w-80">
              <input className="w-full bg-surface-container px-space-md py-3 rounded-full font-body-sm text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-2 focus:ring-primary" placeholder="Tu correo electrónico" type="email" />
            </div>
            <button className="w-full sm:w-auto px-space-xl py-3 rounded-full bg-primary text-on-primary font-label-lg shadow-[0_4px_14px_rgba(185,5,56,0.25)] hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95" type="button">
              {"Suscribirme"}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl">
          <div>
            <span className="font-headline-sm text-primary font-extrabold block mb-space-sm">
              {"LOOK TRENDY GABY"}
            </span>
            <p className="font-body-sm text-on-surface-variant mb-space-md leading-relaxed">
              {"Moda contemporánea, vibrante y diseñada para realzar tu estilo propio en cada temporada. Energía pop y siluetas modernas."}
            </p>
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg">
                  {"photo_camera"}
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg">
                  {"play_circle"}
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg">
                  {"chat"}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-label-lg text-on-surface mb-space-md uppercase tracking-wider">
              {"Colecciones"}
            </h4>
            <ul className="space-y-2 font-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" data-path="ropa-deportiva" to="/catalogo?coleccion=deportiva">
                  {"Activewear & Athleisure"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" data-path="invierno" to="/catalogo?coleccion=invierno">
                  {"Abrigos & Suéteres Invierno"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" data-path="verano" to="/catalogo?coleccion=verano">
                  {"Vestidos de Verano"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" data-path="tendencias" to="/catalogo?coleccion=tendencias">
                  {"Novedades Y2K Pop"}
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" data-path="ofertas" to="/catalogo?coleccion=ofertas">
                  {"Special Sale & Descuentos"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-on-surface mb-space-md uppercase tracking-wider">
              {"Servicio al Cliente"}
            </h4>
            <ul className="space-y-2 font-body-sm text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  {"Guía de Tallas Interactiva"}
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  {"Rastreo de Paquetes"}
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  {"Política de Cambios y Devoluciones"}
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  {"Preguntas Frecuentes"}
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  {"Contacto Directo por WhatsApp"}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-on-surface mb-space-md uppercase tracking-wider">
              {"Garantía & Seguridad"}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl">
                  {"verified_user"}
                </span>
                <span className="font-body-sm">
                  {"Pagos 100% encriptados y procesados de forma segura"}
                </span>
              </div>
              <div className="flex items-start gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-xl">
                  {"local_shipping"}
                </span>
                <span className="font-body-sm">
                  {"Envíos express garantizados a todo el país"}
                </span>
              </div>
              <div className="flex items-start gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-tertiary text-xl">
                  {"published_with_changes"}
                </span>
                <span className="font-body-sm">
                  {"30 días para cambios sin costo extra"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-on-surface-variant text-center md:text-left">
            {"© 2025 LOOK TRENDY GABY. Todos los derechos reservados. Diseñado para brillar."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-space-sm">
            <span className="px-3 py-1 bg-surface-container-highest rounded-lg font-label-badge text-on-surface">
              {"VISA"}
            </span>
            <span className="px-3 py-1 bg-surface-container-highest rounded-lg font-label-badge text-on-surface">
              {"MASTERCARD"}
            </span>
            <span className="px-3 py-1 bg-surface-container-highest rounded-lg font-label-badge text-on-surface">
              {"AMEX"}
            </span>
            <span className="px-3 py-1 bg-surface-container-highest rounded-lg font-label-badge text-on-surface">
              {"PAYPAL"}
            </span>
            <span className="px-3 py-1 bg-surface-container-highest rounded-lg font-label-badge text-on-surface">
              {"APPLE PAY"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
