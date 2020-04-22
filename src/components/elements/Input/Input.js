import React from 'react';
import { string, func } from 'prop-types';
import * as S from './InputStyle';

const Input = ({ type, value, name, onChange }) => {
  return <S.Input type={type} value={value} name={name} onChange={onChange} />;
};

Input.propTypes = {
  type: string,
  value: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
