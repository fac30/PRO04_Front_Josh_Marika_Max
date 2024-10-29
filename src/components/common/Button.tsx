import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button = ({
  onClick,
  text,
  className = "",
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => (
    <button
    className={`px-4 py-2 rounded text-white transition duration-300 focus:outline-none focus:ring ${
      disabled ? "bg-background-light cursor-not-allowed" : "bg-primary hover:bg-primary-dark"
  } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      {...props} // Spread other ButtonHTMLAttributes
    >
      {text}
    </button>
  );


export default Button;
