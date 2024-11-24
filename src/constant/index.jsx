const K = {
  NAVLINKS: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Events',
      path: '#',
      dropdown: [
        {
          name: 'Event One',
          path: '/products/product-one',
        },
        {
          name: 'Event Two',
          path: '/products/product-two',
        },
        {
          name: 'Event Three',
          path: '/products/product-three',
        },
      ],
    },

    {
      name: 'Contact',
      path: '/contact',
    },
  ],
};

export default K;
