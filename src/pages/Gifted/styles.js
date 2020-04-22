import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  min-height: calc(100vh - 60px);

  flex-wrap: wrap;
`;
export const GiftedPage = styled(Container)``;

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

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;
