import React from 'react';
import * as S from './InputStyle'

export default function Input(props) {
  return (
    <S.Input
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
    />
  );
}
