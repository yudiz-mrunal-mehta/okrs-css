import Image from 'next/legacy/image';
import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
function MainNewComponent({ img, title, description }) {
  return (
    <>
      <div className='main-news-img-height position-relative'>
        <Image
          src={img.bird.src}
          alt='car'
          layout='fill'
          className='rounded-top'
        />
      </div>
      <div className={`main-news-info-wrapper text-start  ${inter.className}`}>
        <div className='main-news-title mx-3 my-3'>
          <p className='fs-24 light-dark title-truncate'>{title}</p>
        </div>
        <div className='main-news-description mx-3 my-3'>
          <p className='light-grey fs-15 truncate'>{description}</p>
          <button className='bg-transparent light-dark fs-14 btn-border'>
            Read more success stories
          </button>
        </div>
      </div>
    </>
  );
}

export default MainNewComponent;
