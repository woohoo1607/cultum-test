import * as React from 'react';

export interface CartProduct {
  id: string;
  quantity: number;
}

export const useLocalStorage = () => {
  const [value, setValue] = React.useState<CartProduct[]>(JSON.parse(localStorage.getItem('cart') as string) || []);

  localStorage.setItem('cart', JSON.stringify(value));

  return { value, setValue };
};
