const product =  [
    {
      id: 1,
      category: 'shirts',
      title: "man cloths",
      amazonLink: 'https://amzn.to/3PuckZp',
      description: 'Apple iPhone 14 (128 GB) - Blue',
      price: '2000',
    },
    {
        id: 2,
        category: 't-shirts',
        title: "man cloths",
        amazonLink: 'https://amzn.to/3PuckZp',
        description: 'Apple iPhone 14 (128 GB) - Blue',
        price: '4000',
    },
    {
        id: 3,
        category: 'tops',
        title: "women cloths",
        amazonLink: 'https://amzn.to/3PuckZp',
        description: 'Apple iPhone 14 (128 GB) - Blue',
        price: '1000',
    },
    {
        id: 4,
        category: 'jean',
        title: "women cloths",
        amazonLink: 'https://amzn.to/3PuckZp',
        description: 'Apple iPhone 14 (128 GB) - Blue',
        price: '5000',
    },
    {
        id: 5,
        category: 'frocks',
        title: "girls cloths",
        amazonLink: 'https://amzn.to/3PuckZp',
        description: 'Apple iPhone 14 (128 GB) - Blue',
        price: '7000',
    },
    {
        id: 6,
        category: 'jeans',
        title: "boys cloths",
        amazonLink: 'https://amzn.to/3PuckZp',
        description: 'Apple iPhone 14 (128 GB) - Blue',
        price: '7000',
    },
]


const result = product.filter((data)=>data.price  > 1000)
console.log(result)