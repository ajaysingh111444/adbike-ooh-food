import React, { children } from 'react';
import NavBar from '../Header/NavBar';

const Layout = ({ children }) => {
  return (
    <>
        <NavBar />
        <div>
            {children}
        </div>
    </>
  );
};

export default Layout;
