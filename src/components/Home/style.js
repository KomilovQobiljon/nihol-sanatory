import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

Wrapper.CardContainer = styled.div`
  display: flex;
  grid-gap: 200px;
  margin: 30px auto;
  width: fit-content;
`;