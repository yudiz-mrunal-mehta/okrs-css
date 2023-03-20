import React from 'react';
import Image from 'next/legacy/image';
import car from '../../../public/images/dan-gold.jpg';
import car1 from '../../../public/images/car1.jpg';
import bird from '../../../public/images/terrylknox.jpg';
import { Inter } from 'next/font/google';
import CommonNewsBlogCard from '../../CommonNewsBlogCard';

const inter = Inter({ subsets: ['latin'] });
function Blog() {
  const data = [
    {
      id: '1',
      img: { car1 },
      title: 'TVS Ronin Review: Photo Gallery',
      description:
        'Ever thought about publishing your blog articles to a platform which has 50k weekly readers? It’s the best time to do it now! Ever thought about ',
    },
    {
      id: '2',
      img: { car1 },
      title: 'Suzuki Katana Explained In 6 Images image-top-radius',
      description:
        'Ever thought about publishing your blog articles to a platform which has 50k weekly readers? It’s the best time to do it now! Ever thought about publishing your blog articles to a platform. Ever thought about publishing your blog articles to a platform which has 50k weekly readers?',
    },
    {
      id: '3',
      img: { car1 },
      title: 'PURE EV ETrance',
      description:
        'Ever thought about publishing your blog articles to a platform which has 50k weekly readers? It’s the best time to do it now! Ever thought about publishing your blog articles to a platform. Ever thought about publishing your blog articles to a platform which has 50k weekly readers?',
    },
  ];
  return (
    <>
      <div className='news-wrapper row m-0 border rounded mb-4'>
        <div className='main-news-img-card col-12 col-md-8 position-relative'>
          <Image src={bird.src} alt='car' layout='fill' className='rounded' />
        </div>
        <div
          className={`main-news-info-card col-12 col-md-4 text-start mb-3 my-md-auto ${inter.className}`}
        >
          <span className='fs-24 light-dark'>
            Best Electric Scooters in India, in 2022
          </span>
          <p className='light-grey fs-15 truncate'>
            Ever thought about publishing your blog articles to a platform which
            has 50k weekly readers? It’s the best time to do it now! Ever
            thought about publishing your blog articles to a platform. Ever
            thought about publishing your blog articles to a platform which has
            50k weekly readers?Ever thought about publishing your blog articles
            to a platform which has 50k weekly readers? It’s the best time to do
            it now! Ever thought about publishing your blog articles to a
            platform. Ever thought about publishing your blog articles to a
            platform which has 50k weekly readers?
          </p>
          <button className='bg-transparent light-dark fs-14 btn-border'>
            Read more success stories
          </button>
        </div>
      </div>

      <div className='parent'>
        {data.map((item) => (
          <CommonNewsBlogCard
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Blog;
