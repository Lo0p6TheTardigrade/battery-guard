import React from 'react';
import { Props } from '../types';

const Img = ({ src, alt, classX, height, width }: Props) => {
  return (
    <div className="image-component-container">
      Img{' '}
      <img
        src={src}
        alt={alt}
        className={classX}
        height={height}
        width={width}
      />{' '}
    </div>
  );
};

export default Img;
