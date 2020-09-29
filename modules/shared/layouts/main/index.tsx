import * as React from 'react';
// view components
import { Header } from '@md-ui/headers/main';
import { CartContainer } from '@md-shop-cart/index';
// views
import { Wrapper } from './views';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <CartContainer>
        <Header />
        {children}
      </CartContainer>
    </Wrapper>
  );
};

export { MainLayout };
