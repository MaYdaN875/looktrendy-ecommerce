import { Link } from 'react-router'

export function CommunitySection() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl my-space-lg">
      <div className="max-w-[1280px] mx-auto px-margin md:px-margin-desktop">
        <div className="text-center max-w-xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-1 text-primary font-label-badge text-label-badge uppercase font-extrabold tracking-widest bg-primary-fixed px-space-md py-1 rounded-full mb-space-xs">
            <span className="material-symbols-outlined text-[16px]">
              {"photo_camera"}
            </span>
            <span className="">
              {"Comunidad VIP"}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold">
            {"#TrendyGabyBabes"}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
            {" Etiquétanos en tus fotos usando "}
            <strong className="text-primary">
              {"@looktrendygaby"}
            </strong>
            {" para aparecer aquí y recibir cupones sorpresa mensuales. "}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
          <div className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)] aspect-square">
            <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Trendy selfie mirror photo of a smiling girl wearing the pink flower oversized cardigan with headphones, stylish bedroom background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAEjims7PdMay2Yy3GjD0AX5FhoFdxJGHsC7tijzcrWLjBBvmhAxEf2zLvTnSAF-I9pUzS8ErW5Xk2_C_y9AYunjhX5yhQZNS6kMrXUyf76U8BKyuGMWBzaH5zZn72BLcUbCzGsr89tIJiyMYGxHB0RXzX3h4I35YAWl9DOxAZzbRBQCWjZCawtN3aPmG4b344cNvB7J33Rej433_6F7y4HInNiI_TJ_ADJgU9MTeD" alt="" />
            </Link>
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-space-md flex flex-col justify-end text-surface">
              <div className="flex items-center gap-1 text-tertiary mb-1">
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
              </div>
              <p className="font-label-md text-label-md font-bold">
                {"@valeria_trendy"}
              </p>
              <p className="font-body-sm text-body-sm text-surface-container-high opacity-90">
                {"\"¡El cárdigan es aún más suave en persona! Enamorada total.\""}
              </p>
            </div>
          </div>
          <div className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)] aspect-square">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Active fitness girl taking a gym mirror photo wearing the cyan matching activewear seamless set with water bottle in hand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9HB0_vfGE5hP2NkafDWSYCmrya6kDgoRrY3_4TFYCjgn8denqghGQkhkd9kcRgqfHOD6tGYHQ7UPpDgpqwnaUACqTxU4oLmA76RLQHwBX19kzp3nX22zKaPP8lGw6inAtzc3GnJWdRGo42jk-RdPyMnwll-RYZVFpEVPWQNmgmT0DsoRFmXH5MvQ3qEqazYSSdq01azCCsOog8us4628075Pfkc4DfwK_DZoxgqol" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-space-md flex flex-col justify-end text-surface">
              <div className="flex items-center gap-1 text-tertiary mb-1">
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
              </div>
              <p className="font-label-md text-label-md font-bold">
                {"@camila_fitlife"}
              </p>
              <p className="font-body-sm text-body-sm text-surface-container-high opacity-90">
                {"\"La compresión del set es perfecta para entrenar duro.\""}
              </p>
            </div>
          </div>
          <div className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)] aspect-square">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Chic girl drinking iced matcha latte at a sunlit outdoor cafe wearing the ribbed pink mini dress and stylish small sunglasses." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyvqEJnMOw35Mvk-u-ON3XUyhjoOGkzy6E-m7IRSpZ3sP5BcDD8HxABxGIzB9nsJUOyUK-nQ9H56J_WccLzi3TPwtfZ-4CpWeVgrF7I9T_4i-bYPIJu34Mh-oPP7KAJyj_dXt2I2DonsV-EK9qztGi9rEhxQwQr3DBhhW-t6HgGYoCCfllNLku5CJnj2cyX2z4oPB75B7NIkWdbTvZS5Fk9RiN7_htAOB9odCiDnCE" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-space-md flex flex-col justify-end text-surface">
              <div className="flex items-center gap-1 text-tertiary mb-1">
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
              </div>
              <p className="font-label-md text-label-md font-bold">
                {"@sofia_mode"}
              </p>
              <p className="font-body-sm text-body-sm text-surface-container-high opacity-90">
                {"\"Llegó en 24h a mi puerta en una caja perfumada 💖.\""}
              </p>
            </div>
          </div>
          <div className="group relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_4px_14px_-2px_rgba(244,63,94,0.06)] aspect-square">
            <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Smiling friends taking a fun street style photo together wearing Y2K bomber jackets and crop tops with sunset lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChvnyRySuTSLidGwuFZEp35KR6lLUvQ6jsPwJtBbFl1bmKkrHGjAopUfF9F03zTmc79K0CoqmgsIkH5tI5hHwat9ZfLVElEQGC3BM_sAtUhtEzDMdIufc-rxq_CS39_0mPULSgfyEaHPgLs7TSxMydWnKWLQTn4oqtxztERUhZ5uUocDvJqh8NU67H7ykYMxU1wIakoikKmK0vs0aFO_RrGyfzzRBzeLHRVN2jhmY0" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-space-md flex flex-col justify-end text-surface">
              <div className="flex items-center gap-1 text-tertiary mb-1">
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
                <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                  {"star"}
                </span>
              </div>
              <p className="font-label-md text-label-md font-bold">
                {"@lucia_and_ale"}
              </p>
              <p className="font-body-sm text-body-sm text-surface-container-high opacity-90">
                {"\"Los colores reales son vibrantes como en el feed.\""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
