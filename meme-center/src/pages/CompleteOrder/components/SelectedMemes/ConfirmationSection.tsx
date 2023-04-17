import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSection() {
  const { cartQuantity } = useCart()

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">{cartQuantity} Memes</RegularText>
      </div>
      <Button
        text="Confirmer le téléchargement"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
