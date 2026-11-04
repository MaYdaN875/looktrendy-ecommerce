import { StoreHeader } from '../../../components/StoreHeader'
import { CatalogBreadcrumb } from './components/CatalogBreadcrumb'
import { CatalogContent } from './components/CatalogContent'
import { StoreFooter } from '../../../components/StoreFooter'

export function CatalogView() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
    <StoreHeader />
    <main className="w-full pt-[132px] bg-surface min-h-[calc(100vh-132px)]">
    <div className="flex flex-col w-full">
      <CatalogBreadcrumb />
      <CatalogContent />
    </div>
    </main>
    <StoreFooter />
    </div>
  )
}
