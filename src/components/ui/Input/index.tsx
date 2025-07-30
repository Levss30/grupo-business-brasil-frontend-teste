import React from "react";

interface InputProps {
  className: string;
  label?: string;
  placeholder: string;
}

const Input = ({ className, label, placeholder }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" className={className} placeholder={placeholder} />
    </div>
  );
};

export default Input;
