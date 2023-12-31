import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="p-2 m-2 cursor-pointer bg-gray-100 rounded-lg hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
