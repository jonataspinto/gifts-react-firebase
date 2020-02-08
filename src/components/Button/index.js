import React from 'react';
import {BUTTON} from './styles'
import {Link} from 'react-router-dom'

const Button = (props)=> {
  const{action, value, fontSize, to}= props
  return (
    (to) ?
    <Link to={to} style={{textDecoration: 'none'}} >
      <BUTTON fontSize={fontSize} onClick={action} >{value}</BUTTON>
    </Link>
    :
      <BUTTON fontSize={fontSize} onClick={action} >{value || props.children}</BUTTON>
  );
}

export default  Button
