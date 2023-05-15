import { useState } from 'react';
import { Modal, Segmented, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import { switchLocaleModalVisibility } from '../../../redux/modalSlice';
import useLanguageApi from '../../../Generic/LanguageApi';
import { Wrapper } from './style';

const UserModal = () => {
  const { t } = useTranslation();
  const [ localeState, setLocaleState ] = useState("");
  const { lang } = useSelector(state => state.locale);
  const { localeModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { languageList } = useLanguageApi();

  const onCancel = () => dispatch(switchLocaleModalVisibility());

  const switchLanguage = () => {
    i18n.changeLanguage(localeState);
    return onCancel();
  };
  const footer = [
    <Button key="back" onClick={onCancel}>
      {t("modals.change_languages.cancel_btn")}
    </Button>,
    <Button key="submit" type="primary" onClick={switchLanguage}>
      {t("modals.change_languages.edit_btn")}
    </Button>,
  ]
  
  return (
    <Modal 
      title={t("modals.change_languages.title")}
      open={localeModalVisibility}
      okButtonProps={{ disabled: false }}
      onOk={switchLanguage}
      onCancel={onCancel}
      footer={footer}
    >
      <Wrapper>
        <Segmented 
          onChange={(e) => setLocaleState(e)}
          defaultValue={lang}
          style={{ marginTop: "20px" }}
          block
          options={languageList()} />
      </Wrapper>
    </Modal>
  )
}

export default UserModal;