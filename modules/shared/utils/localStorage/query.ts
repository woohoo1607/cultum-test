import * as React from 'react';

export interface ICart {
  id: string;
  quantity: number;
}

export const useLocalStorage = () => {
  if (process.browser) {
    const [value, setValue] = React.useState<ICart[]>(JSON.parse(localStorage.getItem('cart') as string) || []);
    localStorage.setItem('cart', JSON.stringify(value));

    return { value, setValue };
  }
  return { value: [], setValue: () => {} };
};
