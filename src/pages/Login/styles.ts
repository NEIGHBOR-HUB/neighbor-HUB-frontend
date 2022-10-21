import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  background-image: url('login-left-details.svg');
  background-repeat: no-repeat;
`;

export const RightContent = styled.div`
  background-color: #480ca8;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('login-right-details.svg');
  background-repeat: no-repeat;
  background-position-x: right;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;

  h1 {
    color: white;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  input {
    padding: 1rem;
    height: 4rem;
    width: 100%;

    font-size: 1rem;

    border: none;
    border-radius: 10px 10px 0px 0px;

    :nth-child(3) {
      margin-top: 2px;
      border-radius: 0px 0px 10px 10px;
    }
  }
`;

export const BottonFormContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  span {
    color: white;
    margin-left: -4rem;
    font-size: 0.9rem;
  }

  input {
    width: 1.4rem;
  }
`;

export const ForgotPasswordButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  font-size: 0.9rem;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 3rem;
  color: white;
  background-color: #000;
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
`;

export const RegisterContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  flex-direction: column;

  span {
    color: #93c1f9;
  }

  button {
    cursor: pointer;
    margin-top: 0.4rem;
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    text-decoration: underline;
  }
`;
