import React from 'react';

const Progress = () => {
  return (
    <div className="mx-4">
      <div className="mt-2">
        <div className="flex items-center justify-between mb-1">
          <span className="w-4 h-4 border-2 border-fuchsia-600 rounded-full"></span>
          <span className="text-base font-medium ">
            <p className="px-3 text-sm font-nunito break-words">
              Reducing rate by 15%
            </p>
          </span>
          <div className="w-20 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: '35%' }}
            ></div>
          </div>
          <span className="text-sm font-medium text-fuchsia-700">45%</span>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-between mb-1">
          <span className="w-4 h-4 border-2 border-blue-300 rounded-full"></span>
          <span className="text-base font-medium">
            <p className="px-3 text-sm font-nunito break-words">
              Reducing rate by 15%
            </p>
          </span>
          <div className="w-20 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-300 h-2.5 rounded-full"
              style={{ width: '100%' }}
            ></div>
          </div>
          <span className="text-sm font-medium text-blue-300">100%</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
