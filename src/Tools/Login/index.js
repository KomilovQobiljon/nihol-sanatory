/* eslint-disable no-undef */
const loginCreator = ()=>{
  return () => {
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
}

export default loginCreator;