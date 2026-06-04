import React from 'react';

const MainText = ({ color, text, textCenter }) => {
  return (
    <p
      className={`${color ? color : 'text-mainBlack'} ${textCenter ? 'text-center' : 'text-left'} text-[14px] font-normal leading-[24px] tracking-normal md:text-[16px]`}
    >
      {text}
    </p>
  );
};

export default MainText;
