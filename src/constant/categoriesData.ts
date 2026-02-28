type Category = {
  name: string;
  image: string;
  alt: string;
};

export const categories: Category[] = [
  {
    name: 'Fiction',
    image: '/images/Fiksi.png',
    alt: 'Fiction category PNG image',
  },
  {
    name: 'Non-Fiction',
    image: '/images/Non-Fiction.png',
    alt: 'Non-Fiction category PNG image',
  },
  {
    name: 'Self-Improvement',
    image: '/images/Self-Improvement.png',
    alt: 'Self-Improvement category PNG image',
  },
  {
    name: 'Finance',
    image: '/images/Finance & Business.png',
    alt: 'Finance category PNG image',
  },
  {
    name: 'Science',
    image: '/images/Science & Technology.png',
    alt: 'Science category PNG image',
  },
  {
    name: 'Education',
    image: '/images/Education & Reference.png',
    alt: 'Education category PNG image',
  },
];
