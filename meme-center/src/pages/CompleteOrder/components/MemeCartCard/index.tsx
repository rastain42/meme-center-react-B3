import { Trash } from 'phosphor-react'
import { RegularText } from '../../../../components/Typography'
import { Meme } from '../../../../components/MemeCard'
import { useCart } from '../../../../hooks/useCart'
import {
  ActionsContainer,
  MemeCartCardContainer,
  RemoveButton,
} from './styles'

interface MemeCardCardProps {
  meme: Meme
}

export function MemeCartCard({ meme }: MemeCardCardProps) {
  const {  removeCartItem } = useCart()

  function handleRemove() {
    removeCartItem(meme.id)
  }

  return (
    <MemeCartCardContainer>
      <div>
        <img src={`/memes/${meme.photo}`} alt="Meme" />
        <div>
          <RegularText color="subtitle">{meme.name}</RegularText>
          <ActionsContainer>
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Enlever
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
    </MemeCartCardContainer>
  )
}
