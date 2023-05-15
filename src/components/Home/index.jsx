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
          title={t("home_page.cards.all_users")} img={allUsers}
        />
        <Card 
          onClick={() => navigateHandler("half-time")} 
          title={t("home_page.cards.half_time")} img={halfTime}
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card 
          onClick={() => navigateHandler("time-up")} 
          title={t("home_page.cards.time_up")} img={timeUp}
        />
        <Card 
          onClick={() => navigateHandler("building-types")} 
          title={t("home_page.cards.empty_places")} img={emptyPlaces}
        />
      </Wrapper.CardContainer>
      <Title>{t("home_page.reports_title")}:</Title>
      <Wrapper.CardContainer>
        <Card 
          onClick={() => navigateHandler("report")} 
          title={t("home_page.cards.report")} img={report}
        />
      </Wrapper.CardContainer>
    </Wrapper>
  )
}

export default Home