import { useTheme } from 'styled-components'
import { TitleText } from '../../../components/Typography'
import { UploadForm, UploaddForm } from './UploadForm'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete ton téléchargement
      </TitleText>
      <FormSectionContainer>
        <UploaddForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
