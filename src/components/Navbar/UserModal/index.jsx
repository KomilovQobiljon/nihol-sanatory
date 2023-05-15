import { Wrapper } from './styles';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { switchProfileModalVisibility } from '../../../redux/modalSlice';


const UserModal = () => {
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem("user"));
  const { profileModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(switchProfileModalVisibility())

  const footer = [
    <Button key="back" onClick={handleClick}>
      {t("modals.settings.cancel_btn")}
    </Button>,
    <Button key="submit" type="primary" onClick={handleClick}>
      {t("modals.settings.save_btn")}
    </Button>,
  ]

  return (
    <Modal 
      title={t("modals.settings.title")} 
      open={profileModalVisibility}
      onOk={handleClick} 
      onCancel={handleClick}
      okButtonProps={{ disabled: true }}
      footer={footer}
    >
        <Wrapper.ModalAvatar>
          {user.name[0]}
        </Wrapper.ModalAvatar>
        <Wrapper.ModalInputWrapper>
          <Wrapper.ModalInputTitle>
            {t("modals.settings.name")}:
          </Wrapper.ModalInputTitle>
          <Wrapper.ModalInput />
        </Wrapper.ModalInputWrapper>
        <Wrapper.ModalInputWrapper>
          <Wrapper.ModalInputTitle>
            {t("modals.settings.surname")}:
          </Wrapper.ModalInputTitle>
          <Wrapper.ModalInput />
        </Wrapper.ModalInputWrapper>
    </Modal>
  )
}

export default UserModal;