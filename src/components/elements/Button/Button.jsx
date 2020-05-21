import React from 'react';
import { func, node, bool, string } from 'prop-types';
import * as S from './ButtonStyles';

const Button = ({ children, action, color, isButtonLoading }) => (
  <S.Button onClick={action} color={color} isButtonLoading={isButtonLoading}>
    {children}
  </S.Button>
);

Button.propTypes = {
  children: node.isRequired,
  action: func.isRequired,
  color: string,
  isButtonLoading: bool,
};

Button.defaultProps = {
  color: 'primary',
  isButtonLoading: false,
};

export default Button;
