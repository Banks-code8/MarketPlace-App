import React from 'react';

const MainButton = ({ bgColor, text }) => {
  return (
    <button
      className={`${bgColor ? bgColor : 'bg-primary'} ${bgColor === true ? 'text-mainWhite' : 'text-mainBlack'} shadow-custom-primary cursor-pointer rounded-[10px] px-[20px] py-[10px] text-[14px] font-semibold transition-all duration-300 hover:scale-110 active:scale-95`}
    >
      {text}
    </button>
  );
};

export default MainButton;
