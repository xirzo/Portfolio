import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import './iconButton.css';

interface IconButtonProps {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large' | 'xl';
    href?: string;
}

function IconButton({ children, size = 'medium', href, ...props }: IconButtonProps & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>)) {
    const className = `icon-button ${size !== 'medium' ? size : ''}`.trim();

    return href ? (
        <a href={href} className={className} {...props as AnchorHTMLAttributes<HTMLAnchorElement>}>
            {children}
        </a>
    ) : (
        <button className={className} {...props as ButtonHTMLAttributes<HTMLButtonElement>}>
            {children}
        </button>
    );
}

export default IconButton;
