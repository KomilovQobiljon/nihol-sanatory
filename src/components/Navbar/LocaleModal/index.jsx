import { useState } from 'react';
import { Modal, Segmented } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { switchLocaleModalVisibility } from '../../../redux/modalSlice';
import useLanguageApi from '../../../Generic/LanguageApi';
import { Wrapper } from './style';
import i18n from 'i18next';

const UserModal = () => {
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
  
  return (
    <Modal 
      title="Change language" 
      open={localeModalVisibility} 
      onOk={switchLanguage} 
      onCancel={onCancel} 
      okButtonProps={{ disabled: false }}
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