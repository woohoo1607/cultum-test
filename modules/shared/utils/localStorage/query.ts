import * as React from 'react';

export interface ICart {
  id: string;
  quantity: number;
}

export const useLocalStorage = (name: string) => {
  if (process.browser) {
    const [value, setValue] = React.useState<ICart[]>(JSON.parse(localStorage.getItem(name) as string) || []);
    localStorage.setItem(name, JSON.stringify(value));

    return { value, setValue };
  }
  return { value: [], setValue: () => {} };
};
