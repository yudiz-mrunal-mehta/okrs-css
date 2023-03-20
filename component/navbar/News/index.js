import React from 'react';
import car1 from '../../../public/images/car1.jpg';
import bird from '../../../public/images/terrylknox.jpg';
import CommonNewsBlogCard from '../../CommonNewsBlogCard';
import MainNewComponent from './NewsComponents/MainNewComponent';
import SubNewsComponent from './NewsComponents/SubNewsComponent';

function News() {
  const newsData = [
    {
      id: '1',
      img: { bird },
      title:
        'No Immediate Rival Planned For Maruti Grand Vitara, Toyota Hyryder Strong Hybrid: Jejurikar, M&M',
      description:
        'With no regulatory incentives and plenty of EVs in the pipeline, Mahindra sees no reason to follow the market leader down the self-charging hybrid path',
    },
    {
      id: '2',
      img: { car1 },
      title:
        'No Immediate Rival Planned For Maruti Grand Vitara, Toyota Hyryder Strong Hybrid: Jejurikar, M&M',
      description:
        'With no regulatory incentives and plenty of EVs in the pipeline, Mahindra sees no reason to follow the market leader down the self-charging hybrid path',
    },
    {
      id: '3',
      img: { car1 },
      title:
        'No Immediate Rival Planned For Maruti Grand Vitara, Toyota Hyryder Strong Hybrid: Jejurikar, M&M',
      description:
        'With no regulatory incentives and plenty of EVs in the pipeline, Mahindra sees no reason to follow the market leader down the self-charging hybrid path',
    },
    {
      id: '4',
      img: { car1 },
      title:
        'No Immediate Rival Planned For Maruti Grand Vitara, Toyota Hyryder Strong Hybrid: Jejurikar, M&M',
      description:
        'With no regulatory incentives and plenty of EVs in the pipeline, Mahindra sees no reason to follow the market leader down the self-charging hybrid path',
    },
  ];
  const commonData = [
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
    <div className='news-wrapper '>
      <div className='main-news-wrapper row'>
        <div className='col-12 col-md-6 '>
          {newsData?.length > 0 ? (
            <MainNewComponent
              img={newsData[0].img}
              title={newsData[0].title}
              description={newsData[0].title}
            />
          ) : null}
        </div>
        {newsData.length > 0 ? (
          <div className='col-12 col-md-6'>
            {newsData.slice(1, newsData.length).map((data, idx) => (
              <SubNewsComponent
                idx={idx}
                img={data.img}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className='parent mt-3'>
        {commonData?.length > 0 &&
          commonData.map((item) => (
            <CommonNewsBlogCard
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
}

export default News;
