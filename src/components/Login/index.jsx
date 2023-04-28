import { useRef, useState } from "react";
import { Wrapper } from "./style";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from 'axios';

const Login = () => {
  const [ loading, setLoading ] = useState(false);
  const phoneRef = useRef();
  const passwordRef = useRef();

  const onKeyDetect = (e) => {
    if((!loading) && (e.key === 'Enter' || e.type === "click")){
      return onAuth();
    }
  };

  const onAuth = () => {
    const { phoneNumber, password } = {
      phoneNumber: `${phoneRef.current.input.value}`,
      password: passwordRef.current.input.value
    }
    if(!password || !phoneNumber){
      return notification.error({
        message: "Please fill fields!",
      })
    }

    setLoading(true);

    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
      method: "POST",
      data: {
        phoneNumber: `+998${phoneNumber}`,
        password
      },
    }).then(res => {
      const { token, user } = res.data.data;
      localStorage.setItem("userToken", token)
      return notification.success({ message: "Successfully logged in!"})
    }).catch((res)=>{
      const response  = res.response;
      console.log(res);
      if(response.status === 409){
        notification.error({
          message: "User not found",
          description: "Phone number or password is wrong"
        })
      }
    })
    .finally(()=>{
      setLoading(false);
    })
  }

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
        <Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.</Wrapper.Description>
        <Wrapper.PhoneNumber 
          ref={phoneRef}
          addonBefore="+998" 
          bordered={false} 
          name="phoneNumber"
          placeholder="Enter your number..."
        />
        <Wrapper.Password 
          ref={passwordRef}
          placeholder="Enter your password" 
          name="password"
          onKeyDown={onKeyDetect}
        />
        <Wrapper.Button onClick={onKeyDetect}>
          {loading ? <LoadingOutlined /> : "Login"}          
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  )
}

export default Login;