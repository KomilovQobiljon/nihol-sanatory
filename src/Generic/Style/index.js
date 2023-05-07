import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  color: ${({isDanger})=> isDanger ? "red" : "#000"}
`;

export const Title = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: rgb(0, 0, 0);
  margin: 40px;
`;
