import { useTheme } from 'styled-components'
import { TitleText } from '../../../components/Typography'
import { UploadForm } from './UploadForm'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complète ton téléchargement
      </TitleText>
      <FormSectionContainer>
        <UploadForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
