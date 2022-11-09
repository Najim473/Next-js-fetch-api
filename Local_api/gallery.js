const gallery = [
    {
        id: 1,
        galleryImg: '/images/Gallary/img-01.jpg'
    },
    {
        id: 2,
        galleryImg: '/images/Gallary/img-14.jpg'
    },
    {
        id: 3,
        galleryImg: '/images/Gallary/img-03.jpg'
    },
    {
        id: 5,
        galleryImg: '/images/Gallary/img-15.jpg'
    },
    {
        id: 6,
        galleryImg: '/images/Gallary/img-05.jpg'

    },
    {
        id: 7,
        galleryImg: '/images/Gallary/img-06.jpg'
    },
    {
        id: 8,
        galleryImg: '/images/Gallary/img-07.jpg'
    },
    {
        id: 9,
        galleryImg: '/images/Gallary/img-16.jpg'
    },
    {
        id: 10,
        galleryImg: '/images/Gallary/img-18.jpg'
    },
    {
        id: 11,
        galleryImg: '/images/Gallary/img-10.jpg'
    },
];
export default function handler(req, res) {
    res.status(200).json(gallery)
}