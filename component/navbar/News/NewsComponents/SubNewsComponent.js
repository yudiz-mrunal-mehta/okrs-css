import Image from 'next/legacy/image';
import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
function SubNewsComponent({ idx, img, title, description }) {
  console.log('idx', idx);
  return (
    <>
      <div className={`sub-news-wrapper row m-0 ${inter.className}`}>
        <div className='sub-news-img-height position-relative col-md-6'>
          <Image
            src={img.car1.src}
            alt='car'
            layout='fill'
            className='rounded'
          />
        </div>
        <div className='sub-news-info col-md-6 pe-0'>
          <p className='text-start sub-news-info-title title-truncate custom-margin'>
            {title}
          </p>
          <div className='sub-news-desction text-start'>
            <p className='light-grey text-start fs-15 sub-news-desction-truncate custom-margin'>
              {description}
            </p>
            <button className='bg-transparent light-dark fs-14 btn-border'>
              {/* <button className='bg-transparent light-dark fs-14 btn-border tablet-not-show'> */}
              Read more stories
            </button>
            {/* <button className='bg-transparent light-dark fs-14 btn-border tablet-show'>
              Read more
            </button> */}
          </div>
        </div>
      </div>
      <hr className={`${idx === 2 ? 'd-none' : 'd-block custom-hr'}`} />
    </>
  );
}

export default SubNewsComponent;
