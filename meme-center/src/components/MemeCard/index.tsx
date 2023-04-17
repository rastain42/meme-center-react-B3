import {
  MemeCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  FooterText
} from './styles'
import { DownloadSimple, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'

export interface Meme {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
}

interface MemeProps {
  meme: Meme
}

export function MemeCard({ meme }: MemeProps) {
  const { addMemeToCart } = useCart()

  function handleAddToCart() {
    const memeToAdd = {
      ...meme,
    }

    addMemeToCart(memeToAdd)
  }


  return (
    <MemeCardContainer>
      <img src={`/memes/${meme.photo}`} alt="" />

      <Tags>
        {meme.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Name>{meme.name}</Name>
      <Description>{meme.description}</Description>
      <CardFooter>
        <button onClick={handleAddToCart}>
            <DownloadSimple weight="fill" size={22} />
          </button>
        <button onClick={handleAddToCart}>
          <ShoppingCart weight="fill" size={22} />
        </button>
        
      </CardFooter>
      <FooterText>Télécharge le ou ajoute le dans ton panier</FooterText>
    </MemeCardContainer>
  )
}
