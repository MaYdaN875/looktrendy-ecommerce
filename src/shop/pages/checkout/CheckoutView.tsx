import { StoreHeader } from '../../../components/StoreHeader'
import { CheckoutStepper } from './components/CheckoutStepper'
import { CheckoutContent } from './components/CheckoutContent'
import { StoreFooter } from '../../../components/StoreFooter'

export function CheckoutView() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
    <StoreHeader />
    <main className="w-full pt-[132px] bg-surface min-h-[calc(100vh-132px)]">
    <div className="flex flex-col w-full">
    <div className="max-w-[1280px] mx-auto w-full px-margin md:px-margin-desktop py-space-lg">
      <CheckoutStepper />
      <CheckoutContent />
    </div>
    </div>
    </main>
    <StoreFooter />
    </div>
  )
}
