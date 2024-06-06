import React from "react";
import "./custom-input.css";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  endIcon?: React.ReactNode;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, endIcon, ...rest }) => {
  return (
    <div className="custom-input-container">
      {label && <label className="custom-input-label">{label}</label>}
      <div className="custom-input-wrapper">
        <input className="custom-input" {...rest} />
        {endIcon && <div className="end-icon">{endIcon}</div>}
      </div>
    </div>
  );
};

export default CustomInput;
