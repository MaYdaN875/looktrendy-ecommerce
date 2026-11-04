export function SizeGuideDialog() {
  return (
    <div className="hidden fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-gutter" id="size-guide-modal">
      <div className="bg-surface-container-lowest rounded-xl max-w-xl w-full p-space-lg shadow-xl relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-on-surface hover:text-primary" type="button">
          <span className="material-symbols-outlined text-2xl">
            {"close"}
          </span>
        </button>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-2xl">
            {"straighten"}
          </span>
          <h3 className="font-headline-sm text-on-surface font-bold">
            {"Calculador Interactivo de Talla"}
          </h3>
        </div>
        <p className="font-body-sm text-on-surface-variant mb-space-md">
          {" Ingresa tus medidas aproximadas para que nuestro algoritmo de ajuste te sugiera la talla perfecta para este corte. "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-md">
          <div>
            <label className="block font-label-md text-on-surface font-semibold mb-1">
              {"Tu Contorno de Busto (cm):"}
            </label>
            <input className="w-full bg-surface-container-low px-3 py-2 rounded-xl font-body-sm text-on-surface outline-none focus:ring-2 focus:ring-primary" id="calc-busto" type="number" defaultValue="92" />
          </div>
          <div>
            <label className="block font-label-md text-on-surface font-semibold mb-1">
              {"Tu Altura (cm):"}
            </label>
            <input className="w-full bg-surface-container-low px-3 py-2 rounded-xl font-body-sm text-on-surface outline-none focus:ring-2 focus:ring-primary" id="calc-altura" type="number" defaultValue="165" />
          </div>
        </div>
        <button className="w-full py-2.5 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary hover:text-on-secondary-container font-label-md font-bold mb-space-md transition-all" type="button">
          {" Calcular Mi Talla Recomendada ✨ "}
        </button>
        <div className="p-space-md rounded-xl bg-primary-fixed/50 flex items-center justify-between" id="calc-result">
          <div>
            <p className="font-label-badge text-primary font-extrabold uppercase">
              {"Recomendación Personalizada:"}
            </p>
            <p className="font-headline-sm text-on-surface font-black">
              {"Talla S — Fit Y2K Perfecto"}
            </p>
            <p className="font-body-sm text-on-surface-variant">
              {"Con base en 92cm de busto, te dará una holgura cómoda de 6cm."}
            </p>
          </div>
          <button className="px-4 py-2 rounded-full bg-primary text-on-primary font-label-md font-bold text-xs shadow-sm" type="button">
            {" Aplicar Talla S "}
          </button>
        </div>
      </div>
    </div>
  )
}
