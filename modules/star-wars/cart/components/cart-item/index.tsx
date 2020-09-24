import * as React from 'react';
// views
import {
  CartItemWrapper,
  CartItemTitle,
  CartItemImgWrapper,
  CartItemImg,
  CartItemInfo,
  CartItemHeader,
  DeleteButton,
  CartItemBody,
  CartItemPrice,
  CartItemTotalPrice
} from './views';
import { CartItemQuantity } from '../cart-item-quantity';

const CartItem = () => (
  <CartItemWrapper>
    <CartItemImgWrapper>
      <CartItemImg src={'https://hotline.ua/img/tx/235/2354952435.jpg'} alt='img' />
    </CartItemImgWrapper>
    <CartItemInfo>
      <CartItemHeader>
        <CartItemTitle> Product Title </CartItemTitle>
        <DeleteButton>
          <img src='/static/icons/delete-icon.png' alt='delete-icon' />
        </DeleteButton>
      </CartItemHeader>
      <CartItemBody>
        <CartItemQuantity />
        <CartItemPrice>x $130</CartItemPrice>
        <CartItemTotalPrice>$260</CartItemTotalPrice>
      </CartItemBody>
    </CartItemInfo>
  </CartItemWrapper>
);

export { CartItem };
