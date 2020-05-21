import React from 'react';
import { string, node, bool } from 'prop-types';
import * as S from './CardStyle';

const Card = ({ children, isCardLoading, background }) => (
  <S.Card isCardLoading={isCardLoading} background={background}>
    {children}
  </S.Card>
);

Card.propTypes = {
  children: node.isRequired,
  isCardLoading: bool,
  background: string,
};

Card.defaultProps = {
  isCardLoading: false,
  background: '#fff',
};

export default Card;
