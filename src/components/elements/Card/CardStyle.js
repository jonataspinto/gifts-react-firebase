import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px ridge black;
  border-radius: 10px;
  min-height: 200px;
  width: 100%;
  max-width: 215px;
  padding: 10px;
  transition: 0.1s;
  background-color: ${props => props.background};
`;
