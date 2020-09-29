import * as React from 'react';
import { ProductPresentation } from '@md-shop-product/layers/presentation';
import { ProductAPIContextProvider } from '@md-shop-product/layers/api/product';
import { ProductBLContextProvider } from '@md-shop-product/layers/business';

const ProductContainer = () => (
  <ProductAPIContextProvider>
    <ProductBLContextProvider>
      <ProductPresentation />
    </ProductBLContextProvider>
  </ProductAPIContextProvider>
);

export { ProductContainer };
