import { MemeCard } from '../MemeCard/index'
import { TitleText } from '../Typography'
import { MemeList, OurMemesContainer } from './styles'

import { memes } from '../../mock/meme'

export function OurMemes() {
  return (
    <OurMemesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nos Memes de qualité
      </TitleText>

      <MemeList>
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </MemeList>
    </OurMemesContainer>
  )
}
