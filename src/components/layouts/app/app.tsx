import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App: FC = ({ children }) => (
  <>
    <>
      <header>app</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>

    <ToastContainer position='bottom-left' />
  </>
);

export default App;
