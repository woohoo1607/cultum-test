export interface Product {
  name: string;
  id: string;
  country: string;
  gender: string;
  age: number;
  price: number;
  img: string;
}

export const products: Product[] = [
  {
    name: 'Lego Star Wars',
    id: '1',
    country: 'Denmark',
    gender: 'boy',
    age: 10,
    price: 80,
    img: 'https://antoshka.ua/media/catalog/product/cache/1/image/840x/602f0fa2c1f0d1ba5e241f914e856ff9/6/2/6200466.jpg'
  },
  {
    name: 'Lego Star Wars Kylo Ren`s Shuttle',
    id: '2',
    country: 'Denmark',
    gender: 'boy',
    age: 10,
    price: 130,
    img: 'https://hotline.ua/img/tx/235/2354952435.jpg'
  },
  {
    name: 'Lego Star Wars Millennium Falcon',
    id: '3',
    country: 'Denmark',
    gender: 'boy',
    age: 9,
    price: 170,
    img: 'https://planettoys.ua/wp-content/uploads/lego-72557-planettoys-ua-5-1280x925.jpg'
  },
  {
    name: 'Lego Star Wars Sith TIE Fighter',
    id: '4',
    country: 'Denmark',
    gender: 'unisex',
    age: 9,
    price: 100,
    img: 'https://bi.ua/uploaded-images/products_photos/550480_2.jpg'
  },
  {
    name: 'Lego Star Wars The Mandalorian Bounty Hunter',
    id: '5',
    country: 'Denmark',
    gender: 'unisex',
    age: 9,
    price: 129,
    img: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/starwars-lego-mandalorian-frontpage-700x303.jpg'
  }
];
