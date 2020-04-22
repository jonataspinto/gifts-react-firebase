import styled from 'styled-components';
import { lighten } from 'polished';

// cores-> #6d7993, #d5d5d5, #96858f, #9099a2

export const Navbar = styled.nav`
  background-color: ${(props) => props.theme.background.secondary};
  height: 60px;
  display: flex;
  align-items: center;
  transition: 0.5s;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 100%;
    li {
      padding: 10px;
      color: white;
      &:active {
        background-color: ${lighten(0.75, 'black')};
      }
    }
  }
`;
