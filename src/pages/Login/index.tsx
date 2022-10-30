import { SideBarComponent } from 'components/SideBarComponent';
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

export function Login() {
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
            <ForgotPasswordButton>Esqueci minha senha</ForgotPasswordButton>
          </BottomFormContent>
          <LoginButton>
            Entrar Agora
          </LoginButton>
          <RegisterContainer>
            <span>Não tem conta?</span>
            <button>Cadastre-se</button>
          </RegisterContainer>
        </LoginForm>
      </RightContent>
    </Container>
  );
}
