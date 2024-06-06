import React, { useState } from 'react';
import './custom-input.css';

interface IProps {
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<IProps> = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`custom-textfield ${isFocused ? 'focused' : ''}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="custom-textfield-input"
      />
      <label className={`custom-textfield-label ${value ? 'shrink' : ''}`}>
        {label}
      </label>
      <fieldset className="custom-textfield-fieldset">
        <legend className={`custom-textfield-legend ${value ? 'shrink' : ''}`}>
          {label}
        </legend>
      </fieldset>
    </div>
  );
};

export default CustomInput;