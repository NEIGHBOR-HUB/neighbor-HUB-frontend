import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Content = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 2rem;

  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%);

  background: ${({ theme }) => theme.palette.background.default};
`;
