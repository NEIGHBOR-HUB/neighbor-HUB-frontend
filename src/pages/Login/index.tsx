import  Link  from 'next/link'
import {
  BottomFormContent,
  Container,
  ForgotPasswordButton,
  LeftContent,
  LoginButton,
  LoginForm,
  RegisterContainer,
  RightContent,
} from './styles';

export default function Login() {
  return (
    <Container>
      <LeftContent>
        <img src="black-logo-nhub.svg" alt="NHUB logo" />
      </LeftContent>
      <RightContent>
        <LoginForm>
          <h1>Fazer login</h1>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <BottomFormContent>
            <input type="checkbox" />
            <span>Lembrar-me</span>
            <Link href="/ForgotPassword">
            <ForgotPasswordButton>Esqueci minha senha</ForgotPasswordButton>
            </Link>
          </BottomFormContent>
          <LoginButton>
            Entrar Agora
          </LoginButton>
          <RegisterContainer>
            <span>Não tem conta?</span>
            <Link href="/Register">
            <button>Cadastre-se</button>
            </Link>
          </RegisterContainer>
        </LoginForm>
      </RightContent>
    </Container>
  );
}
