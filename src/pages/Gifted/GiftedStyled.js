import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
  max-width: 100vw;
  min-height: calc(100vh - 60px);
`;

export const ButtonAdd = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 10px;
  &:first-child {
    &:active {
      box-shadow: 0px 0px 20px rgba(139, 139, 138, 0.938);
    }
  }
`;
