type IconWithTextProps = {
    IconComponent: React.FC<{ size: number }>;
    label: string;
    onClick?: () => void;
  };


  const IconWithText = ({ IconComponent, label, onClick }: IconWithTextProps) => {
    return (
         <button
         type="button"
         onClick={onClick}
         className="flex items-center space-x-2 transition duration-300 text-text-primary hover:text-primary-dark focus:text-primary-dark focus:outline-none"
         >
        <IconComponent size={24} aria-hidden="true" />
        <span>{label}</span>
      </button>
    );
  };

  export default IconWithText;