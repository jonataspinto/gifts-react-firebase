import styled from "styled-components";
import { darken, lighten } from "polished";

export const BUTTON = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: ${props => props.fontSize};
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 10px;
  &:active {
    background-color: ${props =>
      props.theme.colors.secondary &&
      darken(0.1, props.theme.colors.secondary)};
  }
`;
