import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the styles
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img1.jpg'
const Blog = () => {
  const images = [
    {
      original: img1,
      // thumbnail: 'https://www.mooc.org/hubfs/applications-of-computer-programming.jpg',
      description: 'Image 1 description',
    },
    {
      original: img2,
      // thumbnail: 'https://www.mooc.org/hubfs/applications-of-computer-programming.jpg',
      description: 'Image 2 description',
    },
    // Add more images as needed
  ];

  return (
    <div>
      <h1 className='mt-5 mb-2 font-bold text-center'>Blog</h1>
        <hr className='w-11 mb-3 bg-pink-400 h-1 m-auto'></hr>

      <Gallery items={images} />
    </div>
  );
};

export default Blog;