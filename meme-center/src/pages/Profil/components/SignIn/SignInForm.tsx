import { UploadFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../../../components/Input'
import { RegisterData, SignInData, SignInSchema } from '../..'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}



export const SignInForm = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<RegisterData>({
    resolver: zodResolver(SignInSchema),
  });


  const onSubmitHandler = async (data: SignInData) => {
    console.log(data);

    const headers = {
      // 'Authorization': 'Bearer my-token',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
    // await axios.post('http://localhost:3001/api/users/auth/sign_in', {
    //   'email': data.email,
    //   'password': data.password,
    // }, { headers })
    //   .catch(error => {
    //     // this.setState({ errorMessage: error.message });
    //     console.error('There was an error!', error);
    //   })
    //   .then(response => navigate('/profil', {
    //     state: response,
    //   }));

    const response = await fetch('http://localhost:3001/api/users/auth/sign_in', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors'
    });
    const result = await response.json();
    console.log(result);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <UploadFormContainer>
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
            {isSubmitting ? 'Connexion...' : 'Connexion'}
          </button>
        </div>
      </UploadFormContainer>
    </form>
  );
};