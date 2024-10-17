import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  text: string;
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
}

const Button = ({ onClick, text, children }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
