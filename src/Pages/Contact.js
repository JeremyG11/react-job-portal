import React from 'react';
import bgImage from '../assets/meeting-room.jpg';
import { Fade } from '../Utils/Fade.motion';

const Contact = () => {
  const contacts = [
    {
      icon: (
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 20.00 20.00"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ff2e2e"
          stroke="#ff2e2e"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <g id="layer1">
              {' '}
              <path
                d="M 9.0488281 0 L 0 6.8183594 L 0 20 L 20 20 L 20 6.8183594 L 10.951172 0 L 9.0488281 0 z M 9.6230469 1 L 10.376953 1 L 19.001953 7.5 L 11.990234 12.783203 L 10.951172 12 L 9.0488281 12 L 8.0097656 12.783203 L 0.99804688 7.5 L 9.6230469 1 z M 1 8.7539062 L 7.1796875 13.410156 L 1 18.066406 L 1 8.7539062 z M 19 8.7539062 L 19 18.066406 L 12.820312 13.410156 L 19 8.7539062 z M 9.6230469 13 L 10.376953 13 L 18.337891 19 L 1.6621094 19 L 9.6230469 13 z "
                style={{
                  fill: '#f00',
                  fillOpacity: 1,
                  strokeWidth: '0.0002',
                }}
              ></path>{' '}
            </g>{' '}
          </g>
        </svg>
      ),
      contact: 'Support@example.com',
    },
    {
      icon: (
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 20.00 20.00"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <g id="layer1">
              {' '}
              <path
                d="M 0.5234375 0.017578125 A 0.50005 0.50005 0 0 0 0.0234375 0.54101562 L 0.06640625 1.4355469 A 0.50005 0.50005 0 0 0 0.068359375 1.4589844 L 0.15234375 2.3515625 A 0.50005 0.50005 0 0 0 0.15625 2.375 L 0.28320312 3.2617188 A 0.50005 0.50005 0 0 0 0.28515625 3.2832031 L 0.44921875 4.1660156 A 0.50005 0.50005 0 0 0 0.45507812 4.1894531 L 0.66210938 5.0605469 A 0.50005 0.50005 0 0 0 0.66796875 5.0839844 L 0.91601562 5.9453125 A 0.50005 0.50005 0 0 0 0.921875 5.9667969 L 1.2089844 6.8164062 A 0.50005 0.50005 0 0 0 1.2167969 6.8378906 L 1.5410156 7.671875 A 0.50005 0.50005 0 0 0 1.5507812 7.6933594 L 1.9140625 8.5117188 A 0.50005 0.50005 0 0 0 1.9238281 8.53125 L 2.3242188 9.3339844 A 0.50005 0.50005 0 0 0 2.3339844 9.3535156 L 2.7695312 10.136719 A 0.50005 0.50005 0 0 0 2.78125 10.158203 L 3.2539062 10.919922 A 0.50005 0.50005 0 0 0 3.2675781 10.939453 L 3.7734375 11.677734 A 0.50005 0.50005 0 0 0 3.7871094 11.695312 L 4.328125 12.410156 A 0.50005 0.50005 0 0 0 4.3417969 12.429688 L 4.9160156 13.119141 A 0.50005 0.50005 0 0 0 4.9316406 13.134766 L 5.5351562 13.798828 A 0.50005 0.50005 0 0 0 5.5507812 13.816406 L 6.1835938 14.449219 A 0.50005 0.50005 0 0 0 6.2011719 14.464844 L 6.8652344 15.068359 A 0.50005 0.50005 0 0 0 6.8808594 15.083984 L 7.5703125 15.658203 A 0.50005 0.50005 0 0 0 7.5898438 15.671875 L 8.3046875 16.210938 A 0.50005 0.50005 0 0 0 8.3222656 16.224609 L 9.0605469 16.732422 A 0.50005 0.50005 0 0 0 9.0800781 16.744141 L 9.8398438 17.216797 A 0.50005 0.50005 0 0 0 9.8613281 17.230469 L 10.646484 17.666016 A 0.50005 0.50005 0 0 0 10.666016 17.675781 L 11.46875 18.076172 A 0.50005 0.50005 0 0 0 11.488281 18.085938 L 12.306641 18.449219 A 0.50005 0.50005 0 0 0 12.328125 18.458984 L 13.162109 18.783203 A 0.50005 0.50005 0 0 0 13.183594 18.791016 L 14.033203 19.078125 A 0.50005 0.50005 0 0 0 14.054688 19.083984 L 14.916016 19.332031 A 0.50005 0.50005 0 0 0 14.939453 19.337891 L 15.810547 19.544922 A 0.50005 0.50005 0 0 0 15.833984 19.550781 L 16.716797 19.714844 A 0.50005 0.50005 0 0 0 16.738281 19.716797 L 17.625 19.84375 A 0.50005 0.50005 0 0 0 17.648438 19.847656 L 18.541016 19.931641 A 0.50005 0.50005 0 0 0 18.564453 19.933594 L 19.458984 19.976562 A 0.50005 0.50005 0 0 0 19.982422 19.476562 L 19.982422 13.484375 A 0.50005 0.50005 0 0 0 19.513672 12.986328 L 18.818359 12.941406 L 18.138672 12.861328 L 17.462891 12.748047 L 16.796875 12.599609 L 16.140625 12.412109 L 15.492188 12.193359 L 14.845703 11.933594 A 0.50005 0.50005 0 0 0 14.306641 12.044922 L 12.324219 14.027344 L 11.978516 13.837891 L 11.332031 13.445312 L 10.707031 13.021484 L 10.101562 12.566406 L 9.5195312 12.083984 L 8.9589844 11.576172 L 8.4238281 11.041016 L 7.9160156 10.480469 L 7.4335938 9.8984375 L 6.9785156 9.2929688 L 6.5546875 8.6660156 L 6.1601562 8.0214844 L 5.9707031 7.6777344 L 7.9550781 5.6933594 A 0.50005 0.50005 0 0 0 8.0664062 5.1542969 L 7.8066406 4.5078125 L 7.5878906 3.859375 L 7.4003906 3.2011719 L 7.2519531 2.5371094 L 7.1386719 1.8613281 L 7.0585938 1.1816406 L 7.0136719 0.48632812 A 0.50005 0.50005 0 0 0 6.515625 0.017578125 L 0.5234375 0.017578125 z M 1.046875 1.0175781 L 6.046875 1.0175781 L 6.0625 1.2578125 A 0.50005 0.50005 0 0 0 6.0644531 1.2851562 L 6.1464844 1.9902344 A 0.50005 0.50005 0 0 0 6.1503906 2.015625 L 6.2695312 2.7167969 A 0.50005 0.50005 0 0 0 6.2734375 2.7421875 L 6.4277344 3.4335938 A 0.50005 0.50005 0 0 0 6.4355469 3.4609375 L 6.6308594 4.1445312 A 0.50005 0.50005 0 0 0 6.6367188 4.1679688 L 6.8632812 4.8398438 A 0.50005 0.50005 0 0 0 6.8730469 4.8652344 L 7.015625 5.21875 L 5 7.234375 A 0.50005 0.50005 0 0 0 4.9140625 7.828125 L 5.2871094 8.5117188 A 0.50005 0.50005 0 0 0 5.3007812 8.5332031 L 5.7089844 9.1992188 A 0.50005 0.50005 0 0 0 5.7207031 9.2167969 L 6.1582031 9.8632812 A 0.50005 0.50005 0 0 0 6.171875 9.8847656 L 6.640625 10.507812 A 0.50005 0.50005 0 0 0 6.6542969 10.525391 L 7.1503906 11.126953 A 0.50005 0.50005 0 0 0 7.1679688 11.144531 L 7.6933594 11.722656 A 0.50005 0.50005 0 0 0 7.7089844 11.740234 L 8.2597656 12.291016 A 0.50005 0.50005 0 0 0 8.2773438 12.306641 L 8.8554688 12.832031 A 0.50005 0.50005 0 0 0 8.8730469 12.849609 L 9.4746094 13.345703 A 0.50005 0.50005 0 0 0 9.4921875 13.359375 L 10.115234 13.828125 A 0.50005 0.50005 0 0 0 10.136719 13.841797 L 10.783203 14.279297 A 0.50005 0.50005 0 0 0 10.802734 14.292969 L 11.46875 14.699219 A 0.50005 0.50005 0 0 0 11.488281 14.708984 L 12.171875 15.083984 A 0.50005 0.50005 0 0 0 12.765625 15 L 14.78125 12.984375 L 15.134766 13.126953 A 0.50005 0.50005 0 0 0 15.160156 13.136719 L 15.832031 13.363281 A 0.50005 0.50005 0 0 0 15.853516 13.369141 L 16.535156 13.564453 A 0.50005 0.50005 0 0 0 16.564453 13.572266 L 17.257812 13.726562 A 0.50005 0.50005 0 0 0 17.283203 13.730469 L 17.984375 13.849609 A 0.50005 0.50005 0 0 0 18.009766 13.853516 L 18.714844 13.935547 A 0.50005 0.50005 0 0 0 18.742188 13.9375 L 18.982422 13.953125 L 18.982422 18.953125 L 18.623047 18.935547 L 17.753906 18.853516 L 16.890625 18.728516 L 16.029297 18.568359 L 15.181641 18.367188 L 14.341797 18.126953 L 13.513672 17.845703 L 12.701172 17.53125 L 11.904297 17.175781 L 11.121094 16.785156 L 10.357422 16.361328 L 9.6171875 15.902344 L 8.8984375 15.40625 L 8.2011719 14.880859 L 7.5292969 14.322266 L 6.8828125 13.734375 L 6.265625 13.117188 L 5.6777344 12.470703 L 5.1191406 11.798828 L 4.5917969 11.101562 L 4.0976562 10.382812 L 3.6386719 9.640625 L 3.2148438 8.8789062 L 2.8242188 8.0957031 L 2.46875 7.2988281 L 2.1542969 6.4863281 L 1.8730469 5.6582031 L 1.6328125 4.8183594 L 1.4316406 3.9707031 L 1.2714844 3.109375 L 1.1464844 2.2460938 L 1.0644531 1.3769531 L 1.046875 1.0175781 z "
                style={{
                  fill: '#f00',
                  fillOpacity: 1,
                  strokeWidth: '0.0002',
                }}
              ></path>{' '}
            </g>{' '}
          </g>
        </svg>
      ),

      contact: '+251 9 000-000',
    },
    {
      icon: (
        <svg
          fill="#fd0808"
          width="35px"
          height="50px"
          viewBox="0 0 100.353 100.353"
          id="Layer_1"
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          stroke="#fd0808"
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
              <path d="M58.23,69.992l14.993-24.108c0.049-0.078,0.09-0.16,0.122-0.245c2.589-4.222,3.956-9.045,3.956-13.969 c0-14.772-12.018-26.79-26.79-26.79S23.72,16.898,23.72,31.67c0,4.925,1.369,9.75,3.96,13.975c0.03,0.074,0.065,0.146,0.107,0.216 l14.455,24.191c-11.221,1.586-18.6,6.2-18.6,11.797c0,6.935,11.785,12.366,26.829,12.366S77.3,88.783,77.3,81.849 C77.301,76.226,69.578,71.509,58.23,69.992z M30.373,44.294c-2.39-3.804-3.653-8.169-3.653-12.624 c0-13.118,10.672-23.79,23.791-23.79c13.118,0,23.79,10.672,23.79,23.79c0,4.457-1.263,8.822-3.652,12.624 c-0.05,0.08-0.091,0.163-0.124,0.249L54.685,70.01c-0.238,0.365-0.285,0.448-0.576,0.926l-4,6.432L30.507,44.564 C30.472,44.471,30.427,44.38,30.373,44.294z M50.472,91.215c-14.043,0-23.829-4.937-23.829-9.366c0-4.02,7.37-7.808,17.283-8.981 l4.87,8.151c0.269,0.449,0.751,0.726,1.274,0.73c0.004,0,0.009,0,0.013,0c0.518,0,1-0.268,1.274-0.708l5.12-8.232 C66.548,73.9,74.3,77.784,74.3,81.849C74.301,86.279,64.515,91.215,50.472,91.215z"></path>{' '}
              <path d="M60.213,31.67c0-5.371-4.37-9.741-9.741-9.741s-9.741,4.37-9.741,9.741s4.37,9.741,9.741,9.741 C55.843,41.411,60.213,37.041,60.213,31.67z M43.731,31.67c0-3.717,3.024-6.741,6.741-6.741s6.741,3.024,6.741,6.741 s-3.023,6.741-6.741,6.741S43.731,35.387,43.731,31.67z"></path>{' '}
            </g>{' '}
          </g>
        </svg>
      ),
      contact: 'King George IV, Addis Ababa, Ethiopia.',
    },
  ];

  return (
    <div className="relative bg-gray-100">
      <div
        className="h-96 bg-no-repeat bg-cover bg-top bg-opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        }}
      >
        <Fade>
          <h1 className="px-8 lg:pl-20 pt-40 text-3xl lg:text-7xl font-extrabold text-white">
            Contact us
          </h1>
        </Fade>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:p-8 ">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <div className="my-10 flex ">
              <h4
                className='left-0 flex text-xl uppercase tracking-widest text-gray-500  before:content[" "] before:m-auto   before:mr-2 before:h-0.5 before:w-8 before: before:bg-[#ff0000] before:rotate-180
 '
              >
                Contact us
              </h4>
            </div>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              We&apos;re here to help and answer any question you might have, We
              look forward to hearing from you! Please fill out the form, or us
              the contact information bellow .
            </p>
            <div className="p-8 bg-[rgb(31,45,77)]">
              <iframe
                className="gmap_iframe w-[100%] h-[100%]"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Addis Ababa university&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contacts.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p className="text-white">{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-6 sm:max-w-lg lg:max-w-md bg-white p-8 rounded-lg">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <h2 className="text-center text-2xl font-semibold">
                Send your message
              </h2>
              <div>
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 p-3  text-gray-500 bg-transparent outline-none border-2 border-gray-300 focus:border-gray-800 focus:ring-black focus:ring-opacity-20   focus:outline-none focus:ring  shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 p-3  text-gray-500 bg-transparent outline-none border-2 border-gray-300 focus:border-gray-800 focus:ring-black focus:ring-opacity-20 focus:outline-none focus:ring  shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border-2 border-gray-300 focus:border-gray-800 focus:ring-black focus:ring-opacity-20   focus:outline-none focus:ring  shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-3 text-white outline-none text-xl font-medium cursor-pointer  bg-[#ff0000] rounded duration-150">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
