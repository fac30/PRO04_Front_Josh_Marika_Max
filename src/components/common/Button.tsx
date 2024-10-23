import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  text: string;
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Button = ({
  onClick,
  text,
  children,
  className = "",
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 rounded text-white transition duration-300 focus:outline-none focus:ring";

  const colorClasses = disabled
    ? "bg-background-light cursor-not-allowed"
    : "bg-primary hover:bg-primary-dark focus:bg-primary-dark";

  return (
    <button
      className={`${baseClasses} ${colorClasses} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      {...props} // Spread other ButtonHTMLAttributes
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
