import { ButtonHTMLAttributes } from "react";

interface QuantifierButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick: () => void;
    disabled?: boolean; 
}

const QuantifierBtn = ({ text, onClick, disabled = false, ...props }: QuantifierButtonProps) => {
    const QuantifierBtnClasses = "rounded text-white font-bold bg-background-footer text-white hover:bg-accent-light transition w-12 h-12 flex justify-center items-center";

    return (
        <button
            className={QuantifierBtnClasses}
            onClick={onClick}
            disabled={disabled}
            aria-label={disabled.toString()} 
            {...props}
        >
            {text}
        </button>
    );
};

export default QuantifierBtn;
