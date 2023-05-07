import { Wrapper } from './style';
import Card from '../../Generic/Card';
import { Title } from '../../Generic/Style';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import allUsers from '../../assets/all_users.svg';
import halfTime from '../../assets/half_time.svg';
import timeUp from '../../assets/start_time.svg';
import emptyPlaces from '../../assets/empty_place.svg';
import report from '../../assets/report.svg';

const Home = () => {
  const navigate = useNavigate()
  const { t } = useTranslation();

  const navigateHandler = (path) => {
    navigate(path);
  }
  return (
    <Wrapper>
      <Title>{t("home_page.section_title")}:</Title>
      <Wrapper.CardContainer>
        <Card 
          onClick={() => navigateHandler("all-users")} 
          title={"All Users"} img={allUsers}
        />
        <Card 
          onClick={() => navigateHandler("half-time")} 
          title={"Half time"} img={halfTime}
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card 
          onClick={() => navigateHandler("time-up")} 
          title={"Time Up"} img={timeUp}
        />
        <Card 
          onClick={() => navigateHandler("empty-places")} 
          title={"Empty Places"} img={emptyPlaces}
        />
      </Wrapper.CardContainer>
      <Title>Reports:</Title>
      <Wrapper.CardContainer>
        <Card 
          onClick={() => navigateHandler("report")} 
          title={"Report"} img={report}
        />
      </Wrapper.CardContainer>
    </Wrapper>
  )
}

export default Home