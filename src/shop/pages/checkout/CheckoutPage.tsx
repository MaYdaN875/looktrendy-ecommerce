import { CheckoutView } from './CheckoutView'
import { CheckoutMobileView } from './CheckoutMobileView'

export function CheckoutPage() {
  return <><div className="hidden md:block"><CheckoutView /></div><div className="md:hidden"><CheckoutMobileView /></div></>
}
