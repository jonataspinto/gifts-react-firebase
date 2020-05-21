import styled from 'styled-components';

const header = styled.h1`
  color: ${props => props.color};
`;

const title = styled.h2`
  color: ${props => props.color};
`;

const subtitle = styled.h3`
  color: ${props => props.color};
`;

const text = styled.p`
  color: ${props => props.color};
  font-size: 16px;
`;

export default { header, title, subtitle, text };
