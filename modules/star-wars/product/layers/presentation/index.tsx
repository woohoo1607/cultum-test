import * as React from 'react';
// context
import { ProductAPIContext } from '@md-sw-product/layers/api/product';
import { ProductBLContext } from '@md-sw-product/layers/business';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { ProductInfo } from '@md-sw-product/components/product-info';
// views
import {
  ContentWrapper,
  ProductDetailsContainer,
  ProductImgContainer,
  ProductInfoContainer,
  ProductName,
  ProductPriceContainer,
  ProductPrice,
  BuyButton,
  Back,
  Wrapper
} from './views';
import { CartBLContext } from '@md-sw-cart/layers/business';
import { useRouter } from 'next/router';

const ProductPresentation = () => {
  const { query, back } = useRouter();
  const { isLoading } = React.useContext(ProductAPIContext);
  const { productInfo, name, img, price } = React.useContext(ProductBLContext);
  const { addToCart } = React.useContext(CartBLContext);
  const add = () => {
    addToCart(query.id as string);
  };
  return (
    <ContentWrapper>
      <Back>
        <img src='/static/icons/back-icon.png' onClick={back} alt='back-icon' />
      </Back>
      <Wrapper>
        <ContentLoader isLoading={isLoading}>
          <ProductImgContainer>
            <img src={img} alt={name} />
          </ProductImgContainer>
          <ProductDetailsContainer>
            <ProductName>{name}</ProductName>
            <ProductInfoContainer>
              {productInfo.map((i, idx) => (
                <ProductInfo key={idx} {...i} />
              ))}
            </ProductInfoContainer>
            <ProductPriceContainer>
              <ProductPrice>$ {price}</ProductPrice>
              <BuyButton onClick={add}>Buy</BuyButton>
            </ProductPriceContainer>
          </ProductDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { ProductPresentation };
