import React from 'react';
import { Form } from 'react-bootstrap';
import { Inter } from 'next/font/google';
import car1 from '../../../public/images/car1.jpg';
import CompareCard from './CompareCard.js';

const inter = Inter({ subsets: ['latin'] });
function Compare() {
  const checkBox = [
    'All',
    'General Specification',
    'Motor & Transmission',
    'Features And Safety',
    'Mileage And Performance',
    'Dimensions And Capacity',
    'Electricals',
    'Battery',
  ];
  const compareData = [
    {
      id: '1',
      img: { car1 },
      title: 'TVS iQube Electric',
      price: '₹1.61 - 1.66 Lakh',
      onRoad: 'On road price in Ahmedabad',
    },
    {
      id: '2',
      img: { car1 },
      title: 'TVS iQube Electric',
      price: '₹1.61 - 1.66 Lakh',
      onRoad: 'On road price in Ahmedabad',
    },
    {
      id: '3',
      img: { car1 },
      title: 'TVS iQube Electric',
      price: '₹1.61 - 1.66 Lakh',
      onRoad: 'On road price in Ahmedabad',
    },
  ];
  return (
    <div
      className={`compare-wrapper text-start row m-0 mt-3 ${inter.className}`}
    >
      <div className='category-section col-md-4 border rounded px-2'>
        <div className='px-3 mt-3 '>
          <h3>Categories</h3>
          <hr />
        </div>
        <div className='categories-scroll px-3'>
          {checkBox?.length > 0
            ? checkBox.map((spec, idx) => (
                <>
                  <div className='d-flex justify-content-between'>
                    <label for={spec}>{spec}</label>
                    <Form.Check type='checkbox' name={spec} />
                  </div>
                  <hr className={`${idx === 7 ? 'd-none' : 'd-block'}`} />
                </>
              ))
            : null}
        </div>
      </div>
      <div className='compare-vehicle-card col-md-8 parent-compare m-0'>
        {compareData?.length > 0
          ? compareData.map((data) => (
              <CompareCard
                img={data.img}
                title={data.title}
                price={data.price}
                onRoad={data.onRoad}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Compare;
