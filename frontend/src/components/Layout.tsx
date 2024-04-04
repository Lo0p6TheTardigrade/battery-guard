import React from 'react';
import { Props } from '../types';
import Main from './Main';
import Aside from './Aside';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: Props) => {
  return (
    <div className="layout-container">
      <Header />
      <Main>{children}</Main>
      <Aside />
      <Footer />
    </div>
  );
};

export default Layout;
