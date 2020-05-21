import styled from 'styled-components';

export const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  border-radius: ${props => props.rounded && '50%'};
`;
