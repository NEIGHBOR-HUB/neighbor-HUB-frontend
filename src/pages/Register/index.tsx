import {
  Container,
  LeftContent,
  RegisterButton,
  LoginForm,
  RightContent,
} from './styles';

export default function Register() {
  return (
    <Container>
      <LeftContent>
        <LoginForm>
          <h1>Cadastro</h1>
          <span>Preencha os dados abaixo <br /> para começar.</span>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <RegisterButton>Entrar Agora</RegisterButton>
        </LoginForm>
      </LeftContent>
      <RightContent>
        <img src="white-logo-nhub.svg" alt="NHUB logo" />
      </RightContent>
    </Container>
  );
}
