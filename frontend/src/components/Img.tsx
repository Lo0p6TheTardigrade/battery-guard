import React from 'react';
import { Props } from '../types';

const Img = ({ src, alt, classX }: Props) => {
  return (
    <div className="image-component-container">
      Img{' '}
      <img
        src={src}
        alt={alt}
        className={classX}
      />{' '}
    </div>
  );
};

export default Img;
