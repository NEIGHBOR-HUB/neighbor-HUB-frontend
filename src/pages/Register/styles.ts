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
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;

  h1 {
    color: #480CA8;
    font-weight: 600;
  }
  span{
    margin-bottom: 2.6rem;
    font-weight: 500;

  }

  input {
    padding: 1rem;
    height: 4rem;
    width: 100%;
    background-color: #FAFAFC;
    border: 1px solid #E6E6F0;

    font-size: 1rem;
    margin-top: 2px;


    :nth-child(3) {
      margin-top: 2px;
      border-radius: 10px 10px 0px 0px;
    }

    :nth-child(5) {
      margin-top: 2px;
      border-radius: 0px 0px 10px 10px;
    }
  }
`;


export const RegisterButton = styled.button`
  width: 100%;
  height: 3rem;
  color: white;
  background-color: #000;
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 3rem;
`;

