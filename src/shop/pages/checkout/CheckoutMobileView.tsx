import { CheckoutMobileHeader } from './components/CheckoutMobileHeader'
import { MobileCheckoutStepper } from './components/MobileCheckoutStepper'
import { MobileCheckoutContent } from './components/MobileCheckoutContent'
import { MobilePaymentBar } from './components/MobilePaymentBar'

export function CheckoutMobileView() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen">
    <CheckoutMobileHeader />
    <main className="flex flex-col relative w-full pt-16 bg-surface">
    <div className="flex flex-col w-full">
      <MobileCheckoutStepper />
      <MobileCheckoutContent />
      <MobilePaymentBar />
    </div>
    </main>
    </div>
  )
}
