import { UploadFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../../../components/Input'
import { RegisterData, RegisterSchema } from '../..'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}



export const RegisterForm = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });


  const onSubmitHandler = async (data: RegisterData) => {
    console.log(data);
    axios.post('localhost:3001/api/users/auth/register', data)
      .then(response => navigate('/profil', {
        state: response,
      }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <UploadFormContainer>

        <div className="row">
          <Input
            placeholder="Username"
            className="Username"
            {...register('username')}
          />
        </div>
        <div className="row">
          <Input
            placeholder="Email"
            className="Email"
            {...register('email')}
          />
        </div>

        <div className="row">
          <input {...register('password')} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="row">
          <button type="submit" disabled={!isDirty || isSubmitting}>
            {isSubmitting ? 'Inscription...' : 'Inscription'}
          </button>
        </div>
      </UploadFormContainer>
    </form>
  );
};