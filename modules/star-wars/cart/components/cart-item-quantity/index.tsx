import * as React from 'react';
// views
import { CartItemQuantityWrapper, CartItemQuantityButton, CartItemQuantityP } from './views';

interface Props {
  quantity: number;
  addItem(): void;
  subtractItem(): void;
}

const CartItemQuantity: React.FC<Props> = ({ quantity, addItem, subtractItem }) => (
  <CartItemQuantityWrapper>
    <CartItemQuantityButton onClick={subtractItem}>-</CartItemQuantityButton>
    <CartItemQuantityP>{quantity}</CartItemQuantityP>
    <CartItemQuantityButton onClick={addItem}>+</CartItemQuantityButton>
  </CartItemQuantityWrapper>
);

export { CartItemQuantity };
