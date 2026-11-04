import { Link } from 'react-router'

export function MobileCheckoutContent() {
  return (
    <div className="px-margin py-space-md flex flex-col gap-space-md pb-36">
      <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-6 right-6 top-3 h-1 bg-surface-container-high -z-0">

          </div>
          <div className="absolute left-6 w-1/2 top-3 h-1 bg-primary -z-0">

          </div>
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[16px]">
                {"check"}
              </span>
            </div>
            <span className="font-label-badge text-label-badge text-on-surface">
              {"1. Envío"}
            </span>
            <span className="font-label-badge text-[10px] text-secondary bg-secondary-fixed/50 px-1.5 py-0.5 rounded-full">
              {"Listo"}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md animate-pulse">
              <span className="material-symbols-outlined text-[16px]">
                {"credit_card"}
              </span>
            </div>
            <span className="font-label-lg text-label-lg text-primary font-bold">
              {"2. Pago"}
            </span>
            <span className="font-label-badge text-[10px] text-on-primary bg-primary px-1.5 py-0.5 rounded-full shadow-sm">
              {"En curso"}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">
                {"check_circle"}
              </span>
            </div>
            <span className="font-label-badge text-label-badge text-on-surface-variant">
              {"3. Final"}
            </span>
            <span className="font-label-badge text-[10px] text-on-surface-variant/70">
              {"Espera"}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
        <button aria-expanded="false" className="w-full p-space-md flex items-center justify-between text-left active:bg-surface-container-low transition-colors" id="toggle-order-summary" type="button">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">
                {"shopping_bag"}
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-label-lg text-label-lg text-on-surface font-bold">
                  {"Tu Pedido"}
                </span>
                <span className="bg-primary-fixed text-primary px-2 py-0.5 rounded-full font-label-badge text-[10px]">
                  {"3 prendas"}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                {"Ver detalle y código TRENDY15"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-xs shrink-0">
            <span className="font-label-lg text-label-lg text-primary font-extrabold">
              {"$105.54 USD"}
            </span>
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant transition-transform duration-200" id="summary-chevron">
              {"expand_more"}
            </span>
          </div>
        </button>
        <div className="hidden px-space-md pb-space-md flex flex-col gap-space-sm" id="order-summary-content">
          <div className="h-px w-full bg-surface-container">

          </div>
          <div className="flex items-center gap-space-sm py-1">
            <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
            <img className="w-14 h-14 rounded-xl object-cover shrink-0 bg-surface-container" data-alt="Chic cropped fuzzy pink cardigan with floral embroidery worn by a stylish young woman, pop Y2K vibrant fashion aesthetic, high-key bright soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMERGo3POets_jaWyztR5Xs8jWPwWJzKD3u33ne1_XPOiBkU8BulbisSu5UuxDZg1BwhTSouXox3cvZEhouCgZVFUGT9sEjWK_zm_GGuz9fyiPQ4CRWSrS-VSoQQmTQt_nkW3QjRqVms95mBCZkj7tYt9wgz_wXizuuiibG1odVsv6XnVqvx2_GdFCvXPaQU0-BrEBFOs--XG0o3WSrYv8gRVvWkVj_G_lW1US1Pya" alt="" />
            </Link>
            <div className="flex-1 min-w-0">
              <h4 className="font-label-lg text-label-lg text-on-surface truncate">
                {"Cardigan Fluffy Pop Petals"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"Talla M • Rosa Pastel"}
              </p>
            </div>
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              {"$49.90"}
            </span>
          </div>
          <div className="flex items-center gap-space-sm py-1">
            <img className="w-14 h-14 rounded-xl object-cover shrink-0 bg-surface-container" data-alt="Electric cyan sporty activewear two-piece set, trendy athleisure chic vibe, soft pastel gradient backdrop, sleek youth fashion model, sharp editorial look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaU4vEhZXDBB5xwanBar7Zpi-IoK87R7OPhf8Fr0lF78FZH1GXcVF-Uroe8WXe_2khOyEbxUM2qU6ABvp4KkLB4sD_w390JHV5HNzSXJgit_5BDoD5FKB3ui9nx2bRwTCXg8qrtS7fJi_jkIi4Nz1nkPPkP64LlpBEIm5_Tt9EkfzHfMpIFSAeLDfXCUu3TNZZKk0CBFmkkrlmAlY_ImbFwhkvHUZ27jaiN_ll8GqG" alt="" />
            <div className="flex-1 min-w-0">
              <h4 className="font-label-lg text-label-lg text-on-surface truncate">
                {"Set Seamless Active Glow"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"Talla S • Cyan Glow"}
              </p>
            </div>
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              {"$38.50"}
            </span>
          </div>
          <div className="flex items-center gap-space-sm py-1">
            <img className="w-14 h-14 rounded-xl object-cover shrink-0 bg-surface-container" data-alt="Y2K pastel tennis pleated mini skirt in lilac and baby pink tones, trendy girl accessories, high resolution studio commercial shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2LeFnm9tQcks_JZAqE-ItnMGH6F65xcpZSvlKWw3s2AzN5-dFFg_GxYqyT8_jcSkGs29cYAnykIJOHeLviXXLhyUH_qvRZs6vxmFzsnMEpmrwtlApVumBHdYBrD9vMQPYoU5b4-jutmECki8smdH2ImiTqjxnDKKP-yEqvoNDziuZiw5NlKXX5SO_865DBKA2r-kezfnN8mV-ANvC3HYdsoxi6lIEnHxqPRWRW9IC" alt="" />
            <div className="flex-1 min-w-0">
              <h4 className="font-label-lg text-label-lg text-on-surface truncate">
                {"Falda Plisada Y2K Pastel"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"Talla M • Lila Soft"}
              </p>
            </div>
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">
              {"$29.90"}
            </span>
          </div>
          <div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col gap-1.5 mt-1">
            <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span>
                {"Subtotal (3 artículos)"}
              </span>
              <span>
                {"$118.30 USD"}
              </span>
            </div>
            <div className="flex justify-between items-center font-body-sm text-body-sm">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  {"sell"}
                </span>
                <span className="text-primary font-semibold">
                  {"Cupón TRENDY15 (-15%)"}
                </span>
              </div>
              <span className="text-primary font-bold">
                {"-$17.75 USD"}
              </span>
            </div>
            <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  {"bolt"}
                </span>
                {" Envío Express Prioritario "}
              </span>
              <span className="font-semibold text-secondary">
                {"$4.99 USD"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-secondary">
              {"local_shipping"}
            </span>
            <span className="font-label-lg text-label-lg text-on-surface font-bold">
              {"Dirección de Entrega"}
            </span>
          </div>
          <button className="px-2.5 py-1 rounded-full bg-surface-container font-label-md text-label-md text-primary font-bold active:scale-95 transition-transform" type="button">
            {" Cambiar "}
          </button>
        </div>
        <div className="bg-surface-container-low p-space-sm rounded-xl flex items-start gap-space-sm">
          <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-container shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[18px]">
              {"home_pin"}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
              {"Camila Valenzuela"}
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
              {"Av. Las Condes 450, Depto 802"}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="bg-secondary-fixed text-on-secondary-fixed font-label-badge text-[10px] px-2 py-0.5 rounded-full font-bold">
                {" ⚡ Express (24-48 hrs) "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary text-[22px]">
              {"payments"}
            </span>
            {" Método de Pago "}
          </h3>
          <span className="font-label-badge text-[11px] text-secondary font-bold uppercase tracking-wider">
            {"Paso 2 de 2"}
          </span>
        </div>
        <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-inverse-surface text-inverse-on-surface flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px]">
                  {"touch_app"}
                </span>
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface font-bold">
                  {"Pago Rápido en 1-Tap"}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Con Face ID o huella dactilar"}
                </p>
              </div>
            </div>
            <span className="font-label-badge text-[10px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full uppercase font-extrabold">
              {"Instantáneo"}
            </span>
          </div>
          <button className="w-full py-3 px-4 rounded-xl bg-inverse-surface text-inverse-on-surface flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-md" type="button">
            <span className="material-symbols-outlined text-[20px]">
              {"fingerprint"}
            </span>
            <span className="font-label-lg text-label-lg font-bold">
              {"Pagar con Apple Pay / G Pay"}
            </span>
          </button>
        </div>
        <div className="flex items-center gap-2 py-1">
          <div className="h-px bg-surface-container-highest flex-1">

          </div>
          <span className="font-label-badge text-on-surface-variant text-[11px] uppercase">
            {"O elige tu medio preferido"}
          </span>
          <div className="h-px bg-surface-container-highest flex-1">

          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl shadow-md p-space-md flex flex-col gap-space-md relative overflow-hidden">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-space-sm cursor-pointer select-none">
              <input defaultChecked className="w-5 h-5 text-primary accent-primary cursor-pointer" name="payment-method" type="radio" defaultValue="card" />
              <span className="font-label-lg text-label-lg text-on-surface font-bold">
                {"Tarjeta de Crédito / Débito"}
              </span>
            </label>
            <span className="font-label-badge text-[10px] bg-primary text-on-primary px-2 py-0.5 rounded-full uppercase font-bold shadow-sm">
              {" Recomendado "}
            </span>
          </div>
          <div className="flex items-center justify-between bg-surface-container-low px-space-sm py-1.5 rounded-xl">
            <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
              {"Aceptamos:"}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-badge text-[10px] font-extrabold text-secondary">
                {"VISA"}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-badge text-[10px] font-extrabold text-primary">
                {"MC"}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-badge text-[10px] font-extrabold text-tertiary">
                {"AMEX"}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <div>
              <label className="font-label-md text-label-md text-on-surface-variant block mb-1">
                {"Número de Tarjeta"}
              </label>
              <div className="relative flex items-center">
                <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-3.5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary placeholder-on-surface-variant/50 transition-all font-mono" id="card-number-input" maxLength={19} placeholder="4532 •••• •••• 8920" type="text" />
                <span className="material-symbols-outlined text-[20px] text-primary absolute right-3 pointer-events-none">
                  {"credit_card"}
                </span>
              </div>
            </div>
            <div>
              <label className="font-label-md text-label-md text-on-surface-variant block mb-1">
                {"Nombre del Titular"}
              </label>
              <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-3.5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary placeholder-on-surface-variant/50 uppercase transition-all" placeholder="Como figura en el plástico" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-space-sm">
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant block mb-1">
                  {"Vencimiento"}
                </label>
                <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-3.5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary placeholder-on-surface-variant/50 font-mono text-center transition-all" maxLength={5} placeholder="MM/AA" type="text" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-label-md text-label-md text-on-surface-variant">
                    {"CVV / CVC"}
                  </label>
                  <button className="font-label-badge text-[10px] text-primary bg-primary-fixed w-4 h-4 rounded-full flex items-center justify-center font-bold" type="button">
                    {"?"}
                  </button>
                </div>
                <div className="relative flex items-center">
                  <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-3.5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary placeholder-on-surface-variant/50 font-mono text-center tracking-widest transition-all" maxLength={4} placeholder="•••" type="password" />
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant absolute right-3 pointer-events-none">
                    {"lock"}
                  </span>
                </div>
              </div>
            </div>
            <label className="flex items-center justify-between mt-1 cursor-pointer select-none bg-surface-container-low p-space-sm rounded-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  {"security"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  {"Recordar tarjeta de forma segura"}
                </span>
              </div>
              <input defaultChecked className="w-5 h-5 rounded-md text-primary accent-primary cursor-pointer" type="checkbox" />
            </label>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-center justify-between">
          <label className="flex items-center gap-space-sm cursor-pointer select-none flex-1">
            <input className="w-5 h-5 text-primary accent-primary cursor-pointer" name="payment-method" type="radio" defaultValue="mp" />
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface font-bold">
                {"Mercado Pago"}
              </span>
              <span className="font-body-sm text-[11px] text-secondary font-bold">
                {"Hasta 6 cuotas sin interés ✨"}
              </span>
            </div>
          </label>
          <span className="material-symbols-outlined text-[24px] text-secondary">
            {"account_balance_wallet"}
          </span>
        </div>
        <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-center justify-between">
          <label className="flex items-center gap-space-sm cursor-pointer select-none flex-1">
            <input className="w-5 h-5 text-primary accent-primary cursor-pointer" name="payment-method" type="radio" defaultValue="paypal" />
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface font-bold">
                {"PayPal Express"}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {"Protección al comprador internacional"}
              </span>
            </div>
          </label>
          <span className="material-symbols-outlined text-[24px] text-on-surface-variant">
            {"public"}
          </span>
        </div>
        <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex items-center justify-between">
          <label className="flex items-center gap-space-sm cursor-pointer select-none flex-1">
            <input className="w-5 h-5 text-primary accent-primary cursor-pointer" name="payment-method" type="radio" defaultValue="transfer" />
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-surface font-bold">
                {"Transferencia Bancaria"}
              </span>
              <span className="font-body-sm text-[11px] text-tertiary font-bold">
                {"+5% Descuento extra al verificar"}
              </span>
            </div>
          </label>
          <span className="material-symbols-outlined text-[24px] text-on-surface-variant">
            {"account_balance"}
          </span>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
        <h4 className="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[18px] text-primary">
            {"receipt_long"}
          </span>
          {" Dirección de Facturación "}
        </h4>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-space-sm cursor-pointer p-2 rounded-xl bg-surface-container-low">
            <input defaultChecked className="w-4 h-4 text-primary accent-primary cursor-pointer" name="billing-address" type="radio" />
            <span className="font-body-md text-body-md text-on-surface font-medium">
              {"Misma que la dirección de envío"}
            </span>
          </label>
          <label className="flex items-center gap-space-sm cursor-pointer p-2 rounded-xl hover:bg-surface-container-low transition-colors">
            <input className="w-4 h-4 text-primary accent-primary cursor-pointer" name="billing-address" type="radio" />
            <span className="font-body-md text-body-md text-on-surface-variant">
              {"Usar otra dirección de facturación"}
            </span>
          </label>
        </div>
      </div>
      <div className="bg-gradient-to-r from-primary-fixed to-secondary-fixed/40 p-space-md rounded-2xl flex items-center gap-space-sm shadow-sm">
        <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
          <span className="material-symbols-outlined text-[22px]">
            {"favorite"}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-label-lg text-label-lg text-on-primary-fixed font-bold">
            {"¡Estás sumando 105 Trendy Points!"}
          </p>
          <p className="font-body-sm text-[11px] text-on-surface-variant">
            {"Canjeables por accesorios exclusivos en tu próxima orden."}
          </p>
        </div>
      </div>
    </div>
  )
}
