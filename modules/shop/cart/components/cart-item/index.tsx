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
import { CartLink } from '../cart-link';
interface Props {
  id: string;
  name: string;
  img: string;
  price: number;
  quantity: number;
  deleteFromCart(id: string): void;
  addToCart(id: string): void;
  subtractFromCart(id: string): void;
}
const CartItem: React.FC<Props> = ({ name, img, quantity, id, price, subtractFromCart, deleteFromCart, addToCart }) => {
  const deleteItem = (id: string) => () => {
    deleteFromCart(id);
  };
  const addItem = () => {
    addToCart(id);
  };
  const subtractItem = () => {
    subtractFromCart(id);
  };
  return (
    <CartItemWrapper>
      <CartItemImgWrapper>
        <CartItemImg src={img} alt={`${name}-${id}`} />
      </CartItemImgWrapper>
      <CartItemInfo>
        <CartItemHeader>
          <CartLink pId={id}>
            <CartItemTitle> {name} </CartItemTitle>
          </CartLink>
          <DeleteButton onClick={deleteItem(id)}>
            <img src='/static/icons/delete-icon.png' alt='delete-icon' />
          </DeleteButton>
        </CartItemHeader>
        <CartItemBody>
          <CartItemQuantity quantity={quantity} addItem={addItem} subtractItem={subtractItem} />
          <CartItemPrice>x ${price}</CartItemPrice>
          <CartItemTotalPrice>${price * quantity}</CartItemTotalPrice>
        </CartItemBody>
      </CartItemInfo>
    </CartItemWrapper>
  );
};

export { CartItem };
