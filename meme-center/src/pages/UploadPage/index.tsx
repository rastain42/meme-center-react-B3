/* eslint-disable no-unused-vars */
import { CompleteOrderForm } from './UploadForm'
import { CompleteOrderContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export const UploadSchema = zod.object({
  name: zod.string().min(1, 'Nom du meme'),
  categories: zod.string().min(1, 'Categories'),
  image: zod
    .custom<File>((v) => v instanceof File, {
      message: 'Image is required',
    })
})

export type UploadData = zod.infer<typeof UploadSchema>

type ConfirmOrderFormData = UploadData

export function UploadPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(UploadSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleUpload(data: ConfirmOrderFormData) {
    navigate('/orderConfirmed', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleUpload)}
      >
        <CompleteOrderForm />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
