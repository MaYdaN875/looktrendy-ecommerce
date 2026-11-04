import { StoreHeader } from '../../../components/StoreHeader'
import { PromotionalTicker } from './components/PromotionalTicker'
import { HeroSection } from './components/HeroSection'
import { TrustBadges } from './components/TrustBadges'
import { CollectionsSection } from './components/CollectionsSection'
import { FlashSaleSection } from './components/FlashSaleSection'
import { FeaturedProductsSection } from './components/FeaturedProductsSection'
import { CommunitySection } from './components/CommunitySection'
import { WelcomeCoupon } from './components/WelcomeCoupon'
import { HomeOverlay } from './components/HomeOverlay'
import { StoreFooter } from '../../../components/StoreFooter'

export function HomeView() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
    <StoreHeader />
    <main className="w-full pt-[132px] bg-surface min-h-[calc(100vh-132px)]">
    <div className="flex flex-col w-full">
      <PromotionalTicker />
      <HeroSection />
      <TrustBadges />
      <CollectionsSection />
      <FlashSaleSection />
      <FeaturedProductsSection />
      <CommunitySection />
      <WelcomeCoupon />
      <HomeOverlay />
    </div>
    </main>
    <StoreFooter />
    </div>
  )
}
