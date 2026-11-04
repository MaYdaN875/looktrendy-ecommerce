import { HomeView } from './HomeView'
import { HomeMobileView } from './HomeMobileView'

export function HomePage() {
  return <><div className="hidden md:block"><HomeView /></div><div className="md:hidden"><HomeMobileView /></div></>
}
