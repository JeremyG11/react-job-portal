import React, { useState } from 'react';
import decussion from '../assets/decussion.jpg';
import bgImage from '../assets/meeting-room.jpg';
import AboutInfo from '../Components/AboutInfo';
import line from '../assets/bg-line.png';
import Button from '../Components/Button';
import { Fade } from '../Utils/Fade.motion';

const About = () => {
  const [current, setCurrent] = useState(0);
  const [toggle, setToggle] = useState(0);

  const handleClick = (index) => {
    setToggle(index);
    setCurrent(index);
  };

  return (
    <div className="relative ">
      <div
        className="h-96 bg-no-repeat bg-cover bg-top bg-opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        }}
      >
        <Fade>
          <h1 className="px-8 lg:pl-20 pt-40 text-3xl lg:text-7xl font-extrabold text-white">
            About us{' '}
          </h1>
        </Fade>
      </div>
      <div className="relative h-screen">
        <div className="p-6 md:p-0 md:flex  mt-14 ">
          <Fade>
            <div
              className="md:p-12 md:w-1/2 bg-contain bg-right-bottom bg-no-repeat"
              style={{
                backgroundImage: `url(${line})`,
              }}
            >
              <p className="md:pt-10 text-3xl font-bold ">
                Join hundred of thousand job seekers and employers.
              </p>
              <p className="py-5 text-sm font-normal  flex w-[100%] ">
                Make a differeent for your online presence Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Build your
                next idea even faster.
              </p>
              <Button title={'Create Account'} />
            </div>
            <div className="relative w-1/2">
              <div
                className="h-full w-full bg-no-repeat bg-cover bg-top bg-opacity-100"
                style={{
                  backgroundImage: `url(${decussion})`,
                }}
              ></div>
            </div>
          </Fade>
        </div>
      </div>
      <Fade>
        <div className="relative md:flex bg-slate-100 ">
          <div
            className="hidden md:block md:h-[510px] md:w-[50%] bg-no-repeat bg-cover bg-top bg-opacity-100"
            style={{
              backgroundImage: ` url(${decussion})`,
            }}
          ></div>
          <div className="p-8 md:w-1/2 md:p-12 md:py-6 ">
            <div className="my-5 flex  items-start flex-col">
              <h4 className="md:pt-10 text-3xl font-bold">
                Welcome to the emplanet online jobs
              </h4>
            </div>
            <p className="text-sm md:text-base mt-4 leading-7 text-gray-500 break-normal">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly.On the other hand, we denounce with righteous indignation
              and dislike men who are so beguiled easy to distinguish.
            </p>
            <button className="w-32 my-10 p-2 md:w-36 bg-[#] border-2 border-[#00d9ffe8] hover:border-[#ffffffe8] hover:text-white hover:bg-[#00d9ffe8] hover:dark:text-white transition duration-500 md:px-3 md:py-3 text-sm ">
              Now
            </button>
          </div>
        </div>
      </Fade>

      <div className="flex items-center justify-center p-6 md:m-auto md:mt-20">
        <div
          onClick={() => handleClick(0)}
          id="0"
          className={`w-20 h-16 md:w-40 md:h-32 md:p-4 flex flex-col items-center justify-between mx-5 ${
            current === 0 ? 'bg-[#ff2a2a] ' : 'bg-gray-900'
          } rounded-md cursor-pointer hover:bg-[#ff2a2a] transition`}
        >
          <svg
            className="p-4 md:p-0"
            fill="#ffffff"
            version="1.1"
            id="0"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 496 496"
            xmlSpace="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <g>
                    {' '}
                    <path d="M248,288c70.576,0,128-57.424,128-128S318.576,32,248,32S120,89.424,120,160S177.424,288,248,288z M248,48 c61.76,0,112,50.24,112,112s-50.24,112-112,112s-112-50.24-112-112S186.24,48,248,48z"></path>{' '}
                    <path d="M188.688,160L248,219.312L307.312,160L248,100.688L188.688,160z M248,196.688L211.312,160L248,123.312L284.688,160 L248,196.688z"></path>{' '}
                    <path d="M248,88c25.552,0,49.424,13.8,62.288,36.008l13.848-8.016C308.416,88.856,279.24,72,248,72s-60.416,16.856-76.128,43.984 l13.84,8.024C198.576,101.8,222.448,88,248,88z"></path>{' '}
                    <path d="M248,248c34.96,0,66.608-20.72,80.632-52.792l-14.664-6.408C302.496,215.04,276.6,232,248,232 c-28.6,0-54.496-16.96-65.968-43.208l-14.664,6.408C181.392,227.28,213.04,248,248,248z"></path>{' '}
                    <path d="M363.656,270.45C391.113,241.711,408,202.791,408,160C408,71.776,336.224,0,248,0S88,71.776,88,160 c0,42.791,16.887,81.711,44.344,110.45L52.688,496h28.76l61.744-23.152L181.784,496h16.064L248,338.384L298.152,496h16.064 l38.592-23.152L414.552,496h28.76L363.656,270.45z M248,16c79.4,0,144,64.6,144,144s-64.6,144-144,144s-144-64.6-144-144 S168.6,16,248,16z M186.16,479.968l-41.352-24.816L78.552,480h-3.24l69.779-197.591c11.356,9.563,24.053,17.579,37.769,23.718 l-38.468,115.332l15.178,5.062l38.224-114.599c12.52,4.148,25.721,6.787,39.386,7.704L186.16,479.968z M351.192,455.152 l-41.352,24.816l-51.018-160.342c13.661-0.917,26.858-3.554,39.375-7.7l22.207,66.628l15.179-5.059l-22.452-67.363 c13.72-6.139,26.42-14.157,37.779-23.722L420.688,480h-3.24L351.192,455.152z"></path>{' '}
                    <rect
                      x="321.806"
                      y="400.009"
                      transform="matrix(-0.3163 -0.9487 0.9487 -0.3163 58.7242 858.3411)"
                      width="33.729"
                      height="16.001"
                    ></rect>{' '}
                  </g>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
          <h3
            id="0"
            className="hidden md:block text-white text- pt-4 font-montserrat font-normal"
          >
            Achievements
          </h3>
        </div>
        <div
          onClick={() => handleClick(1)}
          id="1"
          className={`w-20 h-16 md:w-40 md:h-32 md:p-4 flex flex-col items-center justify-between mx-5 ${
            current === 1 ? 'bg-[#ff2a2a] ' : 'bg-gray-900'
          } rounded-md cursor-pointer hover:bg-[#ff2a2a] transition`}
        >
          <svg
            className="pointer-events-none p-4 md:p-0"
            fill="#ffffff"
            viewBox="-56.32 -56.32 624.64 624.64"
            enableBackground="new 0 0 512 512"
            id="1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            stroke="#ffffff"
            strokeWidth="0.00512"
          >
            <g strokeWidth="0.5"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              {' '}
              <g>
                {' '}
                <path d="M471.909,217.5H351.421c-3.711,0-5.921,4.132-5.921,7.865v266.604c0,3.713,2.21,6.531,5.921,6.531h120.488 c3.711,0,5.591-2.818,5.591-6.531V225.365C477.5,221.632,475.62,217.5,471.909,217.5z"></path>{' '}
                <path d="M318.5,366.648c0-3.729-2.641-7.148-6.368-7.148h-121.5c-3.728,0-7.132,3.42-7.132,7.148v126.5 c0,3.727,3.404,6.352,7.132,6.352h121.5c3.728,0,6.368-2.625,6.368-6.352V366.648z"></path>{' '}
                <path d="M158.5,435.648c0-3.729-2.64-7.148-6.368-7.148h-121.5c-3.728,0-7.132,3.42-7.132,7.148v56.5 c0,3.727,3.404,6.352,7.132,6.352h121.5c3.728,0,6.368-2.625,6.368-6.352V435.648z"></path>{' '}
                <path d="M59.5,395.459c3.416,0,7-2.771,7-6.188v-30.756c0-45.203,35.901-83.016,81.104-83.016h40.838 c3.418,0,6.058-1.734,6.058-5.15v-41.471c0-47.924,39.12-88.378,87.044-88.378h0.956v14.757c0,2.164,1.125,4.08,3.133,4.887 c0.641,0.258,1.222,0.383,1.882,0.383c1.406,0,2.735-0.566,3.753-1.633l18.589-19.477c1.949-2.041,1.939-5.238-0.012-7.277 l-18.613-19.479c-1.498-1.566-3.591-2.055-5.597-1.25c-2.01,0.805-3.135,2.723-3.135,4.887V129.5h-0.956 c-54.748,0-101.044,44.63-101.044,99.378V264.5h-32.896c-52.027,0-95.104,41.99-95.104,94.016v30.756 C52.5,392.688,56.084,395.459,59.5,395.459z"></path>{' '}
                <path d="M410.5,40.318c3.416,0,7-2.77,7-6.188V19.107c0-3.418-3.584-6.188-7-6.188s-7,2.77-7,6.188V34.13 C403.5,37.548,407.084,40.318,410.5,40.318z"></path>{' '}
                <path d="M439.237,46.416c0.902,0.465,1.867,0.684,2.816,0.684c2.248,0,4.416-1.23,5.512-3.367l6.957-13.578 c1.557-3.041,0.354-6.77-2.688-8.328c-3.041-1.563-6.77-0.355-8.328,2.686l-6.955,13.576 C434.993,41.13,436.196,44.859,439.237,46.416z"></path>{' '}
                <path d="M375.431,42.513c1.053,2.244,3.279,3.563,5.605,3.563c0.881,0,1.773-0.189,2.623-0.586 c3.094-1.453,4.426-5.137,2.975-8.232l-6.463-13.781c-1.449-3.092-5.133-4.42-8.229-2.975c-3.094,1.453-4.426,5.135-2.975,8.23 L375.431,42.513z"></path>{' '}
                <path d="M470.728,80.5h-12.385l0.875-14.082c0.234-3.814-2.797-6.918-6.619-6.918h-83.877c-3.822,0-6.854,3.104-6.617,6.918 l0.873,14.082h-10.352c-9.676,0-17.529,8.062-17.529,17.737c0,5.152,2.25,10.139,6.211,13.467l15.365,13.056l0.002,0.055 l9.945,8.416c-0.002-0.012-0.004-0.021-0.006-0.032l0.006,0.005l0.027,0.036c3.271,16.344,15.336,29.375,30.951,34.113 c3.102,0.943,5.238,3.791,5.465,7.025l2.299,23.269c0.092,1.301-0.939,1.853-2.244,1.853h-19.854c-1.244,0-1.765,2.121-1.765,3.361 v4.5c0,1.244,0.521,1.139,1.765,1.139h54.793c1.242,0,1.442,0.105,1.442-1.139v-4.5c0-1.24-0.2-3.361-1.442-3.361h-19.852 c-1.305,0-2.336-0.55-2.246-1.851l2.301-23.544c0.227-3.234,2.361-5.862,5.463-6.806c14.928-4.533,26.605-16.799,30.465-31.799 h0.025l0.006-0.089c-0.002,0.012-0.022-0.016-0.026-0.006l10.307-8.79v-0.014l17.525-14.799c3.938-3.328,6.196-8.418,6.196-13.571 C488.222,88.558,480.38,80.5,470.728,80.5z M347.112,104.947c-1.912-1.619-3.016-4.213-3.016-6.709 c0-4.705,3.826-8.737,8.529-8.737h1.861h0.027h9.023h-0.027h0.021l1.879,30.704l-9.502-7.802L347.112,104.947z M410.405,137.337 c-13.773,0-24.939-11.168-24.939-24.941c0-13.777,11.166-24.943,24.939-24.943c13.777,0,24.943,11.166,24.943,24.943 C435.349,126.169,424.183,137.337,410.405,137.337z M476.218,104.947l-10.912,9.225l-9.506,7.814l1.988-32.485h0.029h-0.027h9.023 h0.027h3.887c4.703,0,8.506,4.032,8.506,8.737C479.233,100.733,478.13,103.328,476.218,104.947z"></path>{' '}
                <circle cx="410.405" cy="112.396" r="12.375"></circle>{' '}
              </g>{' '}
            </g>
          </svg>
          <h3
            id="1"
            className="hidden md:block text-white text-sm pt-4 font-montserrat font-normal"
          >
            Mission
          </h3>
        </div>
        <div
          onClick={() => handleClick(2)}
          id="2"
          className={`w-20 h-16 md:w-40 md:h-32 md:p-4 flex flex-col items-center justify-between mx-5 ${
            current === 2 ? 'bg-[#ff2a2a] ' : 'bg-gray-900'
          } rounded-md cursor-pointer hover:bg-[#ff2a2a] transition`}
        >
          <svg
            className="p-4 md:p-0"
            fill="#fff"
            version="1.1"
            id="2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            stroke="#fff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <path d="M511.39,77.477c-1.241-2.996-4.164-4.949-7.406-4.949h-64.542V7.986c0-6.987-8.737-10.615-13.685-5.669l-48.373,48.373 c-1.504,1.504-2.348,3.542-2.348,5.669v69.238l-16.86,16.86c-38.071-35.333-89.017-56.975-144.931-56.975 c-46.834,0-91.279,14.896-128.531,43.075c-36.037,27.26-62.966,65.992-75.826,109.063c-1.267,4.242,1.146,8.707,5.388,9.975 c4.241,1.268,8.708-1.145,9.976-5.388c24.733-82.837,102.451-140.692,188.993-140.692c51.493,0,98.432,19.846,133.592,52.281 l-18.857,18.857c-19.483-17.785-43.23-31.202-69.874-38.45c-4.273-1.162-8.678,1.359-9.84,5.632 c-1.162,4.272,1.359,8.677,5.631,9.84c23.881,6.497,45.192,18.466,62.734,34.326l-25.013,25.013 c-20.967-18.34-48.393-29.47-78.372-29.47c-65.717,0-119.182,53.465-119.182,119.182s53.465,119.182,119.182,119.182 s119.181-53.465,119.181-119.182c0-29.979-11.13-57.406-29.472-78.373l25.001-25.001c24.915,27.707,39.744,64.235,39.744,103.375 c0,85.167-69.288,154.455-154.455,154.455S58.789,383.892,58.789,298.725S128.077,144.27,213.244,144.27 c4.427,0,8.017-3.588,8.017-8.017c0-4.428-3.589-8.017-8.017-8.017c-94.008,0-170.489,76.481-170.489,170.488 s76.48,170.489,170.489,170.489s170.489-76.481,170.489-170.489c0-43.491-16.596-84.06-44.435-114.716l18.877-18.877 c32.435,35.16,52.281,82.1,52.281,133.592c0,108.742-88.468,197.211-197.211,197.211S16.033,407.466,16.033,298.725 c0-5.481,0.227-11.013,0.676-16.441c0.365-4.412-2.917-8.285-7.329-8.65c-4.421-0.377-8.285,2.917-8.649,7.329 C0.245,286.829,0,292.805,0,298.725c0,117.584,95.661,213.244,213.244,213.244s213.244-95.661,213.244-213.244 c0-55.914-21.642-106.86-56.976-144.931l16.86-16.86h69.238c2.126,0,4.165-0.844,5.668-2.347l48.373-48.373 C511.944,83.92,512.631,80.472,511.39,77.477z M316.393,298.725c0,56.876-46.272,103.148-103.148,103.148 S110.096,355.6,110.096,298.725c0-56.876,46.272-103.148,103.148-103.148c25.558,0,48.972,9.349,67.011,24.799l-18.97,18.97 c-13.137-10.648-29.853-17.046-48.041-17.046c-42.141,0-76.426,34.285-76.426,76.426s34.285,76.426,76.426,76.426 c42.141,0,76.426-34.285,76.426-76.426c0-18.189-6.397-34.906-17.047-48.043l18.97-18.97 C307.044,249.752,316.393,273.166,316.393,298.725z M207.149,303.933c2.997,3.501,8.503,3.72,11.763,0.46l11.103-11.103 c0.557,1.713,0.866,3.538,0.866,5.434c0,9.725-7.912,17.637-17.637,17.637s-17.637-7.912-17.637-17.637 c0-9.725,7.912-17.637,17.637-17.637c1.896,0,3.72,0.309,5.433,0.866l-11.102,11.102 C204.657,295.974,204.463,300.795,207.149,303.933z M230.693,269.938c-5.092-3.098-11.065-4.884-17.449-4.884 c-18.566,0-33.67,15.105-33.67,33.67c0,18.566,15.105,33.67,33.67,33.67s33.67-15.105,33.67-33.67 c0-6.383-1.785-12.357-4.884-17.449l19.182-19.183c7.785,10.169,12.424,22.866,12.424,36.632c0,33.3-27.092,60.393-60.393,60.393 s-60.392-27.092-60.392-60.393c0-33.3,27.092-60.392,60.392-60.392c13.766,0,26.463,4.639,36.632,12.423L230.693,269.938z M391.069,59.678l32.339-32.339v49.883l-32.339,32.339V59.678z M452.291,120.9h-49.884l32.339-32.339h49.884L452.291,120.9z"></path>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
          <h3
            id="2"
            className="hidden md:block text-white text-sm pt-4 font-montserrat font-normal"
          >
            Vision
          </h3>
        </div>
      </div>
      <div className="relative transition-all flex h-screen ">
        <AboutInfo toggle={toggle} />
      </div>
    </div>
  );
};

export default About;
