import { useEffect, useState } from 'react';

import {
  Container,
  ContainerFormInputs,
  ContainerLogo,
  ContenChanged,
  ContentForm,
  Login,
  SendButton,
  SpanIcon,
} from './styles';

export function CreateTheChangePassword() {
  const [FormChangePassword, SetFormChangePassword] = useState(true);
  const [PasswordChanged, SetPasswordChanged] = useState(false);
  const [PassWord, SetPassWord] = useState('');
  const [PassWordConfirm, SetPassWordConfirm] = useState('');
  const [ButtonActive, SetButton] = useState(true);

  useEffect(() => {
    if (PassWord === PassWordConfirm && PassWord.length > 8) {
      SetButton(false);
    } else SetButton(true);
  }, [HandleChangePass, HandleChangePassConfirm]);

  function HandleChangePass(event: any) {
    SetPassWord(event.target.value);
  }
  function HandleChangePassConfirm(event: any) {
    SetPassWordConfirm(event.target.value);
  }
  function PassChanged() {
    if (PassWord === PassWordConfirm && PassWord.length > 0) {
      SetPasswordChanged(true);
      SetFormChangePassword(false);
    }
  }

  return (
    <>
      <Container>
        {FormChangePassword && (
          <ContentForm>
            <ContainerLogo />
            <h1>Alterar senha</h1>
            <form action="#">
              <ContainerFormInputs>
                <SpanIcon />
                <label htmlFor="newpassword" id="NewPassword">
                  Nova senha
                </label>
                <input
                  type="password"
                  name="NewPassword"
                  id="newpassword"
                  onChange={HandleChangePass}
                />
              </ContainerFormInputs>

              <ContainerFormInputs>
                <SpanIcon />
                <label htmlFor="confirmpassword" id="confirmpassword">
                  Confirmar senha
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="newpassword"
                  onChange={HandleChangePassConfirm}
                />
              </ContainerFormInputs>
              <SendButton>
                <button
                  disabled={ButtonActive}
                  onClick={PassChanged}
                  className="Btn"
                >
                  Enviar
                </button>
              </SendButton>
            </form>
          </ContentForm>
        )}
        {PasswordChanged && (
          <ContenChanged>
            <ContainerLogo />
            <h1>Parabéns</h1>
            <h2>Sua senha foi alterada.</h2>
            <Login>
              <button>Fazer login</button>
            </Login>
          </ContenChanged>
        )}
      </Container>
    </>
  );
}
