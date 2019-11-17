import React from 'react';
import {BUTTON} from '../../styles'
import {Link} from 'react-router-dom'

export default function Button (props) {
  const{action, value, fontSize, backgroundBtn, to}= props
  return (
    (to) ?
    <Link to={to} >
      <BUTTON fontSize={fontSize} onClick={action} background={backgroundBtn}>{value}</BUTTON>
    </Link>
    :
      <BUTTON fontSize={fontSize} onClick={action} background={backgroundBtn}>{value || props.children}</BUTTON>
  );
}
