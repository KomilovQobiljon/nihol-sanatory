import styled from "styled-components";
import { Tag } from 'antd';

export const MenuWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  color: ${({isDanger})=> isDanger ? "red" : "#000"};
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

export const MainRoomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 20px;
  border-radius: 12px;
  padding: 10px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;
  margin-top: 40px;
  width: 310px;
`;

export const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border: 1px solid rgb(147, 149, 150);
  border-radius: 12px;
`;

export const RoomTitle = styled.div`
  margin-top: 10px;
`;

export const RoomSlotContainer = styled.div`
  margin: 10px auto;
  width: 120px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const Room = styled(Tag)`
  position: relative;
  margin: 0px;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;

Room.Warning = styled(Tag)`
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -15px;
`;


