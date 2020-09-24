import * as React from 'react';

interface Props {
  openModalCart(): void;
  totalQuantity: number;
}
const CartLogo: React.FC<Props> = ({ openModalCart, totalQuantity }) => (
  <>
    <img src='/static/icons/cart.png' alt='cart-logo' style={{ cursor: 'pointer' }} onClick={openModalCart} />
    {totalQuantity && <span>{totalQuantity}</span>}
  </>
);

export { CartLogo };
