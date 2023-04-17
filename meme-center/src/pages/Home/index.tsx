import { OurMemes } from '../../components/OurMemes/index'
import { Hero } from './components/Hero'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />

      <OurMemes />
    </HomeContainer>
  )
}
