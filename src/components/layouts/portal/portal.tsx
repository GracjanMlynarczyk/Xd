import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Portal: FC = ({ children }) => (
  <>
    <>
      <header>portal</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>

    <ToastContainer position='bottom-left' />
  </>
);

export default Portal;
