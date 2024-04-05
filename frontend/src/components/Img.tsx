import React from 'react';
import { Props } from '../types';

const Img = ({ src, alt }: Props) => {
  return (
    <div className="image-component-container">
      Img{' '}
      <img
        src=""
        alt={alt}
        className=""
      />{' '}
    </div>
  );
};

export default Img;
