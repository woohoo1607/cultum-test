import * as React from 'react';
import { ProductPresentation } from '@md-sw-product/layers/presentation';
import { ProductAPIContextProvider } from '@md-sw-product/layers/api/product';
import { ProductBLContextProvider } from '@md-sw-product/layers/business';

const ProductContainer = () => (
  <ProductAPIContextProvider>
    <ProductBLContextProvider>
      <ProductPresentation />
    </ProductBLContextProvider>
  </ProductAPIContextProvider>
);

export { ProductContainer };
