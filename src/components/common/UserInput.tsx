type UserInputProps = {
  label: string;
  type: string;
  name: string;
};

export default function UserInput({ label, type, name }: UserInputProps) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} required />
    </div>
  );
}
