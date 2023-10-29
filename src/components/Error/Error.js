import React from "react";

const Error = () => {
  return (
    <div
      className="w-2/4 m-auto mt-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline"> Something went wrong!</span>
    </div>
  );
};

export default Error;
