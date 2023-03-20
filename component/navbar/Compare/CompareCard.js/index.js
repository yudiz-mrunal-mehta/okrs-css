import Image from 'next/legacy/image';
import React from 'react';
import { Inter } from 'next/font/google';
import StarRatings from 'react-star-ratings';
const inter = Inter({ subsets: ['latin'] });

function CompareCard({ img, title, price, onRoad }) {
  return (
    <div className='compare-card-wrapper card px-0'>
      <div className='compare-card-height position-relative'>
        <Image
          src={img.car1.src}
          alt={title}
          layout='fill'
          className='image-top-radius'
        />
      </div>
      <div className={`compare-card-info card-body ${inter.className}`}>
        <div className='compare-card-title compare-title-font'>{title}</div>
        <StarRatings
          rating={4}
          starSpacing='1px'
          starDimension='20px'
          starHoverColor='#FF9529'
          starRatedColor='#FDCC0D'
          numberOfStars={5}
          name='rating'
        />
        <div className='price mt-1'>{price}</div>
        <div className='on-road'>{onRoad}</div>
      </div>
    </div>
  );
}

export default CompareCard;
