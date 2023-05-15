import { useNavigate, Outlet, useOutlet } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

import { Title } from '../../..//Generic/Style';
import { Wrapper } from './style';
import Card from '../../../Generic/Card';

import building from '../../../assets/building.svg';

const Rooms = () => {
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    return navigate(path);
  }
  return (
    <>
      <Title>
        <LeftOutlined onClick={()=>navigate(-1)}/>
        Ordinary Rooms
      </Title>
      <Wrapper.CardContainer>
        <Card img={building} title="Room 2" onClick={()=>navigateHandler('2')} />
        <Card img={building} title="Room 4" onClick={()=>navigateHandler('4')} />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card img={building} title="Room 6" onClick={()=>navigateHandler('6')} />
      </Wrapper.CardContainer>
    </>
  )
}
const OrdinaryRooms = () => {
  const hasOutlet = useOutlet();
  
  return (
    <Wrapper>
      {
        hasOutlet ? <Outlet /> : <Rooms />
      }
    </Wrapper>
  )
}

export default OrdinaryRooms