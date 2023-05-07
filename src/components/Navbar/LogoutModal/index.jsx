import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { switchLogoutModalVisibility } from '../../../redux/modalSlice';

const LogoutModal = () => {
  const { logoutModalVisibility } = useSelector((state)=> state.modal);
  const dispatch = useDispatch();

  return (
    <Modal>

    </Modal>
  )
}

export default LogoutModal;