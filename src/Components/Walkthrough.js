import React from 'react';
import usericon from '../assets/user.png';
import applicationicon from '../assets/application.png';
import uploadicon from '../assets/upload.png';
import { Fade } from '../Utils/Fade.motion';

const Walkthrough = () => {
  return (
    <div className="text-gray-500">
      <Fade>
        <h1 className="-py-5 text-center text-3xl font-bold font-nunito">
          Three easy steps to get new <br />
          oppuntities
        </h1>
      </Fade>
      <div className="gap-40 pt-20 flex items-center justify-between w-[100]%">
        <Fade bottom duration={2000} distance={'100px'}>
          <div className="cursor-pointer rounded-lg hover:bg-gray-100 px-5 py-10 transition-all">
            <div className="flex justify-center py-5">
              <img src={usericon} alt="" />
            </div>
            <h2 className="font-medium text-center py-4">Create account</h2>
            <p className="text-sm text-center ">
              Slide Descriptions sing negative values doesnt make a ton of sense
              with the letter-spacing scription
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="cursor-pointer rounded-lg hover:bg-gray-100 px-5 py-10 transition-all">
            <div className="flex justify-center py-5">
              <img src={uploadicon} alt="" />
            </div>
            <h2 className="font-medium text-center py-4">Upload CV/Resume</h2>
            <p className="text-sm text-center ">
              Slide Descriptions sing negative values doesnt make a ton of sense
              with the letter-spacing scription
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="cursor-pointer rounded-lg hover:bg-gray-100 px-5 py-10 transition-all">
            <div className="flex justify-center py-5">
              <img src={applicationicon} alt="" />
            </div>
            <h2 className="font-medium text-center py-4">Apply for job</h2>
            <p className="text-sm text-center ">
              Slide Descriptions sing negative values doesnt make a ton of sense
              with the letter-spacing scription
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Walkthrough;
