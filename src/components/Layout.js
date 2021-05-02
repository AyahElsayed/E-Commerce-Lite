import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from './Header/Header';
import {Footer} from './Footer';
import {Content} from './Content';

export const Layout = () => {
  return (
      <div>
          <Header />
          {/* <Content /> */}
          {/* <Footer /> */}
      </div>
  );
};
