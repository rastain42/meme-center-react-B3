/* eslint-disable no-unused-vars */
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedMemes } from './components/SelectedMemes'
import { CompleteOrderContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  street: zod.string().min(1, 'Votre rue'),
  number: zod.string().min(1, 'Votre numero de rue'),
  complement: zod.string(),
  region: zod.string().min(1, 'Votre région'),
  city: zod.string().min(1, 'Votre ville'),
  CP: zod.string().min(1, 'Votre code postal'),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/orderConfirmed', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedMemes />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
