import ReactDOM from 'react-dom/client';
import './index.css';

import Wrapper from './Tools/Wrapper';
import Root from './root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <Root />
  </Wrapper>
);
