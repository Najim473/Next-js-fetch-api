const serviceData = [
  {
    id: 1,
    title: 'Lounge Bar',
    img: '/images/services/service1bar.jpg',
    description: 'Officiis deleniti, veritatis laudantium! Qudantium dolorem!',
  },
  {
    id: 2,
    title: 'Swimming Pools',
    img: '/images/services/service2pool.jpg',
    description: 'Officiis deleniti, veritatis laudantium! Qudantium dolorem!',
  },
  {
    id: 3,
    title: 'Restaurant',
    img: '/images/services/service3restaurant.jpg',
    description: 'Officiis deleniti, veritatis laudantium! Qudantium dolorem!',
  },
];
export default function handler(req, res) {
  res.status(200).json(serviceData);
}
