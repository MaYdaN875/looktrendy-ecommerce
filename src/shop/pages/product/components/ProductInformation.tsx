export function ProductInformation() {
  return (
    <section className="max-w-[1280px] mx-auto w-full px-gutter lg:px-gutter-desktop py-space-lg">
      <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-space-lg">
          <button className="tab-btn px- space-md py-2.5 px-4 rounded-full font-label-md transition-all bg-primary-container text-on-primary-container font-bold shadow-sm" type="button">
            {" Composición & Sensación al Tacto "}
          </button>
          <button className="tab-btn px- space-md py-2.5 px-4 rounded-full font-label-md transition-all text-on-surface-variant hover:bg-surface-container-high" type="button">
            {" Tabla de Medidas Exactas (cm) "}
          </button>
          <button className="tab-btn px- space-md py-2.5 px-4 rounded-full font-label-md transition-all text-on-surface-variant hover:bg-surface-container-high" type="button">
            {" Cuidados & Lavado "}
          </button>
        </div>
        <div className="tab-pane block" id="tab-composicion">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-2xl">
                  {"spa"}
                </span>
              </div>
              <h4 className="font-headline-sm text-on-surface font-bold">
                {"80% Algodón Peinado Orgánico"}
              </h4>
              <p className="font-body-md text-on-surface-variant">
                {" Hilatura de fibras largas cardadas y peinadas. Garantiza una caída con volumen esponjoso, cero picor en la piel y máxima respirabilidad para entretiempo y noches frescas. "}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-2xl">
                  {"texture"}
                </span>
              </div>
              <h4 className="font-headline-sm text-on-surface font-bold">
                {"20% Hilo Antipilling Tech"}
              </h4>
              <p className="font-body-md text-on-surface-variant">
                {" Refuerzo elástico interno para que los puños y la pretina conserven su elasticidad original uso tras uso sin deformarse ni producir las molestas motas o bolitas. "}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-tertiary flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-2xl">
                  {"science"}
                </span>
              </div>
              <h4 className="font-headline-sm text-on-surface font-bold">
                {"Densidad Jacquard 380 GSM"}
              </h4>
              <p className="font-body-md text-on-surface-variant">
                {" Peso medio-alto que abriga sin resultar pesado. Botones frontales de resina candy nacarada fabricados a mano en tono pastel a tono con los pétalos. "}
              </p>
            </div>
          </div>
        </div>
        <div className="tab-pane hidden" id="tab-medidas">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-sm">
              <thead>
                <tr className="bg-surface-container-low text-on-surface font-label-md uppercase">
                  <th className="p-3 rounded-l-lg">
                    {"Talla"}
                  </th>
                  <th className="p-3">
                    {"Contorno de Busto (cm)"}
                  </th>
                  <th className="p-3">
                    {"Ancho de Hombros (cm)"}
                  </th>
                  <th className="p-3">
                    {"Largo de Manga (cm)"}
                  </th>
                  <th className="p-3 rounded-r-lg">
                    {"Largo Total Prenda (cm)"}
                  </th>
                </tr>
              </thead>
              <tbody className="text-on-surface-variant">
                <tr className="hover:bg-surface-container">
                  <td className="p-3 font-bold text-on-surface">
                    {"XS (Extra Small)"}
                  </td>
                  <td className="p-3">
                    {"88 - 94 cm"}
                  </td>
                  <td className="p-3">
                    {"48 cm"}
                  </td>
                  <td className="p-3">
                    {"51 cm"}
                  </td>
                  <td className="p-3 font-semibold text-primary">
                    {"52 cm"}
                  </td>
                </tr>
                <tr className="bg-surface-container-low/50 hover:bg-surface-container">
                  <td className="p-3 font-bold text-primary">
                    {"S (Small - Visto en Modelo)"}
                  </td>
                  <td className="p-3 font-bold text-primary">
                    {"94 - 100 cm"}
                  </td>
                  <td className="p-3 font-bold text-primary">
                    {"50 cm"}
                  </td>
                  <td className="p-3 font-bold text-primary">
                    {"52 cm"}
                  </td>
                  <td className="p-3 font-bold text-primary">
                    {"54 cm"}
                  </td>
                </tr>
                <tr className="hover:bg-surface-container">
                  <td className="p-3 font-bold text-on-surface">
                    {"M (Medium)"}
                  </td>
                  <td className="p-3">
                    {"100 - 106 cm"}
                  </td>
                  <td className="p-3">
                    {"52 cm"}
                  </td>
                  <td className="p-3">
                    {"53 cm"}
                  </td>
                  <td className="p-3 font-semibold text-primary">
                    {"56 cm"}
                  </td>
                </tr>
                <tr className="hover:bg-surface-container">
                  <td className="p-3 font-bold text-on-surface">
                    {"L (Large)"}
                  </td>
                  <td className="p-3">
                    {"106 - 112 cm"}
                  </td>
                  <td className="p-3">
                    {"54 cm"}
                  </td>
                  <td className="p-3">
                    {"54 cm"}
                  </td>
                  <td className="p-3 font-semibold text-primary">
                    {"58 cm"}
                  </td>
                </tr>
                <tr className="hover:bg-surface-container">
                  <td className="p-3 font-bold text-on-surface">
                    {"XL (Extra Large)"}
                  </td>
                  <td className="p-3">
                    {"112 - 120 cm"}
                  </td>
                  <td className="p-3">
                    {"56 cm"}
                  </td>
                  <td className="p-3">
                    {"55 cm"}
                  </td>
                  <td className="p-3 font-semibold text-primary">
                    {"60 cm"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body-sm text-on-surface-variant mt-space-md flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary text-base">
              {"info"}
            </span>
            <span>
              {"Tip de estilo: Si prefieres un fit más ceñido a la cintura, elige una talla menos. Si buscas el efecto Oversize Y2K de pasarela, tu talla habitual es la ideal."}
            </span>
          </p>
        </div>
        <div className="tab-pane hidden" id="tab-cuidados">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-md">
            <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">
                {"water_drop"}
              </span>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  {"Agua Fría (Máx 30°C)"}
                </p>
                <p className="font-body-sm text-on-surface-variant">
                  {"Lavar preferentemente al revés con bolsa de lavado delicado."}
                </p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">
                {"mode_fan_off"}
              </span>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  {"No Usar Secadora"}
                </p>
                <p className="font-body-sm text-on-surface-variant">
                  {"El calor excesivo compacta el jacquard. Secar extendido en horizontal."}
                </p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-3">
              <span className="material-symbols-outlined text-tertiary text-2xl">
                {"iron"}
              </span>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  {"Vapor Suave"}
                </p>
                <p className="font-body-sm text-on-surface-variant">
                  {"Planchar con vapor a distancia de 5cm para revivir el relieve de los pétalos."}
                </p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">
                {"check_box"}
              </span>
              <div>
                <p className="font-label-md text-on-surface font-bold">
                  {"Detergente Suave"}
                </p>
                <p className="font-body-sm text-on-surface-variant">
                  {"Evita lejía o cloros para preservar los tintes pastel de alta vivacidad."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
