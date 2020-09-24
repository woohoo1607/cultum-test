import * as React from 'react';

interface Props {
  openModalCart(): void;
}
const CartLogo: React.FC<Props> = ({ openModalCart }) => (
  <img src='/static/icons/cart.png' alt='cart-logo' style={{ cursor: 'pointer' }} onClick={openModalCart} />
);

export { CartLogo };
