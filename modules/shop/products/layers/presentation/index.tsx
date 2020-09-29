import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '@md-shop-products/components/card';
// context
import { ProductsAPIContext } from '@md-shop-products/layers/api/products';
import { ProductsBLContext } from '@md-shop-products/layers/business';
import { CartBLContext } from '@md-shop-cart/layers/business';
// views
import { Wrapper } from './views';

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
