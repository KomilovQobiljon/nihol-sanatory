import ReactDOM from 'react-dom/client';
import './index.css';

import Wrapper from './Tools/Wrapper';
import Login from './components/Login'
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    {/* <Login /> */}
    <Navbar />
  </Wrapper>
);
