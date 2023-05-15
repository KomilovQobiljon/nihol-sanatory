import { useNavigate, Outlet, useOutlet } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

import { Title } from '../../Generic/Style';
import { Wrapper } from './style';
import Card from '../../Generic/Card';

import ordinaryRoom from '../../assets/ordinary_room.svg';
import luxuryRoom from '../../assets/luxury_room.svg';
import cottage from '../../assets/mansion.svg';

const Types = () => {
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    return navigate(`/building-types${path}`);
  }

  return (
    <>
      <Title>
        <LeftOutlined onClick={()=>navigate(-1)}/>
        Building types:
      </Title>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigateHandler("/ordinary-rooms")}
          img={ordinaryRoom}
          title={"Ordinary Rooms"}
        />
        <Card
          onClick={() => navigateHandler("/luxury-rooms")}
          img={luxuryRoom}
          title={"Luxury Rooms"}
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigateHandler("/cottages")}
          img={cottage}
          title={"Cottages"}
        />
      </Wrapper.CardContainer>
    </>
  )
}

const BuildingTypes = () => {
  const hasOutlet = useOutlet();

  return (
    <Wrapper>
      {
        hasOutlet ? <Outlet /> : <Types/>
      }
    </Wrapper>
  )
}

export default BuildingTypes