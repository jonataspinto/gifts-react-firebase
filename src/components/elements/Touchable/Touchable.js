import React from 'react';
import { node } from 'prop-types';
import * as S from './TouchableStyled';

const Touchable = ({ children }) => <S.Touchable>{children}</S.Touchable>;

Touchable.propTypes = {
  children: node.isRequired,
};

export default Touchable;
