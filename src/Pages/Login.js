import React, { useEffect, useState } from 'react';
import Modal from '../Components/Modal';
import bgImage from '../assets/meeting-room.jpg';
import { VscClose } from 'react-icons/vsc';
import { TbEyeOff, TbEye } from 'react-icons/tb';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { Fade } from '../Utils/Fade.motion';

function Login() {
  const navigate = useNavigate();
  // react-redux states
  // const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  // States setter
  const [display, setDisplay] = useState(false);
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  console.log(email, password);
  const onCancel = () => {
    setDisplay(false);
  };

  const onSubmitHandler = async () => {};
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
            Sign In{' '}
          </h1>
        </Fade>
      </div>
      <div className="p-10 lg:px-20">
        <button
          onClick={() => setDisplay(true)}
          className="bg-red-500 p-3 text-white hover:bg-black transition-all duration-500"
        >
          Sign In Now
        </button>
      </div>
      <Modal display={display}>
        <div className="relative w-[30%] trans-center p-4 pt-2 bg-white rounded">
          <div className="relative flex justify-end items-start">
            <button
              className="absolute text-lg border-none hover:border-1 top-0 -right-2 hover:text-red-500"
              onClick={onCancel}
            >
              <VscClose className="font-bold" />
            </button>
          </div>
          <form
            onSubmit={onSubmitHandler}
            className=" w-[100%] py-4 mt-8  bg-[#e9e9e97c] rounded  "
          >
            <h1 className="p-4 text-2xl font-bold">Login</h1>
            <div className="w-[100%] my-2 px-4">
              <div className="relative py-2">
                <label className="py-2 text-base font-medium text-gray-500">
                  Email Address
                </label>
                <input
                  className="p-2 outline-none rounded w-[100%] text-gray-500"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative py-2 ">
                <label className="py-2 text-base font-medium text-gray-500">
                  Password
                </label>
                <div className="flex items-center justify-between bg-white rounded pr-4">
                  <input
                    className="p-2 outline-none rounded w-[100%] text-gray-500"
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={setShowPassword(!showPassword)}
                    className="outline-none"
                  >
                    {showPassword ? (
                      <TbEye className="text-3xl font-medium text-gray-500 cursor-pointer hover:text-gray-600 py-1 rounded-2xl " />
                    ) : (
                      <TbEyeOff className="text-3xl font-medium text-gray-500 cursor-pointer hover:text-gray-600 py-1 rounded-2xl " />
                    )}
                  </button>
                </div>
              </div>
              <div className="relative py-2 flex items-center px-4">
                <input className="p-2" type="checkbox" />
                <p className="ml-5 text-sm font-medium text-gray-500">
                  Remember me login
                </p>
              </div>
            </div>
            <div className="my-4 px-4">
              <input
                className="p-2 outline-none rounded w-[100%] py-2 my-4 text-white
              text-xl font-medium cursor-pointer px-8 bg-[#ff0000] "
                type="submit"
                value="login"
              />
              <span className="flex justify-center items-center">
                <p className="text-sm text-center text-gray-500">
                  Do not have an account?
                </p>{' '}
                <a className="ml-2 cursor-pointer text-gray-500 hover:text-red-400 hover:underline text-sm">
                  Sign up
                </a>
              </span>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
