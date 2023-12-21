import React from 'react';
import hero from '../assets/meeting-room.jpg';
import { useNavigate } from 'react-router-dom';
import Steps from '../Components/Steps';
import Statistic from '../Components/Statistic';
import { Fade } from '../Utils/Fade.motion';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/jobs');
  };

  return (
    <section>
      <div
        className=" relative w-full h-screen bg-no-repeat bg-cover bg-bottom md:mb-10 md:px-10 flex items-center justify-center "
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hero})`,
        }}
      >
        <div className="bg-red w-full px-8  trans-center flex flex-col justify-center">
          <div className="">
            <Fade>
              <h2 className="text-3xl md:max-w-xl mx-auto text-center font-nunito text-[#fff] md:text-5xl font-extrabold">
                Numesrous employment prospects vacancies.
              </h2>
            </Fade>
            <Fade>
              <p className="font-poppins mb-3 mt-2 text-center text-sm md:text-base text-white break-normal">
                Join the community and discover opportunities
              </p>
            </Fade>
          </div>
          <div className="my-5 flex justify-center flex-col items-center">
            <Fade bottom>
              <p className="font-poppins text-center text-gray-300">
                Ready to apply? Sign up with your email for your membership
              </p>
            </Fade>
            <Fade bottom>
              <form className="mt-4 md:max-w-xl flex w-full justify-between bg-white rounded-[2px] overflow-hidden">
                <input
                  placeholder="jeremiah@gmail.com"
                  className="p-2  md:py-3 w-3/4 text-sm rounded-sm font-poppins md:flex-1 border-0 outline-none md:px-6"
                />
                <button
                  type="submit"
                  onClick={handleClick}
                  className="text-sm md:px-7 md:py-4 bg-[#db0001] border-0 outline-none text-white font-medium "
                >
                  Get started
                </button>
              </form>
            </Fade>
          </div>
        </div>
      </div>

      <Statistic />

      <div>
        <div className="lg:pt-20 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium text-gray-500">
            How to get your dream job
          </h2>
          <p className="my-4 text-center w-full max-w-2xl mx-auto">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of your moment.
          </p>
        </div>
        <div className="relative my-10 flex items-center justify-center px-8 w-full h-screen bg-no-repeat bg-cover bg-bottom ">
          <Steps />
        </div>
      </div>
    </section>
  );
};

export default Home;
