import { Link } from 'react-router'

export function CatalogContent() {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-margin md:px-margin-desktop py-space-md flex flex-col gap-space-lg">
      <nav className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm overflow-x-auto whitespace-nowrap py-space-xs">
        <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
          <span className="material-symbols-outlined text-[16px]">
            {"home"}
          </span>
          <span>
            {"Inicio"}
          </span>
        </a>
        <span className="material-symbols-outlined text-[14px]">
          {"chevron_right"}
        </span>
        <Link className="hover:text-primary transition-colors" to="/catalogo">
          {"Catálogo de Moda Femenina"}
        </Link>
        <span className="material-symbols-outlined text-[14px]">
          {"chevron_right"}
        </span>
        <span className="text-primary font-bold">
          {"Todas las Colecciones"}
        </span>
      </nav>
      <div className="relative overflow-hidden bg-gradient-to-r from-surface-container via-primary-fixed to-surface-container-high rounded-xl p-space-lg md:p-space-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
        <div className="relative z-10 flex flex-col gap-space-xs max-w-2xl">
          <div className="flex items-center gap-space-xs">
            <span className="bg-secondary text-on-secondary px-space-sm py-0.5 rounded-full font-label-badge text-label-badge uppercase tracking-widest font-extrabold flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">
                {"auto_awesome"}
              </span>
              {" Drops de Primavera & Verano "}
            </span>
            <span className="bg-primary text-on-primary px-space-sm py-0.5 rounded-full font-label-badge text-label-badge uppercase tracking-wider font-extrabold">
              {"NEW Y2K"}
            </span>
          </div>
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight font-extrabold leading-tight">
            {" Explora Todo el Clóset Trendy "}
            <span className="text-primary">
              {"✨"}
            </span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            {" Prendas curadas para empoderar tu vibra diaria. Mostrando "}
            <span className="font-bold text-on-surface font-label-lg text-label-lg">
              {"48"}
            </span>
            {" de "}
            <span className="font-bold text-primary font-label-lg text-label-lg">
              {"128"}
            </span>
            {" prendas exclusivas y ediciones limitadas. "}
          </p>
        </div>
        <div className="relative z-10 flex items-center gap-space-md self-start md:self-auto bg-surface-container-lowest/80 backdrop-blur-md p-space-md rounded-xl shadow-md">
          <div className="flex flex-col text-right">
            <span className="font-label-badge text-label-badge text-tertiary uppercase font-black">
              {"Flash Offer"}
            </span>
            <span className="font-headline-sm text-headline-sm text-primary font-extrabold leading-none">
              {"HASTA 40% OFF"}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              {"Usa código: "}
              <strong className="text-on-surface">
                {"TRENDY40"}
              </strong>
            </span>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-black text-headline-md shadow-md animate-pulse">
            {" % "}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-space-sm overflow-x-auto pb-space-xs no-scrollbar">
        <button className="flex items-center gap-space-xs bg-primary text-on-primary px-space-md py-space-sm rounded-full font-label-lg text-label-lg shadow-md whitespace-nowrap active:scale-95 transition-all" type="button">
          <span className="material-symbols-outlined text-[18px]">
            {"grid_view"}
          </span>
          <span>
            {"Todas las Prendas"}
          </span>
          <span className="bg-surface-container-lowest/20 text-on-primary text-label-badge font-label-badge px-2 py-0.5 rounded-full">
            {"128"}
          </span>
        </button>
        <button className="flex items-center gap-space-xs bg-surface-container-lowest text-on-surface hover:text-primary px-space-md py-space-sm rounded-full font-label-lg text-label-lg shadow-sm whitespace-nowrap active:scale-95 transition-all" type="button">
          <span className="material-symbols-outlined text-[18px] text-secondary">
            {"fitness_center"}
          </span>
          <span>
            {"Ropa Deportiva (Activewear)"}
          </span>
          <span className="bg-primary-container text-on-primary text-label-badge font-label-badge px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
            {"HOT"}
          </span>
        </button>
        <button className="flex items-center gap-space-xs bg-surface-container-lowest text-on-surface hover:text-primary px-space-md py-space-sm rounded-full font-label-lg text-label-lg shadow-sm whitespace-nowrap active:scale-95 transition-all" type="button">
          <span className="material-symbols-outlined text-[18px] text-secondary">
            {"ac_unit"}
          </span>
          <span>
            {"Colección Invierno"}
          </span>
        </button>
        <button className="flex items-center gap-space-xs bg-surface-container-lowest text-on-surface hover:text-primary px-space-md py-space-sm rounded-full font-label-lg text-label-lg shadow-sm whitespace-nowrap active:scale-95 transition-all" type="button">
          <span className="material-symbols-outlined text-[18px] text-tertiary">
            {"wb_sunny"}
          </span>
          <span>
            {"Colección Verano"}
          </span>
        </button>
        <button className="flex items-center gap-space-xs bg-surface-container-lowest text-on-surface hover:text-primary px-space-md py-space-sm rounded-full font-label-lg text-label-lg shadow-sm whitespace-nowrap active:scale-95 transition-all" type="button">
          <span className="material-symbols-outlined text-[18px] text-primary">
            {"local_fire_department"}
          </span>
          <span>
            {"Tendencias Y2K & Drops"}
          </span>
        </button>
        <button className="flex items-center gap-space-xs bg-surface-container-lowest text-on-surface hover:text-primary px-space-md py-space-sm rounded-full font-label-lg text-label-lg shadow-sm whitespace-nowrap active:scale-95 transition-all" type="button">
          <span className="material-symbols-outlined text-[18px] text-tertiary">
            {"sell"}
          </span>
          <span>
            {"Ofertas & Rebajas"}
          </span>
          <span className="bg-tertiary-fixed text-on-tertiary-fixed text-label-badge font-label-badge px-2 py-0.5 rounded-full font-extrabold">
            {"-40%"}
          </span>
        </button>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
        <div className="flex flex-wrap items-center gap-space-sm">
          <button className="flex items-center gap-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface px-space-md py-space-sm rounded-full font-label-md text-label-md transition-colors shadow-sm" id="toggle-filter-btn" type="button">
            <span className="material-symbols-outlined text-[18px] text-primary">
              {"tune"}
            </span>
            <span id="toggle-filter-text">
              {"Ocultar Filtros"}
            </span>
          </button>
          <div className="hidden sm:flex items-center bg-surface-container-low rounded-full p-1 shadow-inner">
            <button className="p-1.5 rounded-full text-on-surface-variant hover:text-primary transition-colors" id="grid-3-btn" title="3 Columnas" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"view_column"}
              </span>
            </button>
            <button className="p-1.5 rounded-full bg-surface-container-lowest text-primary shadow-sm transition-colors" id="grid-4-btn" title="4 Columnas" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"view_module"}
              </span>
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs pl-space-xs">
            <div className="flex items-center gap-1 bg-surface-container px-space-sm py-1 rounded-full text-label-badge font-label-badge text-on-surface">
              <span>
                {"Talla: "}
                <strong>
                  {"M"}
                </strong>
              </span>
              <button className="hover:text-primary transition-colors flex items-center" type="button">
                <span className="material-symbols-outlined text-[14px]">
                  {"close"}
                </span>
              </button>
            </div>
            <div className="flex items-center gap-1 bg-surface-container px-space-sm py-1 rounded-full text-label-badge font-label-badge text-on-surface">
              <span>
                {"Color: "}
                <strong>
                  {"Rosa Pop"}
                </strong>
              </span>
              <button className="hover:text-primary transition-colors flex items-center" type="button">
                <span className="material-symbols-outlined text-[14px]">
                  {"close"}
                </span>
              </button>
            </div>
            <div className="flex items-center gap-1 bg-surface-container px-space-sm py-1 rounded-full text-label-badge font-label-badge text-on-surface">
              <span>
                {"Colección: "}
                <strong>
                  {"Activewear"}
                </strong>
              </span>
              <button className="hover:text-primary transition-colors flex items-center" type="button">
                <span className="material-symbols-outlined text-[14px]">
                  {"close"}
                </span>
              </button>
            </div>
            <button className="text-primary hover:underline font-label-badge text-label-badge ml-1 font-bold" type="button">
              {"Limpiar todos"}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between lg:justify-end gap-space-md">
          <span className="font-body-sm text-body-sm text-on-surface-variant hidden md:inline">
            {" Mostrando "}
            <strong>
              {"12"}
            </strong>
            {" de "}
            <strong>
              {"48"}
            </strong>
            {" en catálogo "}
          </span>
          <div className="flex items-center gap-space-xs">
            <label className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap" htmlFor="catalog-sort">
              {"Ordenar por:"}
            </label>
            <div className="relative">
              <select className="bg-surface-container-low text-on-surface font-label-md text-label-md rounded-full px-space-md py-space-sm pr-space-lg appearance-none cursor-pointer focus:outline-none focus:bg-surface-container shadow-sm" id="catalog-sort">
                <option value="popular">
                  {"Más Populares 🔥"}
                </option>
                <option value="newest">
                  {"Drops Recientes (Novedades)"}
                </option>
                <option value="price-asc">
                  {"Precio: Menor a Mayor"}
                </option>
                <option value="price-desc">
                  {"Precio: Mayor a Menor"}
                </option>
                <option value="discount">
                  {"Mayor Descuento %"}
                </option>
              </select>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                {"expand_more"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <aside className="lg:col-span-3 flex flex-col gap-space-md lg:sticky lg:top-[148px] bg-surface-container-lowest p-space-md rounded-xl shadow-sm transition-all duration-300" id="catalog-sidebar">
          <div className="relative">
            <input className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-full pl-space-md pr-9 py-2 border-0 focus:outline-none focus:bg-surface-container placeholder:text-on-surface-variant/60" placeholder="Filtrar por estilo o nombre..." type="text" />
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              {"search"}
            </span>
          </div>
          <div className="flex flex-col gap-space-xs pt-space-xs border-t border-surface-container">
            <div className="flex items-center justify-between font-label-lg text-label-lg text-on-surface">
              <span>
                {"Tipo de Prenda"}
              </span>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                {"expand_less"}
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-1 font-body-sm text-body-sm text-on-surface">
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="flex items-center gap-2">
                  <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">
                    {"Tops & Crop Tops"}
                  </span>
                </span>
                <span className="text-on-surface-variant font-label-badge text-label-badge">
                  {"32"}
                </span>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="flex items-center gap-2">
                  <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">
                    {"Leggings & Bikers"}
                  </span>
                </span>
                <span className="text-on-surface-variant font-label-badge text-label-badge">
                  {"18"}
                </span>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="flex items-center gap-2">
                  <input className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">
                    {"Cárdigans & Chaquetas"}
                  </span>
                </span>
                <span className="text-on-surface-variant font-label-badge text-label-badge">
                  {"14"}
                </span>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="flex items-center gap-2">
                  <input className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">
                    {"Faldas & Minivestidos"}
                  </span>
                </span>
                <span className="text-on-surface-variant font-label-badge text-label-badge">
                  {"24"}
                </span>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="flex items-center gap-2">
                  <input className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">
                    {"Bolsos & Accesorios"}
                  </span>
                </span>
                <span className="text-on-surface-variant font-label-badge text-label-badge">
                  {"10"}
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs pt-space-xs border-t border-surface-container">
            <div className="flex items-center justify-between font-label-lg text-label-lg text-on-surface">
              <span>
                {"Rango de Precio"}
              </span>
              <span className="font-label-badge text-label-badge text-primary font-bold">
                {"$15 - $90 USD"}
              </span>
            </div>
            <div className="pt-2 px-1">
              <input className="w-full h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary" max="120" min="15" type="range" defaultValue="75" />
              <div className="flex items-center justify-between gap-space-xs mt-3">
                <div className="flex items-center bg-surface-container-low px-2 py-1 rounded-lg">
                  <span className="text-on-surface-variant font-label-badge text-label-badge mr-1">
                    {"$"}
                  </span>
                  <input className="w-10 bg-transparent text-on-surface font-label-md text-label-md focus:outline-none" type="number" defaultValue="15" />
                </div>
                <span className="text-on-surface-variant font-body-sm text-body-sm">
                  {"a"}
                </span>
                <div className="flex items-center bg-surface-container-low px-2 py-1 rounded-lg">
                  <span className="text-on-surface-variant font-label-badge text-label-badge mr-1">
                    {"$"}
                  </span>
                  <input className="w-10 bg-transparent text-on-surface font-label-md text-label-md focus:outline-none" type="number" defaultValue="90" />
                </div>
                <button className="bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-badge text-label-badge px-3 py-1.5 rounded-lg transition-colors" type="button">
                  {"OK"}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs pt-space-xs border-t border-surface-container">
            <div className="flex items-center justify-between font-label-lg text-label-lg text-on-surface">
              <span>
                {"Talla"}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {"Guía"}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button className="w-9 h-8 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-badge text-label-badge flex items-center justify-center transition-colors" type="button">
                {"XS"}
              </button>
              <button className="w-9 h-8 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-badge text-label-badge flex items-center justify-center transition-colors" type="button">
                {"S"}
              </button>
              <button className="w-9 h-8 rounded-lg bg-primary text-on-primary font-label-badge text-label-badge flex items-center justify-center shadow-sm" type="button">
                {"M"}
              </button>
              <button className="w-9 h-8 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-badge text-label-badge flex items-center justify-center transition-colors" type="button">
                {"L"}
              </button>
              <button className="w-9 h-8 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-badge text-label-badge flex items-center justify-center transition-colors" type="button">
                {"XL"}
              </button>
              <button className="px-2.5 h-8 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-badge text-label-badge flex items-center justify-center transition-colors" type="button">
                {"Plus"}
              </button>
              <button className="px-2.5 h-8 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-badge text-label-badge flex items-center justify-center transition-colors" type="button">
                {"Única"}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs pt-space-xs border-t border-surface-container">
            <div className="flex items-center justify-between font-label-lg text-label-lg text-on-surface">
              <span>
                {"Color Predominante"}
              </span>
              <span className="font-label-badge text-label-badge text-primary">
                {"Rosa Pop"}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button className="w-7 h-7 rounded-full bg-[#f43f5e] ring-2 ring-primary ring-offset-2 ring-offset-surface shadow-sm" title="Fucsia Pop" type="button">

              </button>
              <button className="w-6 h-6 rounded-full bg-[#06b6d4] hover:scale-110 transition-transform shadow-sm" title="Cyan Eléctrico" type="button">

              </button>
              <button className="w-6 h-6 rounded-full bg-[#fbcfe8] hover:scale-110 transition-transform shadow-sm" title="Rosa Pastel" type="button">

              </button>
              <button className="w-6 h-6 rounded-full bg-[#c084fc] hover:scale-110 transition-transform shadow-sm" title="Lila" type="button">

              </button>
              <button className="w-6 h-6 rounded-full bg-[#f59e0b] hover:scale-110 transition-transform shadow-sm" title="Amarillo Sol" type="button">

              </button>
              <button className="w-6 h-6 rounded-full bg-[#6ee7b7] hover:scale-110 transition-transform shadow-sm" title="Menta Suave" type="button">

              </button>
              <button className="w-6 h-6 rounded-full bg-[#ffffff] ring-1 ring-outline-variant hover:scale-110 transition-transform shadow-sm" title="Blanco" type="button">

              </button>
              <button className="w-6 h-6 rounded-full bg-[#181445] hover:scale-110 transition-transform shadow-sm" title="Negro Profundo" type="button">

              </button>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs pt-space-xs border-t border-surface-container">
            <div className="flex items-center justify-between font-label-lg text-label-lg text-on-surface">
              <span>
                {"Ocasión & Estilo"}
              </span>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                {"expand_less"}
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-1 font-body-sm text-body-sm text-on-surface">
              <label className="flex items-center gap-2 cursor-pointer">
                <input defaultChecked className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox" />
                <span>
                  {"Y2K Aesthetic / Pop 2000s"}
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input defaultChecked className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox" />
                <span>
                  {"Fitness & Gym Performance"}
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox" />
                <span>
                  {"Casual Chic / Streetwear"}
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox" />
                <span>
                  {"Fiesta, Party & Noche"}
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox" />
                <span>
                  {"Cozy Invierno & Layering"}
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs pt-space-xs border-t border-surface-container">
            <div className="flex items-center justify-between font-label-lg text-label-lg text-on-surface">
              <span>
                {"Disponibilidad"}
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-1 font-body-sm text-body-sm text-on-surface">
              <label className="flex items-center gap-2 cursor-pointer">
                <input defaultChecked className="w-4 h-4 rounded text-secondary accent-secondary cursor-pointer" type="checkbox" />
                <span>
                  {"En Stock (Despacho Hoy)"}
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="w-4 h-4 rounded text-secondary accent-secondary cursor-pointer" type="checkbox" />
                <span>
                  {"Solo Ofertas con Descuento"}
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="w-4 h-4 rounded text-secondary accent-secondary cursor-pointer" type="checkbox" />
                <span>
                  {"Drops de esta semana"}
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-space-sm border-t border-surface-container">
            <button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-2.5 rounded-full shadow-md active:scale-98 transition-all flex items-center justify-center gap-1.5" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"filter_alt"}
              </span>
              <span>
                {"Aplicar Filtros (3 Activos)"}
              </span>
            </button>
            <button className="w-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md py-2 rounded-full transition-colors" type="button">
              {" Restablecer Filtros "}
            </button>
          </div>
        </aside>
        <div className="lg:col-span-9 flex flex-col gap-space-lg" id="catalog-grid-container">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-space-md" id="products-grid">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Female fashion model wearing hot fuchsia seamless ribbed activewear gym set with sports bra and high-waisted biker shorts in modern aesthetic studio lighting, cheerful confident mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZJFG_CKRzQHc78cCRdbrUUhOhn23dRLc6ELM_oJh-0na_LbVyCrGuw5WObK9IY_rm-P7Nnyv45HUOs9JUJd7GYOHrucn8-NU9MALxNhBGR8-DD_5N5lnSyiE9muKrCN4XnI7LdBDhcYtob-AGZrOrXzuRElXYxx7lI1FCTfnAKDVdYmgL24UZ2SXifzXrd5URYywubYqRl7NNuJ-WCT1tasj-nBMO-CBD7L5QgEtT" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-secondary text-on-secondary font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                    {"BESTSELLER"}
                  </span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase font-black shadow-sm">
                    {"-30%"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"XS"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"M"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"L"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Activewear"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.9 (124)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Set Seamless Fuchsia Pulse "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#f43f5e] ring-1 ring-primary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#06b6d4]">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#181445]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                        {"$38.50"}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant/70 line-through leading-none">
                        {"$55.00"}
                      </span>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Playful young brunette wearing a baby blue and pastel pink cropped graphic baby tee with rhinestone butterfly 2000s Y2K style aesthetic, sunny lifestyle portrait." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU3YCjNRrMSFMXqsjsiS4kR-BDSBoxa-x4ez28s3FhlAAKYQd1gXiBgIzs9zcUtFfT51SgK7McmHhVdQg-1DHjVu4o_v2SAEOlNmFB8spgbawfAkSDE6VJw3-I65j42e3Fndvs-6YrGTTBamIAog_B_UfHh4m3uy2TQqQuQH__0vdjY2Xss66hJ_ZBHJFBUCqeRPfTi25XfLdGnnU_XpsyS8ozIFoO5n6HHJv7KmG5" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-primary text-on-primary font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                    {"NUEVO DROP"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-around justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"M"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"L"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Tops Y2K"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.8 (92)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Baby Tee Babygirl Rhinestone "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#acedff] ring-1 ring-secondary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#fbcfe8]">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#ffffff]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                      {"$24.00"}
                    </span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Chic woman dressed in lilac fluffy oversized cardigan with shiny pastel pearl buttons and white tennis skirt, soft dreamy daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKNXGtaWeG0OPc4Ss4l_uIFpED9CNxOMNWQVus593Oga-WKHb_OW3O2s-e9XYCLlBqiXWH9AmsVvEQHxCarSiQ_tPGJMa40Z_jFrxQy9O_3GedrUZSCmLFqN7PVVh3MJZaFrJXOWIps7rAwI0X842RGNrXpXvkJoRsm1tHls0bFaHowDvEW6q2RymMh1XAg3We1FkxNRlF_A1DLDXKaL32aD7cNSaLGYDX2LsE90Cs" alt="" />
                </Link>
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-secondary text-on-secondary font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                    {"EDICIÓN LIMITADA"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"M"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"L"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"XL"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Cárdigans & Knits"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"5.0 (68)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Cardigan Fluffy Pastel Cloud "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#c084fc] ring-1 ring-primary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#fbcfe8]">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#6ee7b7]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                        {"$49.90"}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant/70 line-through leading-none">
                        {"$65.00"}
                      </span>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Stylish Latin woman outdoors in city wearing a bright turquoise pleated mini tennis skirt and cropped white hoodie, sunny street chic vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpQodWkG4CPJaA0trn2uk2mrbrnLXTzkhS46K6Q5nUI4utcpcvslOYBoawdCe_hOYBj0pt9WhumPCmqvf-l4Z21ZIkLfDnx6_Bwa8WlNQh9TMiYf_GqtKVaLBSxsw2oYIwJ2HkllU5kzrF5MQS-FQsrRnqnFhD0Tw8wJ3TwTVx9xNMoV45xvO655z2IFNq_-zMbcVAxmymPG3tzuVXZ9TqmzT099BSHtG-o9ogI6YM" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase font-black shadow-sm">
                    {"-25%"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"XS"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"M"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Faldas & Minis"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.7 (79)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Mini Plisada Cyber Electric "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#06b6d4] ring-1 ring-secondary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#181445]">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#f43f5e]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                        {"$29.90"}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant/70 line-through leading-none">
                        {"$39.90"}
                      </span>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Athletic woman standing in yoga studio wearing mint green high-waisted seamless scrunch leggings and matching athletic halter top, modern clean light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxvCAI8JA4qvzOZs6wD1_Y4vPlfOMIAFJ9aQnZIfUz6slsXKE2NVQwNRiHaWBb2JfwirBdQ6pt6JzaGrHAQC7nrJEpSmOFEzRMvpgWqo6Oequ4JBy38YdzwCFGOVet1TPrka2mJIyBTttp0Hh2HX3HTnryJT-Ix-U8OBvP3sf9BPCdFUV6x2VWbzMCpO03sSEq9WNxXHsX8fzQencRtkS2L2LZWceO3_aECbcPwUEM" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-secondary text-on-secondary font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                    {"TOP SELLER"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"M"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"L"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Activewear"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.9 (110)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Legging Scrunch Boost Mint "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#6ee7b7] ring-1 ring-secondary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#f43f5e]">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#181445]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                      {"$32.00"}
                    </span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Glamorous girl posing on sunlit balcony wearing bright fuchsia cut-out bodycon mini dress with spaghetti straps, golden hour sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdYnd4v85jy4BEMJqNZgvzlkqwFMHatqBpMGV67apKWK8wf3xlhSqbFRxpy4_nGjPanGonO8RkT7wyZcwh_ZifEZHydlwn5ep-LWvooQlXwLzlng-PguNbZjMgcD1Caf5cZt7yLHg2_KPWFQCh4yWBrxHgkCudAah7BqL0h1Zp6dvCqdP-WbF6Gsh6XBuw0Sq_tY-xVLta-ctKznBoGft5gmLaAv9kl7Fxfc9wclG7" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-primary text-on-primary font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                    {"NUEVO DROP"}
                  </span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase font-black shadow-sm">
                    {"-35%"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"XS"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"M"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Vestidos Glam"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.9 (95)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Vestido Bodycon Cut-Out Diva "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#f43f5e] ring-1 ring-primary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#181445]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                        {"$35.75"}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant/70 line-through leading-none">
                        {"$55.00"}
                      </span>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Edgy fashion model wearing two-tone metallic pink and silver streetwear oversized bomber jacket with oversized vintage sunglasses, urban pop setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAKRbRlY58wURXO7oEAhlXj9pba_NXii4GZBGfYBrWqJB1DOH7NgVbtVGN4v6UbHbzkdE5ed1JNgNeh10kK00N-EgO9vdSS9Buw1CxbQ_20qyT5f36yEBuup2HpZ83cUFe5MHBioR-geWhmdC47Wta756xSftvpgyI6JBFHRjw_rNLBpE-w7DjCrvu220EJAi071kGgZcq05L4J3jchsjXIliTvEZGCNc-MpQrbb69" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-secondary text-on-secondary font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                    {"PREMIUM"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"M"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"L"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"XL"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Street Jackets"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.9 (53)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Bomber Jacket Y2K Metallic Fuchsia "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#f43f5e] ring-1 ring-primary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#ced4da]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                      {"$68.00"}
                    </span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Charming model on tropical beach wearing yellow sun backless halter crop top and flowy lightweight linen trousers, bright summer warmth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5cRRWUV8SessIL-bUkFvpA_uJvo1wxq932aWu46yXzmFhzYNOl9-fwayqJcHc49BVZFVWF4hbYRqFXtHS4W4JhcY5eqr-qYMKko7xfdqChta53h0f4Q8zm3G5s_4XsWerRTUrqIZ3AmaWhHxbrA3l-gfHBMxg0DncrfRvNhk7IezLOxIeohcSHg64yXGg8UfoLEen3iiRQOxoiAPptsDI3eie14IKBQIyylweqjdm" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase font-black shadow-sm">
                    {"-20%"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"XS"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"M"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Verano Sol"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.6 (42)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Top Halter Sunbeam Ray "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#f59e0b] ring-1 ring-tertiary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#ffffff]">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#acedff]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                        {"$19.90"}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant/70 line-through leading-none">
                        {"$25.00"}
                      </span>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Confident fitness influencer wearing a high-compression cyan blue athletic jumpsuit catsuit in modern gym setting, athletic activewear design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5s704XgeDp4HU2wb1n-dWN2tn1nTV9vGRFoPQX0XGPuyQiCSyMnuWMCh8d4XDPN8XnwujAyK3SFdku_K__Cmpz9olvgn_8UQb1KHVBN_GH1ux1rTGAH69Ku14VoU5m42KKDPCMwNvPGWHjhNUzZfO2Jd18-22AEftBChxuCiPyRR01XWvmJ56fExMt6J9rWx_QvR3bWYXAYr531CSfKh9liKADOX7Nuxx5SJrOT0d" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-secondary text-on-secondary font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                    {"VIRAL TIKTOK"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"M"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"L"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Activewear"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.9 (138)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Catsuit Compresión Cyan Pro "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#06b6d4] ring-1 ring-secondary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#181445]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                      {"$46.00"}
                    </span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Model wearing low-rise wide leg parachute cargo pants in candy pastel pink with matching baby pink cropped hoodie, futuristic urban pop style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbGzHsSJ9rho66JrYbKfE3Ktro53KrBhNoWICCxhtteWN1d9m1SMJquRTdrdadax515hIBLcM3ECAUqJmRuPvS1f6GWCkHXAz6ooKxru9BtkQbh7j20wVWuVS_WKsN9SJ6EUJJpX20lyxMjZuf37Xty65JW1UWd3SPfDlEP9BjEaF477WyYcbaRCQAC8ViLlB2ZITRMrVZWRYXkIggr3v-uBKc5I79k6pdTlsBMAh5" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-primary text-on-primary font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                    {"NUEVO DROP"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"M"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"L"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"XL"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Pantalones Y2K"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.8 (88)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Parachute Pants Pink Dream "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#fbcfe8] ring-1 ring-primary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#181445]">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#ffffff]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                      {"$44.00"}
                    </span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Chic girl holding mini structured shoulder bag in metallic holographic pink crocodile texture, neon soft studio portrait." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB04QA4W9bltQ5EMgJOo81Im4DK9SuzpdkIUnVooeaNfj2-oy81vTo8xiThgij1eugfochYAg9yhm2Z6Sd8x92oHBCC4sOUSGaBHGXB8jsW3S1ftG_QxOpDpW37Sae2gjIclib_w076CUSjiACkD7W64rx4Ym9-X3zoz7lsOOTOWmqz_sPK0tHF0DHTl3qx3Re-81Kouljfoj0SPiwYDW2W-qsv7PTyKynWiYBHBkKO" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase font-black shadow-sm">
                    {"-40%"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Accesorios"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.9 (61)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Mini Bag Holographic Glow "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#f43f5e] ring-1 ring-primary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#acedff]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                        {"$22.80"}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant/70 line-through leading-none">
                        {"$38.00"}
                      </span>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative w-full aspect-[3/4] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Smiling woman in high-neck fleece oversized winter sweater in warm lilac and vanilla tones with comfy chic lounge vibe, golden morning cozy coffee aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHEc3UrE5xoa2AIDMBDtYw9BvaEL_-AVcFF67PBpaZoor-b0MZ8PMgh4a9ThA0_ZDwGw-uy9t6Io8L4DaFe9lPXkFPW0Dsen0VlXFgMsakWuvkPIk_M5HoYL0iXrCfl1TquMPbf20EoGLRB54Yn4jNqTy_Eqio0vjYmw0lZbuCbNRPYqKgD5uuuIm4bh8nevUx_e4UNorUd-nZ0pt5wyX9c0Q48XtChDvC34mYv3nB" alt="" />
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                  <span className="bg-secondary text-on-secondary font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-sm">
                    {"COZY PICK"}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    {"favorite"}
                  </span>
                </button>
                <div className="absolute inset-x-2 bottom-2 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg py-1 px-2 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"S"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-primary font-bold cursor-pointer">
                    {"M"}
                  </span>
                  <span className="text-body-sm font-label-badge text-label-badge text-on-surface hover:text-primary cursor-pointer">
                    {"L"}
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-grow justify-between gap-space-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">
                      {"Invierno Cozy"}
                    </span>
                    <div className="flex items-center gap-1 text-tertiary font-label-badge text-label-badge">
                      <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        {"star"}
                      </span>
                      <span>
                        {"4.9 (74)"}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                    {" Sweater Polar Fleece Lavender "}
                  </h3>
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-3 h-3 rounded-full bg-[#c084fc] ring-1 ring-primary">

                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#f6f2ff]">

                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container-low">
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md text-primary font-extrabold leading-none">
                      {"$42.00"}
                    </span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center transition-all shadow-md active:scale-95" title="Añadir a la Bolsa" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      {"shopping_bag"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-space-md py-space-md">
            <button className="bg-surface-container-lowest hover:bg-surface-container text-primary font-label-lg text-label-lg px-space-xl py-space-sm rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-space-xs active:scale-95" id="load-more-btn" type="button">
              <span className="material-symbols-outlined text-[20px]">
                {"sync"}
              </span>
              <span>
                {"Cargar 16 Prendas Más"}
              </span>
            </button>
            <div className="flex items-center gap-space-xs font-label-md text-label-md">
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary flex items-center justify-center shadow-sm disabled:opacity-40" disabled type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"chevron_left"}
                </span>
              </button>
              <button className="w-10 h-10 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shadow-md" type="button">
                {"1"}
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary hover:bg-surface-container flex items-center justify-center shadow-sm transition-colors" type="button">
                {"2"}
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary hover:bg-surface-container flex items-center justify-center shadow-sm transition-colors" type="button">
                {"3"}
              </button>
              <span className="text-on-surface-variant px-1 font-bold">
                {"..."}
              </span>
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary hover:bg-surface-container flex items-center justify-center shadow-sm transition-colors" type="button">
                {"8"}
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface hover:text-primary flex items-center justify-center shadow-sm hover:shadow-md transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"chevron_right"}
                </span>
              </button>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {"Página 1 de 8 (128 productos totales)"}
            </span>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-container to-secondary rounded-xl p-space-lg md:p-space-xl text-on-primary shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex flex-col gap-space-xs max-w-xl text-center md:text-left">
          <span className="inline-block bg-surface-container-lowest/20 backdrop-blur-md px-space-sm py-0.5 rounded-full font-label-badge text-label-badge uppercase tracking-widest font-extrabold w-fit mx-auto md:mx-0">
            {" BENEFICIOS VIP LOOK TRENDY "}
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold leading-tight">
            {" ¿Quieres envíos gratis en TODO tu guardarropa? "}
          </h2>
          <p className="font-body-md text-body-md opacity-90">
            {" Únete gratis a las socias del Club Trendy: recibe 15% OFF inmediato en tu primera compra, acceso anticipado de 24 horas a cada Drop nuevo y regalos sorpresa en tus paquetes. "}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto">
          <a className="w-full sm:w-auto bg-surface-container-lowest text-primary hover:bg-surface-container font-label-lg text-label-lg px-space-xl py-space-sm rounded-full shadow-md text-center transition-all active:scale-95 font-bold whitespace-nowrap" href="#">
            {" Unirme al Club VIP "}
          </a>
          <a className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-on-primary hover:border-white font-label-lg text-label-lg px-space-lg py-space-sm rounded-full text-center transition-colors font-bold whitespace-nowrap" href="#">
            {" Saber Más "}
          </a>
        </div>
      </div>
    </div>
  )
}
