import type { ReactNode, ButtonHTMLAttributes } from "react";
import './button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'default' | 'text';
}

function Button({ children, variant = 'default', ...props }: ButtonProps) {
    return (
        <button
            className={`button ${variant === 'text' ? 'button-text' : ''}`} {...props}>
            {children}
        </button>
    );
}

export default Button;
