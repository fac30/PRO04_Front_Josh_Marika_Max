import React from "react";

export interface UserInputProps {
  label: string;
  type: string;
  name: string;
  labelClass?: string;
  inputClass?: string;
  value: string | number; // Accept string for text input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange handler
}

// UserInput function component
const UserInput = ({
  label,
  type,
  name,
  labelClass = "",
  inputClass = "",
  value,
  onChange,
}: UserInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={inputClass}
        required
        value={value} // Controlled input
        onChange={onChange} // onChange handler
      />
    </div>
  );
};

export default UserInput;
