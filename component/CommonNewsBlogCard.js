import React from 'react';
import Image from 'next/legacy/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

function CommonNewsBlogCard({ img, title, description }) {
  return (
    <div className='new-blog-card-wrapper mb-3 d-flex'>
      <div className='card'>
        <div className='new-blog-card-img-height position-relative'>
          <Image
            src={img.car1.src}
            alt={title}
            layout='fill'
            className='image-top-radius'
          />
        </div>
        <div className='card-body d-flex flex-column new-blog-card-info text-start'>
          <div className='flex-grow-1 title-truncate fs-24 light-dark'>
            {title}
          </div>
          <div className='flex-shrink-0'>
            <div className='fs-15 light-grey mt-1 new-blog-card-info-truncate description-height'>
              {description}
            </div>

            <button className='bg-transparent light-dark fs-14 btn-border mt-3'>
              Read more success stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonNewsBlogCard;
