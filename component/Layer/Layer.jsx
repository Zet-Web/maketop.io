import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layer = ({ children, type }) => {
  return (
    <div>
      <Header type={type} />
      {children}
      <Footer />
    </div>
  );
};
