import React, { useState } from 'react';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import image from '../assets/profile1.jpg';
import { IoMdQuote } from 'react-icons/io';
import { Fade } from '../Utils/Fade.motion';

const Testimonials = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(currentIndex + 1);
  const goTopPervious = () => {
    const isBeginingIndex = currentIndex === 0;
    const index = isBeginingIndex ? slides.length - 2 : currentIndex - 1;
    setCurrentIndex(index);
  };
  const goTopNext = () => {
    const isEndingIndex = currentIndex === slides.length - 2;
    const index = isEndingIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
    setSecondIndex(index + 1);
  };

  const moveToSlideX = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="w-full min-h-full overflow-hidden ">
      <div className="relative trans-center min flex flex-nowrap gap-20 justify-center overflow-hidden items-center w-full h-[100%] px-20">
        <button
          onClick={goTopPervious}
          className="p-8 text-white flex items-center justify-center rounded-full bg-[#0000002a] transition hover:bg-[#0000007a] w-14 h-14 absolute left-6 "
        >
          <SlArrowLeft className="z-10  absolute" />
        </button>
        <button
          onClick={goTopNext}
          className="p-8 text-white flex items-center justify-center rounded-full bg-[#0000002a] transition hover:bg-[#0000007a] w-14 h-14 absolute right-6 "
        >
          <SlArrowRight className="absolute" />
        </button>
        <Fade>
          <div className="flex flex-col justify-center relative p-10 m-10 bg-[#0000007a] transition-all ease-in rounded-lg shadow-2xl  h-[380px]  max-w-[500px] backdrop-blur-md">
            <IoMdQuote className="absolute top-5 left-5 text-7xl  text-[#ff525299]" />
            <p className="px-6 text-base py-8 text-white italic font-montserrat leading-7">
              {slides[currentIndex].message}
            </p>
            <div className=" flex items-center justify-center absolute left-[25%] bottom-5">
              <img src={image} className="w-16 h-16 rounded-full " />
              <span className="py-2 px-4 font-medium">
                <h1 className="text-lg tracking-wider text-white font-poppins">
                  {slides[currentIndex].name}
                </h1>
                <p className="text-xs font-nunito text-red-500">
                  Senior Lecturer at AAU
                </p>
              </span>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="flex flex-col justify-center relative p-10 m-10 bg-[#0000007a] transition-all ease-in rounded-lg shadow-2xl  h-[380px]  max-w-[500px] backdrop-blur-md">
            <IoMdQuote className="absolute top-5 left-5 text-7xl  text-[#ff525299]" />
            <p className="px-6 text-base py-8 text-white italic font-montserrat leading-7">
              {slides[secondIndex].message}
            </p>
            <div className=" flex items-center justify-center absolute left-[25%] bottom-5">
              <img src={image} className="w-16 h-16 rounded-full " />
              <span className="py-2 px-4 font-medium">
                <h1 className="text-base tracking-wider text-white font-poppins">
                  {slides[secondIndex].name}
                </h1>
                <p className="text-xs font-nunito text-red-500">
                  Senior Lecturer at AAU
                </p>
              </span>
            </div>
          </div>
        </Fade>
      </div>
      <div className="absolute left-[50%] bottom-5 trans-bottom">
        {slides.map((slide, slideIndex) => {
          return (
            <button
              key={slideIndex}
              onClick={() => moveToSlideX(slideIndex)}
              className={`${
                slideIndex === currentIndex
                  ? 'bg-[#e00000] py-1 px-2  w-12'
                  : 'bg-[#ff525299] p-1  w-8'
              } m-2 rounded-full  cursor-pointer transition-all `}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
