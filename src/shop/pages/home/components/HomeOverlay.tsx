export function HomeOverlay() {
  return (
    <div className="fixed top-20 right-4 z-50 bg-secondary text-on-secondary px-space-lg py-space-sm rounded-full shadow-xl flex items-center gap-space-sm transform translate-y-[-100px] opacity-0 transition-all duration-300 pointer-events-none" id="cart-notification">
      <span className="material-symbols-outlined text-[20px]">
        {"check_circle"}
      </span>
      <span className="font-label-md text-label-md font-bold">
        {"¡Prenda añadida a tu bolsa trendy!"}
      </span>
    </div>
  )
}
