import { Link } from 'react-router'

export function ProductVideoDialog() {
  return (
    <div className="hidden fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-gutter" id="video-modal">
      <div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-xl relative animate-in fade-in zoom-in duration-200">
        <button className="absolute top-4 right-4 text-on-surface hover:text-primary" type="button">
          <span className="material-symbols-outlined text-2xl">
            {"close"}
          </span>
        </button>
        <h3 className="font-headline-sm text-on-surface font-bold mb-2">
          {"Video Try-On & Movimiento 360°"}
        </h3>
        <p className="font-body-sm text-on-surface-variant mb-space-md">
          {" Observa la caída de la prenda y textura de los pétalos jacquard en movimiento real. "}
        </p>
        <div className="w-full aspect-video rounded-xl bg-surface-container flex flex-col items-center justify-center relative overflow-hidden">
          <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
          <img alt="Video Preview" className="w-full h-full object-cover opacity-80" data-alt="Full video still frame of model turning smoothly showing 360 degree flow and drape of floral knit cardigan with soft pastel studio backdrops." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOcgJXcdhMVXY8uy27WxT0VW9naaJKDqWsbzezCnrFsyGdVy3iScUP9ze9k0ZnyiFRO7Ol9Q9GeJwPosbGgBAO-lXUVYo41zn0ZvkWwTqt91vfSJJcjnWPP8gp7V2ve4BQQ8b8ikmDwLrWv7X8oxnNnneSgdDsAeFRA-3fqaCcplQVHoz42KAA5S37w-kkp47eHwt-QyjDVbJRZE7ym67KpTHK3z4vk9Dyt4MNMTA" />
          </Link>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
              <span className="material-symbols-outlined text-3xl">
                {"play_arrow"}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-body-sm font-label-badge text-on-surface-variant">
          <span>
            {"Modelo: Camila (1.68m, Talla S)"}
          </span>
          <button className="text-primary font-bold" type="button">
            {"Cerrar"}
          </button>
        </div>
      </div>
    </div>
  )
}
