import * as React from 'react';
import { CartPresentation } from '@md-sw-cart/layers/presentation';
import { CartBLContextProvider } from './layers/business';
import { ProductsCartAPIContextProvider } from './layers/api/products';

const CartContainer: React.FC = ({ children }) => (
  <ProductsCartAPIContextProvider>
    <CartBLContextProvider>
      {children}
      <CartPresentation />
    </CartBLContextProvider>
  </ProductsCartAPIContextProvider>
);

export { CartContainer };
