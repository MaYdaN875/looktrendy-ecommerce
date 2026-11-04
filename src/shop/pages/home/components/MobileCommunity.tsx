import { Link } from 'react-router'

export function MobileCommunity() {
  return (
    <section className="py-space-sm px-margin">
      <div className="p-margin rounded-xl bg-surface-container-low flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">
              {"play_circle"}
            </span>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              {"Comunidad #LookTrendy"}
            </h4>
          </div>
          <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">
            {"Etiquétanos"}
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {"Sube tu outfit a Instagram o TikTok con "}
          <strong>
            {"@looktrendygaby"}
          </strong>
          {" y gana $20 USD para tu próxima compra."}
        </p>
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="relative h-28 rounded-lg overflow-hidden group">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="User generated selfie video still of young woman posing with Look Trendy Gaby outfit in aesthetic bedroom mirror with fairy lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbuAUVo44VL7CHoLYnyPr1TLqybbOZJ0IRVq3ElmwVipp20MW_MZOGZhf3CL1x73e7Nnt0jFRpDA8ZlEMWNkCxzzXa2vXTwF4aW391E-Aiz8-l3rsL4xmgsf7koIPWkf_HHoHLQ03_M3cdJ4h0BgwIT3gA04Ztnq2scdwuEYJg5YCuaayqk5pdb9k2PheBKtvtUv5QFKIBO2lbbGnRpOyyR0R_3CnsEje8CZX5gSjj" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 to-transparent flex items-end p-1.5">
              <span className="font-label-badge text-label-badge text-on-primary truncate">
                {"@vale_y2k"}
              </span>
            </div>
          </div>
          <div className="relative h-28 rounded-lg overflow-hidden group">
            <Link to="/producto/cardigan-floral-pop" aria-label="Ver Cardigan Floral Pop">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Trendy mirror selfie of happy woman wearing pink daisy flower cardigan smiling with phone case, casual modern girl aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqeHh4_PvUT9p1LXhTz5bTiDl_LC8E-yM9L7-8im18FMCs12k5wtI-P3mEXrPrffAxqc_qYBQjKuoMYMwSYvinjeGYSKUTe4u432zKl5eno3-dcX-KY472uXV1jLaqj6Eg6wMPO5j3TxQfeB_wOTIntRrHl1Eq5gzLGPDjt_5_zQa_ukp3HIO19_TNRfFiWhRcX3WeGwqVvhfCKWbcZA7Sfdm71M9wbVu75x2M0yIv" alt="" />
            </Link>
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 to-transparent flex items-end p-1.5">
              <span className="font-label-badge text-label-badge text-on-primary truncate">
                {"@sofia.fit"}
              </span>
            </div>
          </div>
          <div className="relative h-28 rounded-lg overflow-hidden group">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Aesthetic street style video snapshot of stylish customer wearing pastel mini skirt walking outside trendy cafe with iced matcha" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy0p3dk7Dkhv8uvjqXfgbwMRPCImzhetCQzx4nzq_ml25wNCpkFwH8Ko2fkJ-yWrDpyzux3SZdbVOE_zvtHasVux-C7H2we6f0gFTq7LV5iCQU9cwQOjcV04_Ye_XUDOm1grnlQkYHsjJQVjEihY5yriwNlWWn1cViWz3CKU0ZDvxHvQulXi9oahJ7Y5OYqaT6cTeHajADZmlX-PJHuPP9LjUnULQD-nLB9Eff3Oqh" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 to-transparent flex items-end p-1.5">
              <span className="font-label-badge text-label-badge text-on-primary truncate">
                {"@caro_trend"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
