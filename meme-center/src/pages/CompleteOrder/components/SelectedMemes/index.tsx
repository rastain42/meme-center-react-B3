import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { MemeCartCard } from '../MemeCartCard/index'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedMemesContainer } from './styles'

export function SelectedMemes() {
  const { cartItems } = useCart()

  return (
    <SelectedMemesContainer>
      <TitleText size="xs" color="subtitle">
        Memes dans votre panier
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <MemeCartCard key={item.id} meme={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedMemesContainer>
  )
}
