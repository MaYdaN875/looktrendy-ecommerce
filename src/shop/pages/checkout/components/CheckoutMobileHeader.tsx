export function CheckoutMobileHeader() {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-margin flex items-center justify-between">
        <button aria-label="Volver" className="w-11 h-11 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface active:scale-95 transition-transform" type="button">
          <span className="material-symbols-outlined text-[20px]">
            {"arrow_back_ios_new"}
          </span>
        </button>
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[18px]">
            {"lock"}
          </span>
          <h1 className="font-headline-sm text-headline-sm text-on-surface">
            {"Checkout Seguro"}
          </h1>
        </div>
        <div className="flex items-center gap-space-xs">
          <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[18px]">
              {"shopping_bag"}
            </span>
          </div>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1USNOUTZm7uqytwbvQeklQ-WfZ_yPXW3ya2sYf-vAXCpxWcwzJse2sPHTF6LeAeWltXd4hjdqA3aW2kCjpx7bL6F4-j3IPf7LrSBRuepTsNLt97u7rUhlUYgYUatlFbgyqJw6MUukO9AZfRCbX599t26IM7SoWf6KmhLMMx79Ubfk-mj9zC8DBSPjNnz9xMA9e9l5iIfSK7FaE4vdNG3dG8eeDOnw8T0qcJj4KrX8kMlj5FVvqHTeLscJyp" />
        </div>
      </div>
    </header>
  )
}
