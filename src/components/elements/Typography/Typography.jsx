/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { oneOf, string } from 'prop-types';
import Typographies from './TypographyStyled';

const Typography = ({ type, color, ...rest }) => {
  const CPT = Typographies[type];
  return <CPT color={color} {...rest} />;
};

Typography.propTypes = {
  type: oneOf(['header', 'title', 'subtitle', 'text']),
  color: string,
};

Typography.defaultProps = {
  type: 'text',
};

export default Typography;
