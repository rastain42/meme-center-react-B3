import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

import { ShoppingCart, UploadSimple, User } from 'phosphor-react'

import coffeLogoImage from '../../assets/logo.jpg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeLogoImage} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={40} weight="fill" />
            </HeaderButton>
          </NavLink>
          <NavLink to="/upload">
            <HeaderButton variant="purple">
              <UploadSimple size={40} weight="fill" />
            </HeaderButton>
          </NavLink>
          <NavLink to="/profil">
            <HeaderButton variant="yellow">
              <User size={40} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
