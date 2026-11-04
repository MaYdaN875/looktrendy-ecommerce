export function CatalogBreadcrumb() {
  return (
    <div className="fixed bottom-6 right-6 z-40 bg-surface-container-lowest text-on-surface p-space-md rounded-xl shadow-xl flex items-center gap-space-md transform translate-y-32 opacity-0 transition-all duration-500 ease-out pointer-events-none" id="live-toast">
      <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
        <span className="material-symbols-outlined text-[20px]">
          {"shopping_bag"}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
          {"¡Recién Comprado!"}
        </span>
        <span className="font-label-lg text-label-lg font-bold text-on-surface" id="toast-title">
          {"Set Seamless Fuchsia Pulse"}
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          {"Hace 2 minutos desde Guadalajara, MX"}
        </span>
      </div>
    </div>
  )
}
