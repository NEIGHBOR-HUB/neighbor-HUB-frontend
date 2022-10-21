import { useState } from 'react';
import {
  Container,
  LeftContent,
  SendButton,
  SendEmailForm,
  RightContent,
  EmailSent,
} from './styles';

export function ForgotPassword() {
  const [emailSent, setEmailSent] = useState<boolean>(false);
  return (
    <Container>
      <LeftContent>
        {!emailSent ? (
          <SendEmailForm>
            <h1>
              Esqueceu <br /> sua senha?
            </h1>
            <span>Vamos resolver isso para você</span>
            <input type="email" placeholder="E-mail" />

            <SendButton
              onClick={() => {
                setEmailSent(true);
              }}
            >
              Enviar
            </SendButton>
          </SendEmailForm>
        ) : (
          <EmailSent>
            <h1>Verifique seu e-mail</h1>
            <span>Enviamos um e-mail de <br /> recuperação da sua senha</span>
            <button>Retornar para Login</button>
          </EmailSent>
        )}
      </LeftContent>
      <RightContent>
        <img src="white-logo-nhub.svg" alt="NHUB logo" />
      </RightContent>
    </Container>
  );
}
