import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';

export const links = [
    {
        id: 1,
        text: 'home',
        url: '/',
    },
    {
        id: 2,
        text: 'about',
        url: '/about',
    },
    {
        id: 3,
        text: 'products',
        url: '/products',
    },
]

export const services = [
    {
        id: 1,
        icon: <GiCompass />,
        title: 'mission',
        text: 'Morbi molestie felis eros, id venenatis nunc finibus eu. Curabitur tincidunt hendrerit diam non tempus. Quisque maximus, quam et pharetra volutpat, ligula nibh finibus turpis, vitae ultricies lacus risus id.'
    },
    {
        id: 2,
        icon: <GiDiamondHard />,
        title: 'vision',
        text: 'Curabitur quis mollis dui. Integer vitae tristique turpis. Maecenas tortor sem, finibus sed sodales at, dictum quis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque feugiat.'
    },
    {
        id: 3,
        icon: <GiStabbedNote />,
        title: 'mission',
        text: 'Fusce molestie, lectus sit amet facilisis consequat, purus libero feugiat ipsum, ac malesuada tellus leo feugiat justo. Nunc sit amet luctus mi. Quisque sit amet turpis dolor. In vitae vulputate.'
    },
]

export const products_url = 'https://bejewelled-churros-9a5216.netlify.app/productsnew.json'