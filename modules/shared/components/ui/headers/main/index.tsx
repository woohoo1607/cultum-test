import * as React from 'react';
// view components
import { MenuItem } from '@md-ui/menu-items/main';
import { Logo } from '@md-ui/logos/main';
import { CartLogo } from '@md-ui/logos/cart';
// constants
import { menuItems } from './constants';
// views
import { Wrapper, IWrapper, LWrapper, RWrapper } from './views';
import { CartBLContext } from '@md-sw-cart/layers/business';

const Header = () => {
  const { openModalCart } = React.useContext(CartBLContext);
  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          {menuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
          <CartLogo openModalCart={openModalCart} />
        </RWrapper>
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
