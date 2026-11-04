import { Link } from 'react-router'

export function ProductReviews() {
  return (
    <section className="max-w-[1280px] mx-auto w-full px-gutter lg:px-gutter-desktop py-space-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-label-badge text-secondary uppercase tracking-widest font-extrabold">
              {"Comunidad Real"}
            </span>
            <span className="bg-primary-fixed text-primary px-2.5 py-0.5 rounded-full font-label-badge font-bold">
              {"#TrendyGabyBabes"}
            </span>
          </div>
          <h2 className="font-headline-lg text-on-surface font-extrabold">
            {"Reseñas & Fotos Reales de Clientas"}
          </h2>
        </div>
        <div className="flex items-center gap-3 bg-surface-container-lowest p-space-sm px-space-md rounded-xl shadow-sm">
          <span className="font-display-hero text-primary font-black leading-none">
            {"4.9"}
          </span>
          <div>
            <div className="flex text-amber-500 text-sm">
              <span className="material-symbols-outlined text-base">
                {"star"}
              </span>
              <span className="material-symbols-outlined text-base">
                {"star"}
              </span>
              <span className="material-symbols-outlined text-base">
                {"star"}
              </span>
              <span className="material-symbols-outlined text-base">
                {"star"}
              </span>
              <span className="material-symbols-outlined text-base">
                {"star"}
              </span>
            </div>
            <p className="font-label-badge text-on-surface-variant mt-0.5">
              {"Basado en 184 compras verificadas"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-space-lg">
        <button className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-md font-bold text-xs shadow-sm" type="button">
          {" Todas las reseñas (184) "}
        </button>
        <button className="px-3.5 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-xs shadow-sm" type="button">
          {" Con Fotos Reales (96) "}
        </button>
        <button className="px-3.5 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-xs shadow-sm" type="button">
          {" Talla S (78) "}
        </button>
        <button className="px-3.5 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-xs shadow-sm" type="button">
          {" Talla M (54) "}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold font-label-md">
                {" V "}
              </div>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  {"Valeria M."}
                </p>
                <p className="font-label-badge text-secondary font-semibold">
                  {"Compradora Verificada • Talla S"}
                </p>
              </div>
            </div>
            <span className="font-label-badge text-on-surface-variant">
              {"Hace 2 días"}
            </span>
          </div>
          <div className="flex text-amber-500">
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
          </div>
          <p className="font-body-sm text-on-surface-variant leading-relaxed">
            {" “¡Superó todas mis expectativas! El color es exactamente como en las fotos y la calidad del punto es gruesa pero súper suavecita, no pica nada de nada. Me han parado en la calle para preguntarme dónde lo compré.” "}
          </p>
          <div className="w-full h-44 rounded-lg overflow-hidden bg-surface-container mt-auto">
            <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
            <img alt="Foto de clienta Valeria luciendo el cardigan" className="w-full h-full object-cover hover:scale-105 transition-transform" data-alt="Authentic customer mirror selfie wearing the floral pop petals cardigan paired with denim and trendy sunglasses in a cute sunlit bedroom, candid aesthetic fashion shot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD0A4eXBlfC_PKw-lY8j3JEj9kJlnJIWhiwWOoeb15eYXOe01EeKHNAiZdf2FqcdfvcgIYgWZvJ2f3005zF5Mn_a1UU25zImOXpoKgBzluoLtM-edWZ50FudsZCRWVTe78cIDhMToIC6foH5dfgrtRr17VcoJvrxMs7gLlyYXQNR-XQYn_zre7BuSNp8vrdA4NmQn8zHlJvuQCUibx9GKKYRQd7hl1B8QBATzlFZY" />
            </Link>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold font-label-md">
                {" S "}
              </div>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  {"Sofía R."}
                </p>
                <p className="font-label-badge text-secondary font-semibold">
                  {"Compradora Verificada • Talla M"}
                </p>
              </div>
            </div>
            <span className="font-label-badge text-on-surface-variant">
              {"Hace 5 días"}
            </span>
          </div>
          <div className="flex text-amber-500">
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
          </div>
          <p className="font-body-sm text-on-surface-variant leading-relaxed">
            {" “Pedí la talla M para que me quedara bien holgado y el fit es un 100/10. Llegó en 24 horas a mi puerta con el aroma característico de Gaby y los stickers. 100% recomendado si amas la vibra Y2K chic.” "}
          </p>
          <div className="w-full h-44 rounded-lg overflow-hidden bg-surface-container mt-auto">
            <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
            <img alt="Foto de clienta Sofia en café" className="w-full h-full object-cover hover:scale-105 transition-transform" data-alt="Outdoor street style photo of fashionable young woman posing in coffee shop terrace wearing the colorful floral cardigan open over a white tank top, joyful expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVaF-8JBMlTO-KYknm_YN3ls8p2IrNWq8E9ZjmniLDnVaDfA-yzh1X9iGiwKQSYz5XeG2GP_ZdvFhj90KW_a8HX7qDQ5PhcnwbVGdH6Z6U-N4PMO_eCwruoIDT_zvE68KIdrhbY1L56E6Jap4iPY-4oE-nX2WAgCGNj5QsfQxc1fhhj3Frs02AF13jaij6JHTRdjDS1v-uF5SyaefOP8cqUIgaj6cbJiM7Zhvd0xo" />
            </Link>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-surface-container text-tertiary flex items-center justify-center font-bold font-label-md">
                {" M "}
              </div>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  {"Mariana G."}
                </p>
                <p className="font-label-badge text-secondary font-semibold">
                  {"Compradora Verificada • Talla XS"}
                </p>
              </div>
            </div>
            <span className="font-label-badge text-on-surface-variant">
              {"Hace 1 semana"}
            </span>
          </div>
          <div className="flex text-amber-500">
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
            <span className="material-symbols-outlined text-sm">
              {"star"}
            </span>
          </div>
          <p className="font-body-sm text-on-surface-variant leading-relaxed">
            {" “Los botones perlados son un sueño y los detalles en cyan hacen resaltar muchísimo la prenda. Ya lo lavé una vez con agua fría en ciclo delicado y quedó idéntico sin encoger ni perder suavidad. ¡Quiero el de lavanda ahora!” "}
          </p>
          <div className="bg-surface-container-low p-space-md rounded-lg flex items-center gap-3 mt-auto">
            <span className="material-symbols-outlined text-secondary text-2xl">
              {"sentiment_very_satisfied"}
            </span>
            <div>
              <p className="font-label-badge text-on-surface font-bold">
                {"¿Cómo valoras el calce?"}
              </p>
              <p className="font-body-sm text-on-surface-variant">
                {"“Fiel a la talla exacta, caída perfecta.”"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
