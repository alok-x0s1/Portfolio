import React from "react";

const Input = ({ type, ...rest }) => {
  return (
    <div>
      <input
        className="max-w-80 min-w-80 w-fit px-6 py-4 border rounded-md shadow-md bg-primary-bg-light outline-none"
        type={type}
        {...rest}
      />
    </div>
  );
};

export default Input;
