import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RequireAuth } from 'react-auth-kit';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Navbar from '../components/Navbar';
import Login from '../components/Login';
import { paths } from '../utils/path';
import { en } from '../utils/locale/en';
import { ru } from '../utils/locale/ru';
import { uzLotin } from '../utils/locale/uzLotin';
import { uzKrill } from '../utils/locale/uzKrill';

const Root = () => {
  const { lang } = useSelector(state => state.locale);
  i18n.use(initReactI18next).init(
    {
      resources: {
        en: { translation: en},
        ru: { translation: ru},
        uzLotin: { translation: uzLotin},
        uzKrill: { translation: uzKrill},
      },
      lang: lang,
      fallbackLng: lang,
    }
  )
  return (
    <Routes>
      <Route path="/" 
        element={
          <RequireAuth loginPath="/login">
            {"  "}
            <Navbar />
          </RequireAuth>
        }>
        {
          paths.map(({ id, path, element }) => 
            <Route key={id} path={path} element={element} />
          )
        }
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Root