import styled from "styled-components";

export const Container = styled.div`
  width: 15%;
  height: 45rem;
  background-color: #212121;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  .NHUB-Logo {
    padding-top: 4em;
    width: 6em;
  }

`;

export const ListaContainer = styled.ul`

  .Icons {
    width: 2em;
    margin-right: 1em;
  }

  width: 95%;
    li {
    display: flex;
    align-items: center;
    color: white;
    padding-left: 2em;
    margin-top: 2em;
    height: 25%;
    cursor: pointer;

    :hover {
      background-color: #480CA8;
      border-radius: 10px;
    }
  }
`;
