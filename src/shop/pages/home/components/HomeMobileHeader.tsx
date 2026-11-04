import { Link } from 'react-router'

export function HomeMobileHeader() {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(244,63,94,0.08)]">
      <div className="h-16 px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[22px]">
            {"auto_awesome"}
          </span>
          <div className="flex flex-col">
            <h1 className="font-label-lg text-label-lg tracking-wider uppercase text-primary leading-none">
              {"LOOK TRENDY GABY"}
            </h1>
            <span className="font-body-sm text-body-sm text-on-surface-variant text-[10px] tracking-widest uppercase">
              {"Inicio"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs">
          <Link aria-label="Buscar" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:text-primary transition-colors" data-path="catalogo" to="/catalogo">
            <span className="material-symbols-outlined text-[22px]">
              {"search"}
            </span>
          </Link>
          <button aria-label="Notificaciones" className="relative w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:text-primary transition-colors" type="button">
            <span className="material-symbols-outlined text-[22px]">
              {"notifications"}
            </span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary">

            </span>
          </button>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-[0_2px_8px_rgba(244,63,94,0.15)]" src="https://lh3.googleusercontent.com/aida/AEtjO1USNOUTZm7uqytwbvQeklQ-WfZ_yPXW3ya2sYf-vAXCpxWcwzJse2sPHTF6LeAeWltXd4hjdqA3aW2kCjpx7bL6F4-j3IPf7LrSBRuepTsNLt97u7rUhlUYgYUatlFbgyqJw6MUukO9AZfRCbX599t26IM7SoWf6KmhLMMx79Ubfk-mj9zC8DBSPjNnz9xMA9e9l5iIfSK7FaE4vdNG3dG8eeDOnw8T0qcJj4KrX8kMlj5FVvqHTeLscJyp" />
        </div>
      </div>
    </header>
  )
}
