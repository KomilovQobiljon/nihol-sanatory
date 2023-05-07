import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 0px 10%;
  height: 70px;
  margin: auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

Wrapper.Left = styled.div`

`;
Wrapper.Title = styled.div`
  cursor: pointer;
`
Wrapper.Right = styled.div`

`;

Wrapper.Avatar = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  list-style: none;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
  position: relative;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgb(245, 106, 0);
  cursor: pointer;
`
