import * as React from 'react';
import { ProductsAPIContextProvider } from '@md-sw-products/layers/api/products';
import { ProductsBLContextProvider } from '@md-sw-products/layers/business';
import { ProductsPresentation } from '@md-sw-products/layers/presentation';

const ProductsContainer = () => (
  <ProductsAPIContextProvider>
    <ProductsBLContextProvider>
      <ProductsPresentation />
    </ProductsBLContextProvider>
  </ProductsAPIContextProvider>
);

export { ProductsContainer };
