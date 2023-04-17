import {
  HeroContainer,
  HeroContent,
  HeroTitle,
} from './styles'

import welcomeCat from '../../../../assets/welcome_cat.jpg'
import { RegularText } from '../../../../components/Typography'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Bonjour et bienvenue sur notre site de téléchargement de memes
            </HeroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Ici c'est gratuit et c'est un projet étudiant en react ;)
            </RegularText>
          </section>
        </div>

        <div className="imageContainer">
          <img src={welcomeCat} alt="" />
        </div>
      </HeroContent>
    </HeroContainer>
  )
}
