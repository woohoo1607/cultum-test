import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { Product, products } from '@md-modules/shared/mock';

interface Context {
  products: Product[] | [];
  isLoading: boolean;
}

const ProductsCartAPIContext = React.createContext<Context>({
  products: [],
  isLoading: false
});

const ProductsCartAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading } = useQuery(products);

  return (
    <ProductsCartAPIContext.Provider
      value={{
        products: data || [],
        isLoading: loading
      }}
    >
      {children}
    </ProductsCartAPIContext.Provider>
  );
};

export { ProductsCartAPIContextProvider, ProductsCartAPIContext };
