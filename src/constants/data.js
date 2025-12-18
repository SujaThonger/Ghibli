import images from './images';

const wines = [
  {
    title: 'Portfolio Websites',
    price: '2025',
    tags: 'Clean, stylish, and user-friendly portfolio websites designed and developed for multiple clients',
  },
  {
    title: 'Diabetic Foot Ulcer(DFU) detection using Deep learning',
    price: '2025',
    tags: 'A deep learning–based application that detects early stages of diabetic foot ulcers using infrared imaging',
  },
  {
    title: 'E-commerce website for Greensort',
    price: '2025',
    tags: 'An e-commerce website developed for a startup specializing in plant sales (greensort.in)',
  },
  {
    title: "Attentance through facial recogntion based system",
    price: '2024',
    tags: 'A facial recognition–based system designed to automate classroom attendance efficiently and accurately',
  },
  {
    title: 'MyArt (AR app)',
    price: '2021',
    tags: 'An augmented reality application that brings classical art to life through immersive digital experiences',
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
    title: 'Template Portfolio',
    subtitle: '₹500 – Quick one-page online portfolio using a pre-built template.  (Like this website)',
  },
  {
    imgUrl: images.award01,
    title: 'Custom Portfolio',
    subtitle: '₹3,000+ – Fully tailored portfolio. Additional pages: ₹1,000 per page.',
  },
  {
    imgUrl: images.award01,
    title: 'Landing Page',
    subtitle: "₹1,500 – Single-page website for events, promotions, or personal branding.",
  },
  {
    imgUrl: images.award01,
    title: 'Hosting Setup',
    subtitle: 'Free – Deploy your site on Vercel. Optional upgrades extra.',
  },
  {
    imgUrl: images.award01,
    title: 'Custom Domain Name',
    subtitle: 'Optional – I can help purchase and set up a domain at no extra charge.',
  },
];

export default { wines, cocktails, awards };