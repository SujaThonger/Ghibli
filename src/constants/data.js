import images from './images';

const wines = [
  {
    title: 'The Tale of the Princess Kaguya',
    price: '2013',
    tags: 'Directed by Isao Takahata',
  },
  {
    title: 'Only Yesterday',
    price: '1991',
    tags: 'Directed by Isao Takahata',
  },
  {
    title: "Kiki's Delivery Service",
    price: '1989',
    tags: 'Directed by Hayao Miyazaki',
  },
  {
    title: 'Grave of the Fireflies',
    price: '1988',
    tags: 'Directed by Isao Takahata',
  },
  {
    title: 'Spirited Away',
    price: '2001',
    tags: 'Directed by Hayao Miyazaki',
  },
];

const cocktails = [
  {
    title: 'The Boy and the Heron',
    price: '2023',
    tags: 'Directed by Hayao Miyazaki',
  },
  {
    title: "The Secret World of Arrietty",
    price: '2010',
    tags: 'Directed by Hiromasa Yonebayashi,Gary Rydstrom',
  },
  {
    title: 'Princess Mononoke',
    price: '1997',
    tags: 'Directed by Hayao Miyazaki',
  },
  {
    title: 'My Neighbour Totoro',
    price: '1988',
    tags: 'Directed by Hayao Miyazaki',
  },
  {
    title: 'When Marnie Was There',
    price: '2014',
    tags: 'Directed by Hiromasa Yonebashi',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Academy Award for Best Animated Feature',
    subtitle: 'Spirited Away(2001)',
  },
  {
    imgUrl: images.award01,
    title: 'Academy Award for Best Animated Feature',
    subtitle: 'The Boy and the Heron(2023)',
  },
  {
    imgUrl: images.award01,
    title: 'Animation of the year',
    subtitle: "Howl's Moving Castle(2004)",
  },
  {
    imgUrl: images.award01,
    title: 'Animation of the year',
    subtitle: 'Ponyo(2009)',
  },
  {
    imgUrl: images.award01,
    title: 'Japan Academy Prize for Picture  of the Year',
    subtitle: 'Princess Mononoke(1997)',
  },
  {
    imgUrl: images.award01,
    title: 'Academy Honorary Award',
    subtitle: 'Hayao Miyazaki(2014)',
  },
];

export default { wines, cocktails, awards };