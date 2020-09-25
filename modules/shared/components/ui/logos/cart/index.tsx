import * as React from 'react';

import { Wrapper } from './views';
interface Props {
  openModalCart(): void;
  totalQuantity: number;
}
const CartLogo: React.FC<Props> = ({ openModalCart, totalQuantity }) => (
  <Wrapper onClick={openModalCart}>
    <img src='/static/icons/cart.png' alt='cart-logo' />
    {!!totalQuantity && <span>{totalQuantity}</span>}
  </Wrapper>
);

export { CartLogo };
