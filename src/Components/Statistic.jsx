import React from 'react';
import Button from './Button';
import discussion from '../assets/discussion.png';
import { Fade } from '../Utils/Fade.motion';

const Statistic = () => {
  const statistics = [
    {
      bg: 'bg-rose-200',
      name: 'Active Jobs',
      value: 2643,
      color: 'bg-rose-500',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>
      ),
      trend: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-rose-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>
      ),
    },
    {
      bg: 'bg-blue-200',
      name: 'Users',
      color: 'bg-blue-500',
      value: 12323,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
      trend: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
    },
    {
      bg: 'bg-emerald-200',
      name: 'Applicants',
      color: 'bg-emerald-500',
      value: 6127,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
      trend: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-emerald-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-14 bg-zinc-100">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex lg:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <Fade>
            <div className="relative z-20 w-full ">
              <div
                className="p-8 md:px-20 text-white w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(45deg, rgba(0, 100, 150,0.9), rgba(0, 0, 0, 0.8)), url(${discussion})`,
                }}
              >
                <h2 className="text-3xl font-bold">
                  <span className="p-10 text-5xl bg-red-400">75% </span>
                  <p className="text-center">Chance of getting hired</p>
                </h2>
                <div className="text-sm py-6 text-white dark:text-white">
                  <p className="my-10">
                    We denounce with righteous indignation and dislike men who
                    are so beguiled and demoralized by the charms of pleasure of
                    your moment, so blinded by desire those who fail in their
                    duty through weakness. These cases are perfectly simple and
                    easy every pleasure is to be welcomed and every pain
                    avoided.
                  </p>
                  <Button
                    title={'Register Now'}
                    bg={'bg-blue-900'}
                    hover_bg={'bg-red-500'}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="xl:p-8 mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h2 className="xl:pt-10 xl:text-3xl text-center font-bold break-words ">
              Join hundred of thousand job seekers and employers.
            </h2>
            <p className="mt-3 max-w-xl text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              venenatis sollicitudin quam ut tincidunt.
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6 ">
            <ul className="grid gap-4 lg:gap-y-8 lg:gap-x-14 grid-cols-2 justify-center">
              {statistics.map((badge, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 z-10 md:w-56  ${badge?.bg} rounded-lg my-2 `}
                >
                  <div className="flex items-center flex-wrap">
                    <span className={`relative p-2 ${badge?.color} rounded-xl`}>
                      {badge?.icon}
                    </span>
                    <p className="ml-2 text-lg font-medium text-md ">
                      {badge?.name}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl mt-2 font-bold text-left text-gray-700 dark:text-gray-100">
                      {badge?.value}
                    </p>
                    <span
                      className={`${
                        badge.trend ? 'relative p-1 bg-white rounded-full' : ''
                      }`}
                    >
                      {badge?.trend}
                    </span>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
