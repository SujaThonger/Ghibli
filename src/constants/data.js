import images from './images';

const wines = [
  {
    title: 'Born into this world',
    price: '2001',
    tags: 'Mon, Nagaland',
  },
  {
    title: "Matriculation",
    price: '2018',
    tags: 'The Vineyard School, Kohima',
  },
  {
    title: 'Higher Secondary',
    price: '2020',
    tags: 'Mezhur Higher Secondary School, Kohima',
  },
  {
    title: 'Intern at Greensort',
    price: '2025',
    tags: 'Chennai, Tamil Nadu',
  },
  {
    title: 'B.Tech (CSE)',
    price: '2025',
    tags: 'Vel Tech University, Chennai',
  },
];

const cocktails = [
  {
    title: 'Celebrated first birthday',
    price: '2002',
    tags: '',
  },
  {
    title: "Moved to Kohima",
    price: '2003',
    tags: '',
  },
  {
    title: "Father's Death",
    price: '2007',
    tags: '',
  },
  {
    title: 'Baptism',
    price: '2019',
    tags: '',
  },
  {
    title: 'Moved to Delhi',
    price: '2025',
    tags: '',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Favourite Movie',
    subtitle: 'Your name(2016)',
  },
  {
    imgUrl: images.award01,
    title: 'Favourite Band',
    subtitle: 'Artic Monkeys',
  },
  {
    imgUrl: images.award01,
    title: 'Hobby',
    subtitle: "Creative activities like music,art,poetry",
  },
  {
    imgUrl: images.award01,
    title: 'Favourite Football Club',
    subtitle: 'Manchester United',
  },
  {
    imgUrl: images.award01,
    title: 'Something I want to do before I die',
    subtitle: 'Visit all the seven wonders of the world',
  },
  {
    imgUrl: images.award01,
    title: 'Favourite Animal',
    subtitle: 'Otters',
  },
];

export default { wines, cocktails, awards };