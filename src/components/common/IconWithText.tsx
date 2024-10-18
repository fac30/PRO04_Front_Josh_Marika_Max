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
         className="flex items-center space-x-2 hover:text-gray-600 focus:text-gray-600"
         >
        <IconComponent size={24} aria-hidden="true" />
        <span>{label}</span>
      </button>
    );
  };

  export default IconWithText;