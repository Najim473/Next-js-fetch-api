const offer = [
  {
    id: 1,
    name: 'Early Winter Package',
    title: 'Enjoy your holiday at Sagor Konaa',
    picture: '/images/offers/2earlywinter.svg',
    desc: 'Sagor Konna Invites you all.',
    price: 7000,
  },
  {
    id: 2,
    name: 'Honeymoon Package',
    title:
      'Make your experience an unforgettable one with your partner at Sagor Konaa',
    picture: '/images/offers/1honeymoon.svg',
    desc: 'Sagor Konna Invites you all.',
    price: 8000,
  },
  {
    id: 0,
    name: 'Anniversary Celebration Package',
    title:
      'Make your experience an unforgettable one with your partner at Sagor Konaa',
    picture: '/images/offers/3saycation.svg',
    desc: 'Sagor Konna Invites you all.',
    price: 8000,
  },
  {
    id: 3,
    name: 'Working Day Packages',
    title: 'Enjoy your holiday at Sagor Konaa',
    picture: '/images/offers/4average.svg',
    desc: 'Sagor Konna Invites you all.',
    price: 6000,
  },
  {
    id: 4,
    name: 'Early Winter Family Package',
    title: 'Enjoy your holiday at Sagor Konaa',
    picture: '/images/offers/5family.svg',
    desc: 'Sagor Konna Invites you all.',
    price: 12000,
  },
];

export default function handler(req, res) {
  res.status(200).json(offer);
}
