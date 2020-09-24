import * as React from 'react';
// views
import { CartItemQuantityWrapper, CartItemQuantityButton, CartItemQuantityP } from './views';

const CartItemQuantity = () => (
  <CartItemQuantityWrapper>
    <CartItemQuantityButton>-</CartItemQuantityButton>
    <CartItemQuantityP>2</CartItemQuantityP>
    <CartItemQuantityButton>+</CartItemQuantityButton>
  </CartItemQuantityWrapper>
);

export { CartItemQuantity };
