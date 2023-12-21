import React, { useEffect, useState } from 'react';
import bgImage from '../assets/meeting-room.jpg';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import Register from '../Components/Register';
import { Fade } from '../Utils/Fade.motion';

const SignUp = () => {
  const navigate = useNavigate();
  // react-redux states
  const { userData } = useSelector((state) => state.auth);

  // States setter
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  }, [userData, navigate]);
  return (
    <div className="w-full h-screen">
      <div
        className="h-96 bg-no-repeat bg-cover bg-top bg-opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        }}
      >
        <Fade>
          <h1 className="pl-20 pt-40 text-7xl font-extrabold text-white">
            Sign Up{' '}
          </h1>
        </Fade>
      </div>
      <div className="p-10 lg:px-20">
        <button
          onClick={() => setDisplay(true)}
          className="bg-red-500 p-3 text-white hover:bg-black transition-all duration-500"
        >
          Sign Up Now
        </button>
      </div>
      <Register display={display} setDisplay={setDisplay} />
    </div>
  );
};

export default SignUp;
