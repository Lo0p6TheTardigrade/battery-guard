import React from 'react';
import { Props } from '../types';

const Main = ({ children }: Props) => {
  return <main className="main-container">Main{children}</main>;
};

export default Main;
