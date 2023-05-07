import { Outlet } from 'react-router-dom';
import { Wrapper } from './style';
import { Dropdown } from 'antd';
import { useAuthUser } from 'react-auth-kit';

import UserModal from './UserModal';
import LanguageModal from './LocaleModal';
import useDropDownApi from '../../Generic/DropdownApi';

const Navbar = () => {
  const authUser = useAuthUser();
  const name = authUser().name;

  const { navbarDropDown } = useDropDownApi();
  return (
    <>
      <Wrapper>
        <UserModal />
        <LanguageModal />
        <Wrapper.Left>
          <Wrapper.Title>NIHOL</Wrapper.Title>
        </Wrapper.Left>
        <Wrapper.Right>
          <Dropdown
            menu={{
              items: navbarDropDown()
            }}
            trigger={['click']}
          >
            <Wrapper.Avatar>
              {name[0]}
            </Wrapper.Avatar>
          </Dropdown>
        </Wrapper.Right>
      </Wrapper>
      <Outlet />
    </>
  )
}

export default Navbar;