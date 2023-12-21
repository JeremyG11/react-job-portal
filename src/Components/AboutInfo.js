import React from 'react';
import image from '../assets/decussion.jpg';

const AboutInfo = ({ toggle }) => {
  return (
    <div className="md:flex md:gap justify-between mx-auto w-full">
      <div
        className={`${
          toggle === 0 ? 'flex' : 'hidden'
        } md:p-20 md:min-w-full md:shadow-lg `}
      >
        <div className="hidden md:flex justify-center w-1/2 h-4/5 ">
          <img src={image} alt="" width="100%" height="100%" />
        </div>
        <div className="p-6 md:p-0 md:w-[60%] md:px-14 mx-auto">
          <h3 className="md:text-2xl font-semibold text-center md:text-left">
            Achievements
          </h3>
          <p className="mt-4 p-8 md:p-0 md:mt-8 w-full md:max-w-md leading-7 text-center md:text-left text-sm md:text-base text-gray-800 break-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly. On the
            other hand, we denounce with righteous indignation and dislike men
            who are so beguiled easy to distinguish. the majority have suffered
            alteration in some form, by injected humour, or randomised words
            which do not look even slightly
          </p>
        </div>
      </div>
      <div
        className={`${
          toggle === 1 ? 'flex' : 'hidden'
        } md:p-20 md:min-w-full md:shadow-lg`}
      >
        <div className="hidden md:flex justify-center w-1/2 h-4/5 ">
          <img src={image} alt="" width="100%" height="100%" />
        </div>
        <div className="p-6 md:p-0 md:w-[60%] md:px-14 mx-auto">
          <h3 className="md:text-2xl font-semibold text-center md:text-left">
            Mission
          </h3>
          <p className="mt-4 p-8 md:p-0 md:mt-8 w-full md:max-w-md leading-7 text-center md:text-left text-sm md:text-base text-gray-800 break-normal">
            Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don&apos;t
            look even slightly. &apos;On the other hand, we denounce with
            righteous indignation and dislike men who are so beguiled easy to
            distinguish. the majority have suffered alteration in some form, by
            injected humour, or randomised words which don&apos;t look even
            slightly
          </p>
        </div>
      </div>
      <div
        className={`${
          toggle === 2 ? 'flex' : 'hidden'
        } md:p-20 md:min-w-full md:shadow-lg `}
      >
        <div className="hidden md:flex justify-center w-1/2 h-4/5 ">
          <img src={image} alt="" width="100%" height="100%" />
        </div>
        <div className="p-6 md:p-0 md:w-[60%] md:px-14 mx-auto">
          <h3 className="md:text-2xl font-semibold text-center md:text-left">
            Vision
          </h3>
          <p className="mt-4 p-8 md:p-0 md:mt-8 w-full md:max-w-md leading-7 text-center md:text-left text-sm md:text-base text-gray-800 break-normal">
            &apos;On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled easy to distinguish. the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don&apos;t look even slightly
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
