import React from "react";

export interface UserInputProps {
  label: string;
  type: string;
  name: string;
  labelClass?: string;
  inputClass?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UserInput({
  label,
  type,
  name,
  labelClass = "",
  inputClass = "",
  value = "",
  onChange,
}: UserInputProps) {
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
