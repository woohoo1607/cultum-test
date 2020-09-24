import * as React from 'react';
// view components
import { CartModal } from '@md-sw-cart/components/modal';
// views
import { Wrapper } from './views';
import { CartBLContext } from '../business';

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
