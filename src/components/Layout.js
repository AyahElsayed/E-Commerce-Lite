import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from './Header/Header';
import {Footer} from './Footer';
import {Content} from './Content';
import HeroView from '../containters/Home/components/HeroView/HeroView';

export const Layout = () => {
  return (
      <div>
          <Header />
          <HeroView/>
          {/* <Content /> */}
          {/* <Footer /> */}
      </div>
  );
};
