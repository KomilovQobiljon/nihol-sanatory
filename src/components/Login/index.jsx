import { useRef, useState } from "react";
import { Wrapper } from "./style";
import { LoadingOutlined } from "@ant-design/icons";

import useAxios from "../../hooks/useAxios";
import { useNotificationApi } from '../../Generic/NotificationApi';
import useInput from "../../Generic/InputApi";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

const Login = () => {
  const axios = useAxios();
  const signIn = useSignIn();
  const [ loading, setLoading ] = useState(false);
  const [ phone, setPhone ] = useState();
  const passwordRef = useRef();
  const statusChecker = useNotificationApi();
  const { phoneFormatter } = useInput();
  const navigate = useNavigate();

  const onKeyDetect = (e) => {
    if((!loading) && (e.key === 'Enter' || e.type === "click")){
      return onAuth();
    }
  };

  const onAuth = () => {
    const { phoneNumber, password } = {
      phoneNumber: `${phone.replace(/[^\d]/g, "")}`,
      password: passwordRef.current.input.value
    }
    if(!password || !phoneNumber){
      return statusChecker(400);
    }

    setLoading(true);

    axios({
      url: `/user/sign-in`,
      method: "POST",
      body: {
        phoneNumber: `+998${phoneNumber}`,
        password
      },
    }).then(res => {
      const { token, user } = res.data.data;
      localStorage.setItem("userToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      signIn({
        token: token,
        expiresIn: 60,
        tokenType: "Bearer",
        authState: user
      });
      navigate("/");
      return statusChecker(200);
    }).catch((res)=>{
      console.log(res)
      const status  = res.response.status;
      return statusChecker(status);
    })
    .finally(()=>{
      setLoading(false);
      navigate("/");
    })
  }

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
        <Wrapper.Description>
          Biz har kuni kechagidan ko'ra yaxshiroq xizmat 
          ko'rsatishga intilamiz.
        </Wrapper.Description>
        <Wrapper.PhoneNumber 
          value={phone}
          onChange={(e)=>setPhone(phoneFormatter(e.target.value))}
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