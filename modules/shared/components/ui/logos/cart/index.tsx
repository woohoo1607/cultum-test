import * as React from 'react';

import { Wrapper } from './views';
interface Props {
  openModalCart(): void;
  totalQuantity: number;
}
const CartLogo: React.FC<Props> = ({ openModalCart, totalQuantity }) => (
  <Wrapper>
    <img src='/static/icons/cart.png' alt='cart-logo' onClick={openModalCart} />
    {!!totalQuantity && <span>{totalQuantity}</span>}
  </Wrapper>
);

export { CartLogo };
