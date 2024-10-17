import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  text: string
  className?: string
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset'
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}


const Button = ({
  onClick,
  text,
  children,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) => {

  return (
    <button
      className={`px-4 py-2 rounded text-white transition duration-300 ${disabled ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} focus:outline-none focus:ring`}
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