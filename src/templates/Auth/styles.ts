import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;

  width: 100%;
  max-width: 1440px;
  height: 100%;
  min-height: 100vh;
  padding: 2rem;

  background: ${({ theme }) => theme.palette.background.paper};
`;

export const Title = styled.h2`
  font-size: 2.5rem;
`;
