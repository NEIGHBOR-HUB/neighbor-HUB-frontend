import {
  Container,
  LeftContent,
  SendButton,
  SendEmailForm,
  RightContent,
} from './styles';

export function ForgotPassword() {
  return (
    <Container>
      <LeftContent>
        <SendEmailForm>
          <h1>Esqueceu <br/> sua senha?</h1>
          <span>Vamos resolver isso para você</span>
          <input type="email" placeholder="E-mail" />

          <SendButton>
            Enviar
          </SendButton>

        </SendEmailForm>
      </LeftContent>
      <RightContent>
        <img src="white-logo-nhub.svg" alt="NHUB logo" />
      </RightContent>
    </Container>
  );
}
