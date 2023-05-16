import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'

import confirmedOrderIllustration from '../../assets/chemistry_cat.jpg'
import { InfoWithIcon } from '../../components/InfoWithIcon/index'

import { MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CompleteOrder'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  const { state } = useLocation() as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Téléchargez vos memes</TitleText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconColor={colors['brand-purple']}
            text={
              <RegularText>
                enregistrez vous
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.region} - {state.city}, {state.CP}
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
