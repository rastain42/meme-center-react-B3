/* eslint-disable no-unused-vars */
import { CompleteOrderForm } from './UploadForm'
import { CompleteOrderContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const UploadSchema = zod.object({
  name: zod.string().min(1, 'Nom du meme'),
  categories: zod.string().min(1, 'Categories'),
  image: zod
    .custom<File>((v) => v instanceof File, {
      message: 'Image is required',
    })
})

export type UploadData = zod.infer<typeof UploadSchema>

export function UploadPage() {

  const confirmOrderForm = useForm<UploadData>({
    resolver: zodResolver(UploadSchema),
  })

  const { handleSubmit } = confirmOrderForm

  function handleUpload(data: UploadData) {

    const headers = {
      // 'Authorization': `Bearer ${token}`,
      'Authorization': `Bearer`,

    };
    axios.post('http://localhost:3001/api/upload', data, { headers })
    // .then(response => this.setState({ articleId: response.data.id }));

    // function handleUpload(data: ConfirmOrderFormData) {
    //   navigate('/uploadConfirmed', {
    //     state: data,
    //   })  
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
