import {
  BottonFormContent,
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
        <img src="logo-nhub.svg" alt="NHUB logo" />
      </LeftContent>
      <RightContent>
        <LoginForm>
          <h1>Fazer login</h1>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <BottonFormContent>
            <input type="checkbox" />
            <span>Lembrar-me</span>
            <ForgotPasswordButton>Esqueci minha senha</ForgotPasswordButton>
          </BottonFormContent>
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
