import React from 'react';
import MainText from '../typography/MainText';
import ImageWrapper from '../wrappers/ImageWrapper';
import comment from '@/public/icons/comment.png';
import Ratings from '@/public/icons/Rating.png';

const FeedbackCard = ({ text, image, title, subtitle }) => {
  return (
    <div className="shadow-custom-primary flex flex-col gap-4 overflow-hidden rounded-[10px] p-[20px]">
      <div className="flex justify-between">
        {' '}
        <ImageWrapper
          src={comment}
          alt={`welcome to cnxt`}
          width={30}
          height={30}
          styles={'bg-no-repeat bg-cover h-full'}
        />
        <ImageWrapper
          src={Ratings}
          alt={`rating cnxt `}
          width={100}
          height={100}
          styles={'bg-no-repeat bg-cover h-full'}
        />
      </div>
      <MainText text={text} />
      <div className="flex items-center gap-2 p-[10px]">
        <ImageWrapper
          src={image}
          alt={`cnxt technologies ${title}`}
          width={70}
          height={100}
          styles={'bg-no-repeat bg-cover bg-center rounded-full'}
        />
        <div className="flex flex-col gap-2 p-[10px]">
          <MainText text={title} />
          <MainText text={subtitle} color={'text-mainGray'} />
        </div>{' '}
      </div>
    </div>
  );
};

export default FeedbackCard;
