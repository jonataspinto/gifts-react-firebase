import React from 'react';
import { string, node, func } from 'prop-types';
import Button from '../Button';
import { Img, Cards } from './CardStyle';

const Card = ({
  action,
  value,
  fontSize,
  imgSrc,
  name,
  background,
  to,
  children,
}) => (
  <Cards background={background}>
    <Img src={imgSrc} />
    <h2>{name}</h2>
    {value && (
      <Button action={action} value={value} fontSize={fontSize} to={to} />
    )}
    {children}
  </Cards>
);

Card.propTypes = {
  children: node.isRequired,
};

export default Card;
