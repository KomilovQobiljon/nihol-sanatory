import { SettingOutlined, TranslationOutlined, LogoutOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { useSignOut } from 'react-auth-kit';
import { useTranslation } from 'react-i18next';

import { switchProfileModalVisibility, switchLocaleModalVisibility } from '../../redux/modalSlice';

import { MenuWrapper } from '../Style';
import { useNavigate } from 'react-router-dom';

const useDropDownApi = () => {
  const dispatch = useDispatch();
  const signOut = useSignOut();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const confirm = () => {
    Modal.confirm({
      title: `${t("modals.log_out.title")}`,
      content: `${t("modals.log_out.message")}`,
      okText: `${t("modals.log_out.logout_btn")}`,
      cancelText: `${t("modals.log_out.cancel_btn")}`,
      okButtonProps: {
        danger: true,
      },
      onOk: ()=>{
        navigate("/login");
        signOut();
      },
    });
  };

  const navbarDropDown = () => {
    return [
      {
        label: <MenuWrapper onClick={()=>dispatch(switchProfileModalVisibility())}>
          <SettingOutlined /> {t("home_page.dropdown_settings")}
        </MenuWrapper>,
        key: '0',
      },
      {
        label: <MenuWrapper onClick={()=>dispatch(switchLocaleModalVisibility())} >
          <TranslationOutlined />{t("home_page.dropdown_changelang")}
        </MenuWrapper>,
        key: '1',
      },
      {
        label: <MenuWrapper isDanger={true} onClick={confirm}><LogoutOutlined />{t("home_page.dropdown_logout")}</MenuWrapper>,
        key: '2',
      },
    ];

  }
  return {navbarDropDown};
}

export default useDropDownApi