import styled from "styled-components";
// import { darken, lighten } from "polished";
import { images } from '../../assets';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  min-height: calc(100vh - 60px);

  flex-wrap: wrap;
`;

export const Home = styled(Container)`
  background-image: url(${images.backgroundList});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    background-image: none;
  }
`;
