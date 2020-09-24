import * as React from 'react';
// views
import {
  ModalWrapper,
  ModalHeader,
  ModalHeaderLeft,
  ModalHeaderTitle,
  Button,
  ModalFooter,
  ModalFooterTitle
} from './views';
import { CartItem } from '../cart-item';
import { CartBLContext } from '@md-sw-cart/layers/business';

const CartModal = () => {
  const { closeModalCart } = React.useContext(CartBLContext);
  return (
    <ModalWrapper>
      <ModalHeader>
        <ModalHeaderLeft />
        <ModalHeaderTitle>Cart</ModalHeaderTitle>
        <Button onClick={closeModalCart}>X</Button>
      </ModalHeader>
      <CartItem />
      <ModalFooter>
        <ModalFooterTitle>Sum: $260</ModalFooterTitle>
        <Button>Buy</Button>
      </ModalFooter>
    </ModalWrapper>
  );
};

export { CartModal };
