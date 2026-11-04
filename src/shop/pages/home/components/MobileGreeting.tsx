export function MobileGreeting() {
  return (
    <section className="px-margin pt-space-sm pb-space-xs flex items-center justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <h2 className="font-headline-md text-headline-md text-on-surface leading-tight">
            {"¡Hola, Camila!"}
          </h2>
          <span className="text-lg animate-bounce select-none">
            {"✨"}
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {"¿Lista para elevar tu match de hoy?"}
        </p>
      </div>
      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed shadow-sm">
        <span className="material-symbols-outlined text-[15px] text-tertiary">
          {"workspace_premium"}
        </span>
        <span className="font-label-badge text-label-badge tracking-wider uppercase">
          {"Club Gold 👑"}
        </span>
      </div>
    </section>
  )
}
