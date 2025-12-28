import React, { children } from 'react';
import NavBar1 from '../Header1/NavBar1';

const Layout1 = ({ children }) => {
  return (
    <>
        <NavBar1 />
        <div>
            {children}
        </div>
    </>
  );
};

export default Layout1;
