export interface Person {
  name: string;
  id: string;
  hair_color: string;
  skin_color: string;
  gender: string;
  eye_color: string;
  birth_year: string;
}

export const people: Person[] = [
  {
    name: 'Ben Kenobi',
    id: '1',
    hair_color: 'blond',
    skin_color: 'fair',
    gender: 'male',
    eye_color: 'blue',
    birth_year: '19BBY'
  },
  {
    name: 'Luke Skywalker',
    id: '2',
    hair_color: 'gold',
    skin_color: 'yellow',
    gender: 'male',
    eye_color: 'yellow',
    birth_year: '112BBY'
  },
  {
    name: 'R2-D2',
    id: '3',
    hair_color: 'red',
    skin_color: 'white',
    gender: 'n/a',
    eye_color: 'red',
    birth_year: '33BBY'
  },
  {
    name: 'Darth Vader',
    id: '4',
    hair_color: 'brown',
    skin_color: 'light',
    gender: 'female',
    eye_color: 'yellow',
    birth_year: '41.9BBY'
  },
  {
    name: 'Leia Organa',
    id: '5',
    hair_color: 'brown',
    skin_color: 'light',
    gender: 'female',
    eye_color: 'brown',
    birth_year: '19BBY'
  },
  {
    name: 'Owen Lars',
    id: '6',
    hair_color: 'blond',
    skin_color: 'light',
    gender: 'female',
    eye_color: 'blue',
    birth_year: '52BBY'
  }
];

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
    img:
      'https://www.brickfanatics.com/wp-content/uploads/LEGO-Star-Wars-75292-The-Mandalorian-Bounty-Hunter-Transport-The-Razor-Crest-review-30.jpg'
  }
];
