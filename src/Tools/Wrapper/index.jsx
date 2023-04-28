import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from '../../redux';

const Wrapper = ({ children }) => {
  return (
    <ConfigProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </ConfigProvider>
  )
}

export default Wrapper