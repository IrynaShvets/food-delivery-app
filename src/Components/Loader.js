import React from "react";
import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed z-100">
      <Hearts
        className="bg-gradient-to-r from-red-400 to-red-800"
        height={150}
        width={150}
      />
    </div>
  );
};

export default Loader;
