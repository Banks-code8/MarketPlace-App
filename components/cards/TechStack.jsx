import React from 'react';
import ImageWrapper from '../wrappers/ImageWrapper';
import MainText from '../typography/MainText';

const TechStack = ({ useStack, useTitle, stack, title }) => {
  return (
    <div className="">
      {' '}
      {useStack && (
        <ImageWrapper
          src={stack}
          alt={`cnxtHub techstack`}
          width={100}
          height={80}
          styles="bg-norepeat bg-contain bg-center"
        />
      )}
      {useTitle && (
        <div className="p-[20px]">
          <MainText text={title} />
        </div>
      )}
    </div>
  );
};

export default TechStack;
