import { TitleText } from '../../../../components/Typography'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'
import { UploadForm } from './MemeForm'

export function UploadSection() {
  return (
    <CompleteOrderFormContainer>
      <FormSectionContainer>
        <TitleText size="xs" color="subtitle">
          Décris ton même
        </TitleText>
        <UploadForm />

      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}

