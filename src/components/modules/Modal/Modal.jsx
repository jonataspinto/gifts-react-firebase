import React from 'react';
import { bool, func, node } from 'prop-types';
import { Icon } from '@material-ui/core';
import * as S from './ModalStyle';

const Modal = ({ showModal, toggleModal, children }) => {
  return (
    <S.Modal showModal={showModal}>
      <Icon
        className="fa fa-plus-circle"
        onClick={toggleModal}
        style={{
          fontSize: '42px',
          position: 'absolute',
          top: '0',
          right: '0',
          margin: '20px',
        }}
      >
        close
      </Icon>
      {children}
    </S.Modal>
  );
};

Modal.propTypes = {
  showModal: bool.isRequired,
  toggleModal: func.isRequired,
  children: node.isRequired,
};

export default Modal;
