import React from 'react';
import { node } from 'prop-types';
import Header from '../Header';
import * as S from './LayoutStyled';

const Layout = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      {children}
    </S.Layout>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
