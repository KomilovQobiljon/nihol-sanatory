import styled from 'styled-components';
import { Input, Segmented } from 'antd';

export const Wrapper = styled.div`

`;

Wrapper.ModalAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background: rgb(245, 106, 0);
`;

Wrapper.ModalInputWrapper = styled.div`
  margin-top: 20px;
`;
Wrapper.ModalInputTitle = styled.div`

`;
Wrapper.ModalInput = styled(Input)`
  color: rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.04);
  border-color: #d9d9d9;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 1;
`;
Wrapper.ModalSegmented = styled(Segmented)`
  border-radius: 8px;
  padding: 2px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  display: inline-block;
  background-color: #f5f5f5;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
Wrapper.ModalSegmentedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;