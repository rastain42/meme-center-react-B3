import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete ton téléchargement
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Entre quelques informations"
          subtitle=""
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />

        <AddressForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
