import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #480CA8;
  display: flex;
  align-items: center;
  background-image: url("login-fullscren-details.svg");

  background-repeat: no-repeat;
  background-size: cover;

`;
export const ContentForm = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;

  h1 {
    font-size: 2em;
    font-weight: 500;
    text-align: center;
    color: white;
  }

  h2 {
    width: 50%;
    font-size: 1.5em;
    font-weight: 500;
    text-align: center;
    color: white;
  }
  `;
export const ContainerLogo = styled.div `
  width: 10vw;
  height: 10vh;
  background-image: url("white-logo-nhub.svg");
  background-repeat: no-repeat;
  background-size: 100%;

`;

export const ContainerFormInputs = styled.div `
  position: relative;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  label {
    font-size: .9em;
    color: white;
    margin-bottom: .6em;
    font-weight: 400;
  }
  input {
    padding: 1rem;
    height: 3rem;
    width: 20em;

    font-size: 1rem;

    border: none;
    border-radius: 8px;
  }
`;

export const SendButton = styled.div `
button {
  border: none;
  width: 100%;
  height: 3rem;
  color: white;
  background-color: #000;
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 3rem;

  &[disabled] {
    background-color: #353B45;
  }
}
`;

export const SpanIcon = styled.span `
  cursor: pointer;
  position: absolute;
  top: 2.6em;
  right: 1em;
  width: 2em;
  height: 1.5em;
  background-size: cover;
  background-image: url("eye.svg");

  `;

export const ContenChanged = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100vw;

h1 {
  font-size: 3em;
  font-weight: 500;
  text-align: center;
  color: white;
  margin-bottom: .5em;
}

h2 {
  width: 8em;
  font-size: 2.5em;
  font-weight: 500;
  text-align: center;
  color: white;
}

`;

  export const Login = styled.div `
  button {
    border: none;
    width: 320px;
    height: 48px;
    height: 3rem;
    color: white;
    background-color: #000;
    border-radius: 0.4rem;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 3rem;
}
`;
