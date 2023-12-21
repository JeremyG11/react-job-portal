import React, { useState } from 'react';
import Modal from './Modal';
import { VscClose } from 'react-icons/vsc';
import { TbEyeOff, TbEye } from 'react-icons/tb';
import { Link } from 'react-router-dom';
// import { login } from "../Actions/auth";

const Register = ({ display, setDisplay }) => {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const onCancel = () => {
    setDisplay(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // dispatch(login({ email, password }));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal display={display}>
      <div className="relative w-full max-w-2xl trans-center p-6 lg:p-8 pt-2 bg-white rounded">
        <div className="relative flex justify-end items-start">
          <button
            className="absolute text-lg border-none hover:border-1 top-0 -right-2 hover:text-red-500"
            onClick={onCancel}
          >
            {<VscClose />}
          </button>
        </div>
        <form
          onSubmit={onSubmitHandler}
          className=" w-[100%] py-4 mt-8  bg-[#e9e9e97c] rounded  "
        >
          <h1 className="px-4 py-2 text-2xl font-bold">Sign up</h1>
          <div className="w-full my-2 lg:grid lg:grid-cols-2 gap-5 px-4">
            <div className="relative py-2">
              <label className="py-2 text-base font-medium text-gray-500">
                Full Name
              </label>
              <input
                className="p-2 outline-none rounded w-[100%] text-gray-500"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
                <button onClick={togglePassword} className="outline-none">
                  {showPassword ? (
                    <TbEye className="text-3xl font-medium text-gray-500 cursor-pointer hover:text-gray-600 py-1 rounded-2xl " />
                  ) : (
                    <TbEyeOff className="text-3xl font-medium text-gray-500 cursor-pointer hover:text-gray-600 py-1 rounded-2xl " />
                  )}
                </button>
              </div>
            </div>
            <div className="relative py-2 ">
              <label className="py-2 text-base font-medium text-gray-500">
                Address
              </label>
              <input
                className="p-2 outline-none rounded w-[100%] text-gray-500"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative py-2 ">
              <label className="py-2 text-base font-medium text-gray-500">
                Phone
              </label>
              <input
                className="p-2 outline-none rounded w-[100%] text-gray-500"
                type="tel"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="my-4 px-4">
            <input
              className="p-2 outline-none rounded w-[100%] py-2 my-4 text-white
            text-xl font-medium cursor-pointer px-8 bg-[#ff0000] "
              type="submit"
              value="Create"
            />
            <span className="flex justify-center items-center">
              <p className="text-sm text-center text-gray-500">
                Alread have an account?
              </p>{' '}
              <Link
                to="/login"
                className="ml-2 cursor-pointer text-gray-500 hover:text-red-400 hover:underline text-sm"
              >
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Register;
