import { HomeMobileHeader } from './components/HomeMobileHeader'
import { MobileGreeting } from './components/MobileGreeting'
import { MobileSearch } from './components/MobileSearch'
import { MobileShippingBanner } from './components/MobileShippingBanner'
import { MobileCollections } from './components/MobileCollections'
import { MobileHero } from './components/MobileHero'
import { MobileFlashSale } from './components/MobileFlashSale'
import { MobileRewards } from './components/MobileRewards'
import { MobileTrendingProducts } from './components/MobileTrendingProducts'
import { MobileCommunity } from './components/MobileCommunity'
import { MobileCatalogLink } from './components/MobileCatalogLink'
import { HomeMobileNav2 } from './components/HomeMobileNav2'

export function HomeMobileView() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased">
    <HomeMobileHeader />
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
    <div className="flex flex-col w-full">
      <MobileGreeting />
      <MobileSearch />
      <MobileShippingBanner />
      <MobileCollections />
      <MobileHero />
      <MobileFlashSale />
      <MobileRewards />
      <MobileTrendingProducts />
      <MobileCommunity />
      <MobileCatalogLink />
    </div>
    </main>
    <HomeMobileNav2 />
    </div>
  )
}
