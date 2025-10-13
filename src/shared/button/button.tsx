import type { ReactNode, ButtonHTMLAttributes } from "react";
import './button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
    return (
        <button className="button" {...props}>
            {children}
        </button>
    );
}

export default Button;
