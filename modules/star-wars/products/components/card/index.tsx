import * as React from 'react';
// views
import {
  CardWrapper,
  CardImgWrapper,
  CardHeader,
  CardHeaderTitle,
  CardImg,
  CardFooter,
  CardFooterTitle,
  ViewButton
} from './views';
// view components
import { ProductsLink } from '../products-link';

interface Props {
  id: string;
  name: string;
  img: string;
  price: string;
}

const Card: React.FC<Props> = ({ id, name, price, img }) => (
  <CardWrapper key={id}>
    <CardHeader>
      <ProductsLink pId={id}>
        <CardHeaderTitle>{name}</CardHeaderTitle>
      </ProductsLink>
    </CardHeader>
    <CardImgWrapper>
      <CardImg src={img} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <ProductsLink pId={id}>
        <ViewButton>Details</ViewButton>
      </ProductsLink>
      <CardFooterTitle>$ {price}</CardFooterTitle>
      <ViewButton>Buy</ViewButton>
    </CardFooter>
  </CardWrapper>
);

export { Card };
