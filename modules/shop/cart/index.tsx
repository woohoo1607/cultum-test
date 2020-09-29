import * as React from 'react';
import { CartPresentation } from '@md-shop-cart/layers/presentation';
import { CartBLContextProvider } from '@md-shop-cart/layers/business';
import { ProductsCartAPIContextProvider } from '@md-shop-cart/layers/api/products';

const CartContainer: React.FC = ({ children }) => (
  <ProductsCartAPIContextProvider>
    <CartBLContextProvider>
      {children}
      <CartPresentation />
    </CartBLContextProvider>
  </ProductsCartAPIContextProvider>
);

export { CartContainer };
