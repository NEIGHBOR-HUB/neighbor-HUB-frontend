import {
  Container,
  ContainerFormInputs,
  ContainerLogo,
  ContentForm,
  SendButton,
  SpanIcon,
} from './styles';

export function CreateTheChangePassword() {
  return (
    <Container>
      <ContentForm>
        <ContainerLogo />
        <h1>Alterar senha</h1>
        <form action="#">
          <ContainerFormInputs>
            <SpanIcon />
            <label htmlFor="newpassword">Nova senha</label>
            <input type="password" name="newpassword" id="newpassword" />
          </ContainerFormInputs>

          <ContainerFormInputs>
            <SpanIcon />
            <label htmlFor="confirmpassword">Confirmar senha</label>
            <input type="password" name="confirmpassword" id="newpassword" />
          </ContainerFormInputs>
          <SendButton>Enviar</SendButton>
        </form>
      </ContentForm>
    </Container>
  );
}
