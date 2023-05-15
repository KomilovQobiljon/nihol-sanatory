import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { LeftOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query';

import useAxios from '../../../hooks/useAxios';
import { Title, MainRoomWrapper, RoomContainer, RoomTitle, RoomSlotContainer, Room } from '../../../Generic/Style';
import { Wrapper } from "./style";
import OccupiedRoom from '../OccupiedRoom';


const Loaded = ({ data }) => {
  return (
    <MainRoomWrapper>
      {data.map((room) => {
          return (
            <RoomContainer key={room._id}>
              <RoomTitle>{room.roomNumber} Room</RoomTitle>
              <RoomSlotContainer>
                {room.cliente.map((cliente)=> 
                  
                  cliente.isBooked ? 
                    (<Room color={"processing"} key={cliente.clienteID}>
                      <Room.Warning color="warning" icon={<ExclamationCircleOutlined />} />
                    </Room>) :
                  cliente.userID ?
                    (<OccupiedRoom key={cliente.clienteID} cliente={cliente} />) :
                    (<Room color={"green"} key={cliente.clienteID}></Room>)
                )}
              </RoomSlotContainer>
            </RoomContainer>
          )
        }
      )}
    </MainRoomWrapper>
  )
}

const SecondBuilding = () => {
  const axios = useAxios();
  const navigate = useNavigate();

  const { isLoading, data } = useQuery(
    "accomodation/2", 
    () => axios({ url: "/accomodation/2/room" })
      .then(data=>{
          return data.data.data;
      }),
    {
      refetchOnWindowFocus: false
    }
    )

  return (
    <Wrapper>
      <Title>
        <LeftOutlined onClick={()=>navigate(-1)}/>
        2 Building
      </Title>
      {
        isLoading ? <Spin/> : <Loaded data={data} />
      }
    </Wrapper>
  )
}

export default SecondBuilding;