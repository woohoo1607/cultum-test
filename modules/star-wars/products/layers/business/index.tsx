import * as React from 'react';
// context
import { ProductsAPIContext } from '@md-sw-products/layers/api/products';
// mock
import { Product } from '@md-modules/shared/mock';

interface Context {
  productsList: Pick<Product, 'id' | 'name' | 'img'>[];
}

const ProductsBLContext = React.createContext<Context>({
  productsList: []
});

const ProductsBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { products } = React.useContext(ProductsAPIContext);

  const productsList = React.useMemo<Pick<Product, 'id' | 'name' | 'img' | 'price'>[]>(() => {
    if (!products) {
      return [];
    }

    return products.map(({ id, name, img, price }) => ({
      name,
      id,
      img,
      price
    }));
  }, [typeof products === 'undefined']);

  return (
    <ProductsBLContext.Provider
      value={{
        productsList
      }}
    >
      {children}
    </ProductsBLContext.Provider>
  );
};

export { ProductsBLContextProvider, ProductsBLContext };
