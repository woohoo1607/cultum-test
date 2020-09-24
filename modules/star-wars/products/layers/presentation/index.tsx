import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '@md-sw-products/components/card';
// context
import { ProductsAPIContext } from '@md-sw-products/layers/api/products';
import { ProductsBLContext } from '@md-sw-products/layers/business';
// views
import { Wrapper } from './views';
import { CartBLContext } from '@md-sw-cart/layers/business';

const ProductsPresentation = () => {
  const { isLoading } = React.useContext(ProductsAPIContext);
  const { productsList } = React.useContext(ProductsBLContext);
  const { addToCart } = React.useContext(CartBLContext);
  return (
    <Wrapper>
      <ContentLoader isLoading={isLoading}>
        {productsList.map((product) => (
          <Card {...product} addToCart={addToCart} key={product.id} />
        ))}
      </ContentLoader>
    </Wrapper>
  );
};

export { ProductsPresentation };
