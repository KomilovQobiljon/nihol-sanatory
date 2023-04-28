import { useRef } from 'react';
import { Wrapper } from "./style";

const Login = () => {
  const phoneNumber = useRef();
  const password = useRef();

  const onAuth = () => {
    console.log(phoneNumber.current.input.value, password.current.input.value);
  }
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
        <Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.</Wrapper.Description>
        <Wrapper.PhoneNumber 
          ref={phoneNumber}
          addonBefore="+998" 
          bordered={false} 
          placeholder="Enter your number..."
        />
        <Wrapper.Password 
          ref={password}
          placeholder="Enter your password" 
        />
        <Wrapper.Button onClick={onAuth}>Login</Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  )
}

export default Login;