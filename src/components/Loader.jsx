import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-96 w-full">
      <div
        className={`animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900 `}
      ></div>
      <p className="text-gray-900 text-lg"></p>
    </div>
  );
};

export default Loader;
