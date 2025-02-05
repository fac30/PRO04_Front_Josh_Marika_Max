import {Link} from 'react-router-dom';


type IconWithTextProps = {
    IconComponent: React.FC<{ size: number }>;
    label: string;
    to: string;
    onClick?: () => void;
  };

// remuve button and everything is inside trhe <link>
  const IconWithText = ({ IconComponent, label, to, onClick }: IconWithTextProps) => {
    return (
      <Link to={to}>
        <button
          type="button"
          onClick={onClick}
          className="flex items-center space-x-2 transition duration-300 text-text-primary hover:text-background-light focus:text-primary-dark focus:outline-none"
        >
          <IconComponent size={24} aria-hidden="true" />
          <span>{label}</span>
        </button>
      </Link>
    );
  };
  
  export default IconWithText;