import * as React from 'react';
import { ProductsAPIContextProvider } from '@md-shop-products/layers/api/products';
import { ProductsBLContextProvider } from '@md-shop-products/layers/business';
import { ProductsPresentation } from '@md-shop-products/layers/presentation';

const ProductsContainer = () => (
  <ProductsAPIContextProvider>
    <ProductsBLContextProvider>
      <ProductsPresentation />
    </ProductsBLContextProvider>
  </ProductsAPIContextProvider>
);

export { ProductsContainer };
