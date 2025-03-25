import React from "react";

const Input = ({ value, onChange, placeholder }) => (
  <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-2 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-400"
  />
);

export default Input;
