import { Wrapper } from './styles';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { switchProfileModalVisibility } from '../../../redux/modalSlice';


const UserModal = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { profileModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <Modal 
      title="Account" 
      open={profileModalVisibility}
      onOk={()=>dispatch(switchProfileModalVisibility())} 
      onCancel={()=>dispatch(switchProfileModalVisibility())} 
      okButtonProps={{ disabled: true }}
    >
        <Wrapper.ModalAvatar>
          {user.name[0]}
        </Wrapper.ModalAvatar>
        <Wrapper.ModalInputWrapper>
          <Wrapper.ModalInputTitle>
            First Name:
          </Wrapper.ModalInputTitle>
          <Wrapper.ModalInput />
        </Wrapper.ModalInputWrapper>
        <Wrapper.ModalInputWrapper>
          <Wrapper.ModalInputTitle>
            Last Name:
          </Wrapper.ModalInputTitle>
          <Wrapper.ModalInput />
        </Wrapper.ModalInputWrapper>
    </Modal>
  )
}

export default UserModal;