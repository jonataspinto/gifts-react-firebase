import React from 'react';
import Button from '../Button/index'
import {Img, Cards} from './styles'
// import { Container } from './styles';

export default function Card(props) {
  const{action, value, fontSize, imgSrc, name, background, to} = props
  return (
    <Cards background={background}>
      <Img src={imgSrc}/>
      <h2>{name}</h2>
      { value && 
        <Button 
          action={action} 
          value={value} 
          fontSize={fontSize}
          to= {to}
        />
      }
      {props.children}
    </Cards>
  );
}
