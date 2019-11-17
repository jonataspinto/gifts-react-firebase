import React from 'react';

// import { Container } from './styles';

export default function Input(props) {
  return (
    <div>
        <input type={props.type} value={props.value} name={props.name} onChange={props.onChange}></input>
    </div>
  );
}
