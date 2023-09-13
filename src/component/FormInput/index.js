// FormInput.js
import React from "react";

function FormInput({ label, placeholder, errorMessage, fullWidth }) {
  const inputClassName = `p-2 ${
    fullWidth ? "w-full" : "w-[350px]"
  } outline-0 rounded-md bg-transparent border-2 border-gray-500 cursor-pointer placeholder:italic placeholder:text-[grey]`;

  return (
    <label className="flex flex-col">
      <span className="flex font-bold text-lg text-gray-500 cursor-pointer">
        {label}
      </span>
      <input className={inputClassName} placeholder={placeholder} />
      <p className="mt-2 opacity-1 text-red-500 text-sm cursor-pointer">
        {errorMessage}
      </p>
    </label>
  );
}

export default FormInput;
