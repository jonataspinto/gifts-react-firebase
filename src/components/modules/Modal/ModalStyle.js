import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: ${props => (props.showModal ? 0 : '-100vh')};
  color: #fff;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.815);
`;
