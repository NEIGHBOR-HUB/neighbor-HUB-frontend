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

export const SendEmailForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;

  h1 {
    color: #480ca8;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  span {
    padding-bottom: 2rem;
  }

  input {
    padding: 1rem;
    height: 4rem;
    width: 100%;

    font-size: 1rem;
    background-color: #fafafc;
    border: 1px solid #e6e6f0;
    border-radius: 10px;
  }
`;

export const SendButton = styled.button`
  width: 100%;
  height: 3rem;
  color: white;
  background-color: #000;
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
`;

export const EmailSent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  h1 {
    color: #480ca8;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  button{
    cursor: pointer;
    margin-top: 1rem;
    background: none;
    border: none;
    color: #480ca8;
    font-size: 1rem;
    text-decoration: underline;
  }
`;
