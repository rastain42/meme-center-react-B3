import { createContext, ReactNode, useEffect, useState } from 'react'
import { Meme } from '../components/MemeCard/index'
import { produce } from 'immer'


interface CartContextType {
  cartItems: Meme[]
  cartQuantity: number
  addMemeToCart: (meme: Meme) => void
  removeCartItem: (cartItemId: number) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const MEME_ITEMS_STORAGE_KEY = 'MemeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<Meme[]>(() => {
    const storedCartItems = localStorage.getItem(MEME_ITEMS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }

    return []
  })

  const cartQuantity = cartItems.length

  function addMemeToCart(meme: Meme) {
    const memeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === meme.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (memeAlreadyExistsInCart < 0) {
        draft.push(meme)
      } 
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const memeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (memeExistsInCart >= 0) {
        draft.splice(memeExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(MEME_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addMemeToCart,
        cartQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
