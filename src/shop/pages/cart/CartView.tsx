import { StoreHeader } from '../../../components/StoreHeader'
import { CartHeading } from './components/CartHeading'
import { FreeShippingProgress } from './components/FreeShippingProgress'
import { CartContent } from './components/CartContent'
import { CartGuarantees } from './components/CartGuarantees'
import { StoreFooter } from '../../../components/StoreFooter'

export function CartView() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
    <StoreHeader />
    <main className="w-full pt-[132px] bg-surface min-h-[calc(100vh-132px)]">
    <div className="flex flex-col w-full">
    <div className="max-w-[1280px] w-full mx-auto px-margin md:px-margin-desktop py-space-md md:py-space-lg flex flex-col gap-space-lg">
      <CartHeading />
      <FreeShippingProgress />
      <CartContent />
      <CartGuarantees />
    </div>
    </div>
    </main>
    <StoreFooter />
    </div>
  )
}
