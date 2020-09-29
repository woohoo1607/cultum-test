import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { ProductContainer } from '@md-shop-product/index';

const ProductPage = () => {
  return (
    <MainLayout>
      <ProductContainer />
    </MainLayout>
  );
};

export default ProductPage;
