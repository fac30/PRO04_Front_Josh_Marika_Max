type IconWithTextProps = {
    IconComponent: React.FC<{ size: number }>;
    label: string;
  };


  const IconWithText = ({ IconComponent, label }: IconWithTextProps) => {
    return (
      <div className="flex items-center space-x-2 hover:text-gray-600">
        <IconComponent size={24} />
        <span>{label}</span>
      </div>
    );
  };

  export default IconWithText;