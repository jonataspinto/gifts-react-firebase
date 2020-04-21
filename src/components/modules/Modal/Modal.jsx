import React from 'react';
import * as S from'./ModalStyle';
import {Icon} from '@material-ui/core'

const Modal = (props) => {
  return (
    <S.Modal style={{top: props.showModal ? 0 : "-100vh", color: "white"}}>
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
    </S.Modal>
  );
}

export default Modal;
