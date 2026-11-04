import { ProductHeader } from './components/ProductHeader'
import { ProductBreadcrumb } from './components/ProductBreadcrumb'
import { ProductOverview } from './components/ProductOverview'
import { CompleteLook } from './components/CompleteLook'
import { ProductInformation } from './components/ProductInformation'
import { ProductReviews } from './components/ProductReviews'
import { ProductMobileBar } from './components/ProductMobileBar'
import { ProductVideoDialog } from './components/ProductVideoDialog'
import { SizeGuideDialog } from './components/SizeGuideDialog'
import { ProductFooter } from './components/ProductFooter'

export function ProductView() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
    <ProductHeader />
    <main className="w-full pt-28 bg-surface">
    <div className="flex flex-col w-full">
      <ProductBreadcrumb />
      <ProductOverview />
      <CompleteLook />
      <ProductInformation />
      <ProductReviews />
      <ProductMobileBar />
      <ProductVideoDialog />
      <SizeGuideDialog />
    </div>
    </main>
    <ProductFooter />
    </div>
  )
}
