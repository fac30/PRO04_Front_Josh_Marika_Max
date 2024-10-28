import React from "react";

export interface UserInputProps {
  id: string;
  label: string;
  type: string;
  name: string;
  labelClass?: string;
  inputClass?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInput = ({
  id,
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
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={inputClass}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default UserInput;
