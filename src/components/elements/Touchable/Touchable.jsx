import React from 'react';
import { node, func } from 'prop-types';
import * as S from './TouchableStyled';

const Touchable = ({ children, action }) => (
  <S.Touchable onClick={action}>{children}</S.Touchable>
);

Touchable.propTypes = {
  children: node.isRequired,
  action: func.isRequired,
};

export default Touchable;
