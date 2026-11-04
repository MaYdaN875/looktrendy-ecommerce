import { Link } from 'react-router'
import { StoreHeader } from '../../../components/StoreHeader'
import { StoreFooter } from '../../../components/StoreFooter'

export function NotFoundPage() {
  return <><StoreHeader /><main className="min-h-[70vh] px-6 pt-48 pb-20 text-center"><p className="text-primary font-bold">404</p><h1 className="text-headline-lg my-5">Este look se nos escapó</h1><Link className="text-secondary underline" to="/catalogo">Volver al catálogo</Link></main><StoreFooter /></>
}
