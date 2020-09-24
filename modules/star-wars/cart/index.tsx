import * as React from 'react';
import { CartPresentation } from '@md-sw-cart/layers/presentation';
import { CartBLContextProvider } from './layers/business';

const CartContainer: React.FC = ({ children }) => (
  <CartBLContextProvider>
    {children}
    <CartPresentation />
  </CartBLContextProvider>
);

export { CartContainer };
