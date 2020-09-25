import * as React from 'react';
import { ProductAPIContext } from '@md-sw-product/layers/api/product';

interface ProductInfo {
  label: string;
  value: string | number;
}

interface Context {
  productInfo: ProductInfo[];
  name: string | undefined;
  img: string | undefined;
  price: number | undefined;
}

const ProductBLContext = React.createContext<Context>({
  productInfo: [],
  name: undefined,
  img: undefined,
  price: undefined
});

const ProductBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { product } = React.useContext(ProductAPIContext);

  const productInfo = React.useMemo<ProductInfo[]>(() => {
    if (!product) {
      return [];
    }

    return [
      { label: 'Country', value: product.country },
      { label: 'Gender', value: product.gender },
      { label: 'Age', value: product.age }
    ];
  }, [typeof product === 'undefined']);
  const name = product?.name;
  const img = product?.img;
  const price = product?.price;
  return (
    <ProductBLContext.Provider
      value={{
        productInfo,
        name,
        img,
        price
      }}
    >
      {children}
    </ProductBLContext.Provider>
  );
};

export { ProductBLContextProvider, ProductBLContext };
