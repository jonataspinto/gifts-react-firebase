import React from 'react';
import {BUTTON} from '../../styles'
import {Link} from 'react-router-dom'

const Button = (props)=> {
  const{action, value, fontSize, backgroundBtn, color, to}= props
  return (
    (to) ?
    <Link to={to} style={{textDecoration: 'none'}} >
      <BUTTON fontSize={fontSize} onClick={action} background={backgroundBtn} color={color}>{value}</BUTTON>
    </Link>
    :
      <BUTTON fontSize={fontSize} onClick={action} background={backgroundBtn} color={color}>{value || props.children}</BUTTON>
  );
}

export default  Button
