import React from 'react';
import { string, number, bool } from 'prop-types';
import * as S from './ImageStyled';

const Image = ({ imgSrc, imgTitle, width, rounded }) => {
  return (
    <S.Image src={imgSrc} width={width} alt={imgTitle} rounded={rounded} />
  );
};

Image.propTypes = {
  imgSrc: string.isRequired,
  imgTitle: string.isRequired,
  width: number.isRequired,
  rounded: bool,
};

Image.defaultProps = {
  rounded: false,
};

export default Image;
