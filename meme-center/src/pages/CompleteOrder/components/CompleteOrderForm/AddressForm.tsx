import { AddressFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <div className="row">
        <Input
          placeholder="Rue"
          className="rue"
          {...register('street')}
          error={errors.street?.message}
        />
      </div>
      <div className="row">
        <Input
          type="number"
          placeholder="Numero de rue"
          {...register('number')}
          error={errors.number?.message}
        />
        <Input
          placeholder="Complément d'adresse"
          className="complement"
          {...register('complement')}
          error={errors.complement?.message}
          rightText="optionnel"
        />
      </div>
      <div className="row">
        <Input
          placeholder="Région"
          {...register('region')}
          error={errors.district?.message}
        />
        <Input
          placeholder="Ville"
          className="city"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          placeholder="Code Postal"
          className="cp"
          {...register('cp')}
          error={errors.cp?.message}
        />
      </div>
    </AddressFormContainer>
  )
}
