import type { HTMLAttributes, ReactNode } from "react";
import './card.css'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

function Card({ children, ...props }: CardProps) {
    return (
        <div className="card" {...props}>
            {children}
        </div>
    )
}

export default Card;
