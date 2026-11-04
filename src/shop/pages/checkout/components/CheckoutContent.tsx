import { Link } from 'react-router'

export function CheckoutContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
      <div className="lg:col-span-7 flex flex-col gap-space-lg">
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md">
          <div className="flex items-start justify-between gap-space-md">
            <div className="flex items-start gap-space-sm">
              <div className="w-7 h-7 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mt-0.5">
                <span className="material-symbols-outlined text-[16px]">
                  {"local_shipping"}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-lg text-label-lg text-on-surface font-bold">
                    {"Dirección de Entrega Confirmada"}
                  </span>
                  <span className="bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full">
                    {"Express"}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface font-semibold mt-1">
                  {"Camila Valenzuela"}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Av. Las Condes 450, Depto 802, Las Condes • +56 9 8452 1190"}
                </p>
                <p className="font-body-sm text-body-sm text-secondary font-medium mt-0.5">
                  {"Envío Express Prioritario 24-48 hrs ($4.99 USD)"}
                </p>
              </div>
            </div>
            <button className="text-secondary hover:text-primary font-label-md text-label-md uppercase tracking-wider font-bold transition-colors" type="button">
              {" Modificar "}
            </button>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-md flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-badge text-label-badge font-bold">
                {"2"}
              </span>
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {"Selecciona tu Método de Pago"}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Todas las formas de pago están cifradas y respaldadas"}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-secondary">
                {"verified"}
              </span>
              <span className="font-label-badge text-label-badge">
                {"Verificado"}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm pt-space-xs" id="payment-methods-container">
            <div className="bg-surface-container-low rounded-xl p-space-md transition-all cursor-pointer" id="method-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <input defaultChecked className="accent-primary w-4 h-4 cursor-pointer" id="radio-card" name="payment-selection" type="radio" />
                  <label className="font-label-lg text-label-lg text-on-surface font-bold cursor-pointer flex items-center gap-space-xs" htmlFor="radio-card">
                    <span>
                      {"Tarjeta de Crédito o Débito"}
                    </span>
                    <span className="bg-primary-fixed text-on-primary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full uppercase">
                      {"Recomendado"}
                    </span>
                  </label>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 bg-surface-container-lowest rounded text-on-surface font-label-badge text-label-badge font-bold shadow-xs">
                    {"VISA"}
                  </span>
                  <span className="px-2 py-0.5 bg-surface-container-lowest rounded text-on-surface font-label-badge text-label-badge font-bold shadow-xs">
                    {"MC"}
                  </span>
                  <span className="px-2 py-0.5 bg-surface-container-lowest rounded text-on-surface font-label-badge text-label-badge font-bold shadow-xs">
                    {"AMEX"}
                  </span>
                </div>
              </div>
              <div className="mt-space-md pt-space-md flex flex-col gap-space-md" id="card-form-content">
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md text-on-surface font-bold flex items-center justify-between">
                    <span>
                      {"Número de la Tarjeta"}
                    </span>
                    <span className="font-label-badge text-label-badge text-secondary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        {"shield"}
                      </span>
                      {" Detección Automática "}
                    </span>
                  </label>
                  <div className="relative flex items-center">
                    <input className="w-full bg-surface-container-lowest font-body-md text-body-md text-on-surface px-space-md py-space-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-inner tracking-wider" maxLength={19} placeholder="4000 1234 5678 9010" type="text" defaultValue="4532 •••• •••• 8821" />
                    <div className="absolute right-3 flex items-center gap-1 pointer-events-none">
                      <span className="px-2 py-0.5 bg-surface-container text-primary font-label-badge text-label-badge font-bold rounded">
                        {"VISA"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md text-on-surface font-bold">
                    {"Nombre del Titular"}
                  </label>
                  <input className="w-full bg-surface-container-lowest font-body-md text-body-md text-on-surface px-space-md py-space-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-inner uppercase tracking-wide" placeholder="Tal como aparece en la tarjeta" type="text" defaultValue="CAMILA VALENZUELA R." />
                </div>
                <div className="grid grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface font-bold">
                      {"Vencimiento"}
                    </label>
                    <input className="w-full bg-surface-container-lowest font-body-md text-body-md text-on-surface px-space-md py-space-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-inner text-center" maxLength={5} placeholder="MM/AA" type="text" defaultValue="08/28" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <label className="font-label-md text-label-md text-on-surface font-bold">
                        {"Código CVV"}
                      </label>
                      <span className="font-label-badge text-label-badge text-on-surface-variant cursor-pointer hover:text-primary flex items-center gap-0.5" title="Los 3 o 4 dígitos al reverso">
                        <span className="material-symbols-outlined text-[13px]">
                          {"help"}
                        </span>
                        {" Ayuda "}
                      </span>
                    </div>
                    <div className="relative flex items-center">
                      <input className="w-full bg-surface-container-lowest font-body-md text-body-md text-on-surface px-space-md py-space-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-inner text-center tracking-widest" maxLength={4} placeholder="123" type="password" defaultValue="789" />
                      <span className="material-symbols-outlined absolute right-3 text-on-surface-variant text-[18px]">
                        {"credit_card"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-space-sm cursor-pointer select-none">
                    <input defaultChecked className="accent-primary w-4 h-4 rounded cursor-pointer" type="checkbox" />
                    <span className="font-body-sm text-body-sm text-on-surface">
                      {"Guardar esta tarjeta de forma segura para compras futuras"}
                    </span>
                  </label>
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    {"enhanced_encryption"}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest hover:bg-surface-container-low/60 rounded-xl p-space-md transition-all cursor-pointer shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <input className="accent-primary w-4 h-4 cursor-pointer" id="radio-paypal" name="payment-selection" type="radio" />
                  <label className="font-label-lg text-label-lg text-on-surface font-bold cursor-pointer flex items-center gap-space-xs" htmlFor="radio-paypal">
                    <span>
                      {"PayPal Express"}
                    </span>
                  </label>
                </div>
                <div className="flex items-center gap-1 font-headline-sm text-headline-sm italic font-extrabold text-secondary tracking-tighter">
                  {" Pay"}
                  <span className="text-secondary-fixed-dim">
                    {"Pal"}
                  </span>
                </div>
              </div>
              <div className="hidden mt-space-sm pt-space-sm" id="paypal-content">
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                  {"Serás redirigida al portal protegido de PayPal para completar la transacción en un solo clic."}
                </p>
                <div className="bg-surface-container p-space-sm rounded-xl text-center font-label-md text-label-md text-on-surface font-semibold">
                  {" Se abrirá una ventana emergente de PayPal "}
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest hover:bg-surface-container-low/60 rounded-xl p-space-md transition-all cursor-pointer shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <input className="accent-primary w-4 h-4 cursor-pointer" id="radio-mp" name="payment-selection" type="radio" />
                  <label className="font-label-lg text-label-lg text-on-surface font-bold cursor-pointer" htmlFor="radio-mp">
                    {" Mercado Pago "}
                  </label>
                  <span className="bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full">
                    {"Hasta 6 Cuotas Sin Interés"}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  {"account_balance_wallet"}
                </span>
              </div>
              <div className="hidden mt-space-sm pt-space-sm" id="mp-content">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Paga con saldo Mercado Pago, tarjetas de débito locales o hasta 6 cuotas con tarjetas bancarias participantes."}
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest hover:bg-surface-container-low/60 rounded-xl p-space-md transition-all cursor-pointer shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <input className="accent-primary w-4 h-4 cursor-pointer" id="radio-wallets" name="payment-selection" type="radio" />
                  <label className="font-label-lg text-label-lg text-on-surface font-bold cursor-pointer" htmlFor="radio-wallets">
                    {" Apple Pay / Google Pay "}
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-on-surface">
                    {"phone_iphone"}
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-on-surface">
                    {"contactless"}
                  </span>
                </div>
              </div>
              <div className="hidden mt-space-sm pt-space-sm" id="wallets-content">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Autorización biométrica instantánea con Face ID, Touch ID o billetera de Google."}
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest hover:bg-surface-container-low/60 rounded-xl p-space-md transition-all cursor-pointer shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <input className="accent-primary w-4 h-4 cursor-pointer" id="radio-kueski" name="payment-selection" type="radio" />
                  <label className="font-label-lg text-label-lg text-on-surface font-bold cursor-pointer" htmlFor="radio-kueski">
                    {" Transferencia Bancaria & Cuotas "}
                  </label>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full">
                    {"Sin Tarjeta"}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[20px] text-tertiary">
                  {"payments"}
                </span>
              </div>
              <div className="hidden mt-space-sm pt-space-sm" id="kueski-content">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Generaremos los datos de transferencia o el enlace directo para pagar en quincenas flexibles."}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-space-md pt-space-md bg-surface-container-low p-space-md rounded-xl">
            <h3 className="font-label-lg text-label-lg text-on-surface font-bold mb-space-sm">
              {"Dirección de Facturación"}
            </h3>
            <div className="flex flex-col gap-space-sm">
              <label className="flex items-center gap-space-sm cursor-pointer select-none">
                <input defaultChecked className="accent-primary w-4 h-4 cursor-pointer" name="billing-choice" type="radio" />
                <span className="font-body-md text-body-md text-on-surface font-medium">
                  {"Misma dirección de envío (Av. Las Condes 450, Depto 802)"}
                </span>
              </label>
              <label className="flex items-center gap-space-sm cursor-pointer select-none">
                <input className="accent-primary w-4 h-4 cursor-pointer" name="billing-choice" type="radio" />
                <span className="font-body-md text-body-md text-on-surface-variant">
                  {"Utilizar una dirección de facturación diferente"}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[28px] text-secondary">
              {"verified_user"}
            </span>
            <div>
              <p className="font-label-md text-label-md text-on-surface font-bold">
                {"Garantía Look Trendy 100% Protegida"}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"Devoluciones sin costo durante los primeros 30 días si no amas tu prenda."}
              </p>
            </div>
          </div>
          <a className="hidden sm:inline-block font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold hover:underline" href="#">
            {"Ver Políticas"}
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 sticky top-[150px]">
        <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-xl flex flex-col gap-space-md">
          <div className="flex items-center justify-between pb-space-xs">
            <div className="flex items-center gap-space-xs">
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                {"Resumen de tu Orden"}
              </h2>
              <span className="bg-primary-fixed text-on-primary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full font-bold">
                {"3 prendas"}
              </span>
            </div>
            <a className="text-secondary hover:text-primary font-label-badge text-label-badge uppercase font-bold tracking-wider transition-colors" href="#">
              {"Editar Carrito"}
            </a>
          </div>
          <div className="flex flex-col gap-space-md max-h-[310px] overflow-y-auto pr-1">
            <div className="flex items-center gap-space-sm">
              <div className="relative w-16 h-20 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
                <img className="w-full h-full object-cover" data-alt="Model wearing a cozy pop pink floral knit cardigan fluffy petals aesthetic youth fashion studio lighting bright and clean" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLgcCOHqsHRsMXypEWqRAS9IriVAMyFXYnQ9zIN1oQi9QJWS6lF0E9gF443A9ev0c6SEVyD9zBP7VPoxnpYHyVc_9YQ4XaV19EATRzkloIixGTOeeUKhM7D-dnkC-yL4PguYktCh0K0-FO6S8FVjljV5iqIesctGM9_FafkPo0SFgA_E15BsJG2l-QRDOqtxuxNIyque3TLUnlvF7QYXvVovjRoohJ8hSc-WC-2Gn1" alt="" />
                </Link>
                <span className="absolute top-1 left-1 bg-surface-container-lowest/90 backdrop-blur-xs font-label-badge text-[10px] px-1.5 py-0.2 rounded-full font-bold text-on-surface">
                  {"1x"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">
                  {"Cardigan Fluffy Pop Petals"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Talla: M • Color: Rosa Pastel"}
                </p>
                <span className="inline-block font-label-badge text-label-badge text-secondary font-bold">
                  {"Edición Y2K"}
                </span>
              </div>
              <div className="text-right shrink-0">
                <span className="font-label-lg text-label-lg text-on-surface font-bold">
                  {"$49.90"}
                </span>
                <span className="block font-body-sm text-body-sm text-outline line-through">
                  {"$58.00"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <div className="relative w-16 h-20 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Athletic stylish young woman wearing a seamless glowing cyan turquoise activewear matching set studio lighting minimalist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaipTZvThM7uy6Z4PRjkvQxTfjEWmfyESLd4Cv17DKs0zg1zSYZB_DMhRzhoqCwzGfHGqe9opX9Xe45ktthOxfOA4VL9Dwh4nv7jdk11sfLBhmg5ulLAfBknOY-P-swNL_klOXS8eQZRDWMiacqeoprDg1gYxuDT9P1IjuLQvRNE-b4jNc-CB8tUGaIaM0UCvy31ozH6AKD_VckJKr9fDQClyXRRUIiLPLU4ab4mMU" alt="" />
                <span className="absolute top-1 left-1 bg-surface-container-lowest/90 backdrop-blur-xs font-label-badge text-[10px] px-1.5 py-0.2 rounded-full font-bold text-on-surface">
                  {"1x"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">
                  {"Set Seamless Active Glow"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Talla: S • Color: Cyan Eléctrico"}
                </p>
                <span className="inline-block font-label-badge text-label-badge text-primary font-bold">
                  {"Top Trend"}
                </span>
              </div>
              <div className="text-right shrink-0">
                <span className="font-label-lg text-label-lg text-on-surface font-bold">
                  {"$38.50"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <div className="relative w-16 h-20 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Trendy pleated pastel Y2K mini skirt high quality fabric studio clean fashion editorial aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiTIoD-a7fwDkDtll4SwE6vCwvq2Us5FEqJtmKBS6Lvf79GGBnq5Bp_Y-zzRQ2rT9Iuhs5gmTIWB0Ye7d6OA3MmvFY2bWSxY8aC2diqU2UAHRzo3aopv1yGNm6FCcClgHJbeqvKPK5hvIbDh_nG_e5F_OohNJp0FRXHjrbzW5-o-p89PFFld8oguSh_yKFg_-Ce2h8DavxumSUjkPr-4rTPiCkKS3UOkP90uP_v1kq" alt="" />
                <span className="absolute top-1 left-1 bg-surface-container-lowest/90 backdrop-blur-xs font-label-badge text-[10px] px-1.5 py-0.2 rounded-full font-bold text-on-surface">
                  {"1x"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-label-lg text-label-lg text-on-surface font-bold truncate">
                  {"Falda Plisada Y2K Pastel"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Talla: M • Color: Vainilla Pop"}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-label-lg text-label-lg text-on-surface font-bold">
                  {"$29.90"}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px] text-primary">
                {"sell"}
              </span>
              <span className="font-label-md text-label-md text-on-surface font-bold">
                {"TRENDY15 (-15%)"}
              </span>
              <span className="bg-primary text-on-primary font-label-badge text-label-badge px-1.5 py-0.2 rounded-full font-bold">
                {"-$17.75"}
              </span>
            </div>
            <button className="text-on-surface-variant hover:text-error text-[16px] flex items-center" title="Remover cupón" type="button">
              <span className="material-symbols-outlined">
                {"close"}
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-space-xs pt-space-xs font-body-md text-body-md text-on-surface-variant">
            <div className="flex justify-between items-center">
              <span>
                {"Subtotal original"}
              </span>
              <span className="text-on-surface font-semibold">
                {"$118.30 USD"}
              </span>
            </div>
            <div className="flex justify-between items-center text-primary font-medium">
              <span>
                {"Descuento cupón TRENDY15"}
              </span>
              <span>
                {"-$17.75 USD"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1">
                {" Envío Express Prioritario "}
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  {"bolt"}
                </span>
              </span>
              <span className="text-on-surface font-semibold">
                {"$4.99 USD"}
              </span>
            </div>
            <div className="flex justify-between items-center text-body-sm text-secondary font-semibold pt-1">
              <span>
                {"Impuestos locales calculados"}
              </span>
              <span>
                {"Incluidos"}
              </span>
            </div>
            <div className="pt-space-sm mt-space-xs flex justify-between items-baseline">
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-on-surface font-extrabold uppercase tracking-wide">
                  {"Total a Pagar"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {"IVA incluido y envío protegido"}
                </span>
              </div>
              <div className="text-right">
                <span className="font-display-hero text-[34px] leading-tight text-primary font-extrabold tracking-tight">
                  {"$105.54"}
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant font-bold ml-1">
                  {"USD"}
                </span>
              </div>
            </div>
          </div>
          <button className="w-full bg-primary hover:bg-primary-container text-on-primary py-space-md px-space-lg rounded-full font-label-lg text-label-lg font-bold uppercase tracking-wider flex items-center justify-center gap-space-xs shadow-lg shadow-primary/30 transition-all hover:scale-[1.01] active:scale-[0.98]" type="button">
            <span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>
              {"lock"}
            </span>
            <span>
              {"Pagar $105.54 USD y Confirmar Pedido"}
            </span>
          </button>
          <div className="pt-space-xs flex flex-col gap-space-sm text-center">
            <div className="grid grid-cols-3 gap-2 py-space-xs text-on-surface-variant font-label-badge text-label-badge">
              <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[22px]">
                  {"published_with_changes"}
                </span>
                <span>
                  {"Cambios Fáciles"}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[22px]">
                  {"verified"}
                </span>
                <span>
                  {"Garantía 30 Días"}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[22px]">
                  {"lock_clock"}
                </span>
                <span>
                  {"Cifrado Bancario"}
                </span>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between">
              <div className="flex items-center gap-space-xs text-left">
                <div className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">
                    {"support_agent"}
                  </span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-bold">
                    {"¿Dudas con tu pago?"}
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant">
                    {"Asistente en vivo por WhatsApp"}
                  </p>
                </div>
              </div>
              <a className="bg-secondary text-on-secondary px-space-sm py-1 rounded-full font-label-badge text-label-badge font-bold uppercase flex items-center gap-1 hover:opacity-90" href="https://wa.me/" target="_blank">
                <span>
                  {"Gaby Chat"}
                </span>
                <span className="material-symbols-outlined text-[12px]">
                  {"open_in_new"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
