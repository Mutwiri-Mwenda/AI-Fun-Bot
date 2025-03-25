import React from "react";

const Button = ({ onClick, disabled, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
  >
    {children}
  </button>
);

export default Button;
