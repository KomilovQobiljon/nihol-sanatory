import ReactDOM from 'react-dom/client';
import './index.css';

import Wrapper from './Tools/Wrapper';
import Login from './components/Login'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <Login />
  </Wrapper>
);
