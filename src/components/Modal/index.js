import React from 'react';
import {ModalContainer} from'../../styles';
// import Button from '../Button';

// import { Container } from './styles';

export default function Modal(props) {
  return (
    <div>
      <ModalContainer style={{top: props.showModal ? 0 : "-100vh", color: "white"}}>
        {props.children}
      </ModalContainer>
    </div>
  );
}
