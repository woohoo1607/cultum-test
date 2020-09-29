import * as React from 'react';
// view components
import { CartModal } from '@md-shop-cart/components/modal';
// views
import { Wrapper } from './views';
import { CartBLContext } from '@md-shop-cart/layers/business';

const CartPresentation = () => {
  const { isOpen } = React.useContext(CartBLContext);
  return (
    <>
      {isOpen && (
        <Wrapper>
          <CartModal />
        </Wrapper>
      )}
    </>
  );
};

export { CartPresentation };
