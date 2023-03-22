import Image from 'next/legacy/image';
import React from 'react';
import { Inter } from 'next/font/google';
import StarRatings from 'react-star-ratings';
const inter = Inter({ subsets: ['latin'] });

function CompareCard({ img, title, price, onRoad, idx }) {
  return (
    <>
      <div className='compare-card-wrapper card px-0 custom-border'>
        <div className='compare-card-height position-relative'>
          <Image
            src={img.car1.src}
            alt={title}
            layout='fill'
            className='image-top-radius'
          />
        </div>
        <div
          className={`compare-card-info card-body px-md-3 px-2 ${inter.className}`}
        >
          <div className='compare-card-title compare-title-font'>{title}</div>
          <div className='star'>
            <StarRatings
              rating={4}
              starSpacing='1px'
              starHoverColor='#FF9529'
              starRatedColor='#FDCC0D'
              numberOfStars={5}
              name='rating'
            />
          </div>
          <div className='price mt-1'>{price}</div>
          <div className='on-road'>{onRoad}</div>
        </div>
      </div>
      {idx === 0 ? <div className='display'></div> : null}
    </>
  );
}

export default CompareCard;
