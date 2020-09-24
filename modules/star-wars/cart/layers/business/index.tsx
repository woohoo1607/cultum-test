import * as React from 'react';
// utils
import { CartProduct } from '@md-utils/localStorage/query';

interface Context {
  productsList: CartProduct[] | [];
  setCart?: React.Dispatch<any>;
  isOpen: boolean;
  closeModalCart(): void;
  openModalCart(): void;
}
/*const {value: productsList, setValue: setCart} = useLocalStorage();*/

const CartBLContext = React.createContext<Context>({
  productsList: [{ id: '1', quantity: 2 }],
  isOpen: false,
  closeModalCart: () => {},
  openModalCart: () => {}
});
const CartBLContextProvider: React.FC = ({ children }) => {
  const [productsList, setCart] = React.useState<CartProduct[] | []>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const closeModalCart = () => {
    setIsOpen(false);
  };
  const openModalCart = () => {
    setIsOpen(true);
  };

  const context = {
    productsList,
    setCart,
    isOpen,
    closeModalCart,
    openModalCart
  };
  return <CartBLContext.Provider value={context}>{children}</CartBLContext.Provider>;
};

export { CartBLContextProvider, CartBLContext };
