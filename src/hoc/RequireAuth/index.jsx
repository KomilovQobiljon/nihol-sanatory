import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const authed = true;

  if(!authed){
    return <Navigate to={"/login"}/>
  };
  return children;
}

export default RequireAuth