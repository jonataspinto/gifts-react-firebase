import styled from 'styled-components';
import { lighten } from 'polished';

// cores-> #6d7993, #d5d5d5, #96858f, #9099a2

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 8px;
  background-color: ${(props) => props.theme.background.secondary};
  transition: 0.5s;
`;
