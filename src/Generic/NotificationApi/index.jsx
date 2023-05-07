import { notification } from "antd";

const notFoundError = {
    message: "User not found",
    description: "Phone number or password is wrong",
}

const loginSuccess = {
  message: "Successfully logged in!",
}

const fillAllFieldsError = {
  message: "Please fill all fields",
}

export const useNotificationApi = () => {
  return (status) => {
    switch(status){
      case 200:
        return notification.success(loginSuccess);
      case 409:
        return notification.error(notFoundError);
      case 400:
        return notification.error(fillAllFieldsError);
      default:
        notification.error({ message: "Missing status!" });
    }
  }
}
