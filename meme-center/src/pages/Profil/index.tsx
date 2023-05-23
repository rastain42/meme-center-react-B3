import { InfosComponent } from './components/Infos'
import { Container, FormsContainer, ProfilContainer, Title } from './styles'
import * as zod from 'zod'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SignInForm } from './components/SignIn/SignInForm'
import { RegisterForm } from './components/Register/RegisterForm'

export const RegisterSchema = zod.object({
  username: zod.string().min(1, 'username'),
  email: zod.string().min(1, 'email'),
  password: zod.string().min(1, 'password'),
})
export const SignInSchema = zod.object({
  email: zod.string().min(1, 'email'),
  password: zod.string().min(1, 'password'),
})


export type RegisterData = zod.infer<typeof RegisterSchema>
export type SignInData = zod.infer<typeof SignInSchema>

export function ProfilPage() {

  const navigate = useNavigate()

  // const RegisterFormHook = useForm<RegisterData>({
  //   resolver: zodResolver(RegisterSchema),
  // })

  // const { handleSubmit } = RegisterFormHook

  function handleRegister(data: RegisterData) {

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

  if (true) {
    return (
      <ProfilContainer>
        <Container>
          <Title>Register or Sign in</Title>
          <FormsContainer>
            <RegisterForm />
            <SignInForm />
          </FormsContainer>
        </Container>
      </ProfilContainer>
    )
  } else {
    return (
      <ProfilContainer>

        <InfosComponent />
      </ProfilContainer>
    )
  }

}
