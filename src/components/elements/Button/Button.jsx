import React from 'react';
import * as S from './ButtonStyles';
import {Link} from 'react-router-dom';

const Button = (props)=> {
  const{action, value, fontSize, to}= props
  return (
    (to) ?
    <Link to={to} style={{textDecoration: 'none'}} >
      <S.Button fontSize={fontSize} onClick={action} >{value}</S.Button>
    </Link>
    :
      <S.Button fontSize={fontSize} onClick={action} >{value || props.children}</S.Button>
  );
}

export default  Button