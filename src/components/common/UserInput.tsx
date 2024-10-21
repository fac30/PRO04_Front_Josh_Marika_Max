type UserInputProps = {
  label: string;
  type: string;
  name: string;
  labelClass?: string;
  inputClass?: string;
};

export default function UserInput({
  label,
  type,
  name,
  labelClass = "",
  inputClass = "",
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
      />
    </div>
  );
}
