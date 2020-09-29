import * as React from 'react';
// components
import Link from 'next/link';

interface Props {
  pId: string;
}

const ProductsLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/products/[id]' as={`/products/${pId}`}>
    <a>{children}</a>
  </Link>
);

export { ProductsLink };
