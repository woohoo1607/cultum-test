import * as React from 'react';
// utils
import { ICart, useLocalStorage } from '@md-utils/localStorage/query';
import { Product } from '@md-modules/shared/mock';
import { ProductsCartAPIContext } from '../api/products';

export interface CartProduct extends Product {
  quantity: number;
}

interface Context {
  productsList: Pick<CartProduct, 'id' | 'name' | 'img' | 'price' | 'quantity'>[];
  setCart?: React.Dispatch<any>;
  isOpen: boolean;
  closeModalCart(): void;
  openModalCart(): void;
  addToCart(id: string): void;
  deleteFromCart(id: string): void;
  subtractFromCart(id: string): void;
}

const CartBLContext = React.createContext<Context>({
  productsList: [],
  isOpen: false,
  closeModalCart: () => {},
  openModalCart: () => {},
  addToCart: () => {},
  deleteFromCart: () => {},
  subtractFromCart: () => {}
});
const CartBLContextProvider: React.FC = ({ children }) => {
  const { value: Cart, setValue: setCart } = useLocalStorage('cart');
  const [isOpen, setIsOpen] = React.useState(false);
  const { products } = React.useContext(ProductsCartAPIContext);
  // @ts-ignore
  const productsList = React.useMemo<Pick<CartProduct, 'id' | 'name' | 'img' | 'price' | 'quantity'>[]>(() => {
    if (!products.length || !Cart.length) {
      return [];
    }
    return Cart.map(({ id, quantity }: ICart) => {
      const product: Product = products.filter((product: Product) => product.id === id)[0];
      if (!product) {
        return;
      }
      return {
        id,
        quantity,
        name: product.name,
        img: product.img,
        price: product.price
      };
    });
  }, [products, Cart]);

  const closeModalCart = () => {
    setIsOpen(false);
  };
  const openModalCart = () => {
    setIsOpen(true);
  };

  const addToCart = (id: string) => {
    const copyCart = JSON.parse(JSON.stringify(Cart));
    const index = copyCart.findIndex((p: ICart) => p.id === id);
    if (index === -1) {
      copyCart.push({ id: id, quantity: 1 });
    } else {
      copyCart[index].quantity = copyCart[index].quantity + 1;
    }
    setCart(copyCart);
  };

  const subtractFromCart = (id: string) => {
    const copyCart = JSON.parse(JSON.stringify(Cart));
    const index = copyCart.findIndex((p: ICart) => p.id === id);
    if (index !== -1 && copyCart[index].quantity > 1) {
      copyCart[index].quantity = copyCart[index].quantity - 1;
    } else {
      copyCart.splice(index, 1);
    }
    setCart(copyCart);
    if (!copyCart.length) {
      closeModalCart();
    }
  };

  const deleteFromCart = (id: string) => {
    const copyCart = JSON.parse(JSON.stringify(Cart));
    const index = copyCart.findIndex((p: ICart) => p.id === id);
    if (index !== -1) {
      copyCart.splice(index, 1);
      setCart(copyCart);
    }
    if (!copyCart.length) {
      closeModalCart();
    }
  };

  const context = {
    productsList,
    setCart,
    isOpen,
    closeModalCart,
    openModalCart,
    addToCart,
    deleteFromCart,
    subtractFromCart
  };
  return <CartBLContext.Provider value={context}>{children}</CartBLContext.Provider>;
};

export { CartBLContextProvider, CartBLContext };
