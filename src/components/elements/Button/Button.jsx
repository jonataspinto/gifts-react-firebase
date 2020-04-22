import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ButtonStyles';

const Button = ({ action, value, fontSize, to, children }) => {
  return to ? (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <S.Button fontSize={fontSize} onClick={action}>
        {value}
      </S.Button>
    </Link>
  ) : (
    <S.Button fontSize={fontSize} onClick={action}>
      {value || children}
    </S.Button>
  );
};

export default Button;
