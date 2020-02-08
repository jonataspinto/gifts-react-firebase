import React from 'react';
import {ModalContainer} from'./styles';
import {Icon} from '@material-ui/core'
// import Button from '../Button';

// import { Container } from './styles';

export default function Modal(props) {
  return (
    <div>
      <ModalContainer style={{top: props.showModal ? 0 : "-100vh", color: "white"}}>
        <Icon className={'fa fa-plus-circle'} 
          onClick={props.toggleModal} 
          style={{ 
            fontSize: '42px',
            position: 'absolute',
            top:'0',
            right: '0',
            margin: '20px'}}>
            close
          </Icon>
        {props.children}
      </ModalContainer>
    </div>
  );
}
