import { SettingOutlined, TranslationOutlined, LogoutOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { useSignOut } from 'react-auth-kit';

import { switchProfileModalVisibility, switchLocaleModalVisibility } from '../../redux/modalSlice';

import { MenuWrapper } from '../Style';
import { useNavigate } from 'react-router-dom';

const useDropDownApi = () => {
  const dispatch = useDispatch();
  const signOut = useSignOut();
  const navigate = useNavigate();
  const confirm = () => {
    Modal.confirm({
      title: 'Warning',
      content: 'Are you sure?',
      okText: "Logout",
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
          <SettingOutlined /> Settings
        </MenuWrapper>,
        key: '0',
      },
      {
        label: <MenuWrapper onClick={()=>dispatch(switchLocaleModalVisibility())} >
          <TranslationOutlined />Change language
        </MenuWrapper>,
        key: '1',
      },
      {
        label: <MenuWrapper isDanger={true} onClick={confirm}><LogoutOutlined />Exit</MenuWrapper>,
        key: '2',
      },
    ];

  }
  return {navbarDropDown};
}

export default useDropDownApi