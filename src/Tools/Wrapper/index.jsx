import { ConfigProvider } from 'antd';
import { AuthProvider } from 'react-auth-kit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux';

const Wrapper = ({ children }) => {
  
  return (
    <ConfigProvider>
      <AuthProvider 
        authType="cookie" 
        authName="_auth" 
        cookieDomain={window.location.hostname}
        cookieSecurity={window.location.protocol === "https:"}
      >
        <BrowserRouter>
          <Provider store={store}>
            {children}
          </Provider>
        </BrowserRouter>
      </AuthProvider>
    </ConfigProvider>
  )
}

export default Wrapper