import * as React from 'react';
// views
import {
  ModalWrapper,
  ModalHeader,
  ModalHeaderLeft,
  ModalHeaderTitle,
  Button,
  EmptyCart,
  ModalFooter,
  ModalFooterTitle
} from './views';
import { CartItem } from '../cart-item';
import { CartBLContext } from '@md-sw-cart/layers/business';

const CartModal = () => {
  const { productsList, closeModalCart, deleteFromCart, addToCart, subtractFromCart } = React.useContext(CartBLContext);
  const TotalPrice = productsList.reduce((sum: number, { quantity, price }) => {
    return sum + quantity * price;
  }, 0);
  const isProduct = productsList.length > 0;
  return (
    <ModalWrapper>
      <ModalHeader>
        <ModalHeaderLeft />
        <ModalHeaderTitle>Cart</ModalHeaderTitle>
        <Button onClick={closeModalCart}>X</Button>
      </ModalHeader>
      {!isProduct && <EmptyCart>The cart is empty =(</EmptyCart>}
      {isProduct && (
        <>
          {productsList.map((product) => (
            <CartItem
              {...product}
              deleteFromCart={deleteFromCart}
              addToCart={addToCart}
              subtractFromCart={subtractFromCart}
              key={product.id}
            />
          ))}
          <ModalFooter>
            <ModalFooterTitle>Sum: ${TotalPrice}</ModalFooterTitle>
            <Button>Buy</Button>
          </ModalFooter>
        </>
      )}
    </ModalWrapper>
  );
};

export { CartModal };
