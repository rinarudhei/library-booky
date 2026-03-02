type Category = {
  name: string;
  image: string;
  categoryId: number;
  alt: string;
};

export const categories: Category[] = [
  {
    name: 'Fiction',
    image: '/images/Fiksi.png',
    categoryId: 4,
    alt: 'Fiction category PNG image',
  },
  {
    name: 'Non-Fiction',
    image: '/images/Non-Fiction.png',
    alt: 'Non-Fiction category PNG image',
    categoryId: 5,
  },
  {
    name: 'Self-Improvement',
    categoryId: 7,
    image: '/images/Self-Improvement.png',
    alt: 'Self-Improvement category PNG image',
  },
  {
    name: 'Finance',
    image: '/images/Finance & Business.png',
    alt: 'Finance category PNG image',
    categoryId: 8,
  },
  {
    name: 'Science',
    image: '/images/Science & Technology.png',
    alt: 'Science category PNG image',
    categoryId: 11,
  },
  {
    name: 'Education',
    image: '/images/Education & Reference.png',
    alt: 'Education category PNG image',
    categoryId: 9,
  },
];
