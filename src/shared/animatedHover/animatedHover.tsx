import { useRef, type ReactNode } from "react";
import './animatedHover.css'

export interface AnimatedHoverProps {
    children: ReactNode;
    scale?: number;
    rotateMaxX?: number;
    rotateMaxY?: number;
}

function AnimatedHover({
    children,
    scale = 1.02,
    rotateMaxX: rotateMaxX = 16,
    rotateMaxY = 24
}: AnimatedHoverProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const hovering = useRef(false);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!hovering.current) {
            return;
        }

        const element = elementRef.current;

        if (!element) {
            return;
        }

        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (-y / rect.height) * rotateMaxY;
        const rotateY = (x / rect.width) * rotateMaxX;

        element.style.transform = `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function handleMouseEnter() {
        hovering.current = true;

        if (elementRef.current) {
            elementRef.current.style.transform = `scale(${scale})`;
        }
    }

    function handleMouseLeave() {
        hovering.current = false;

        if (elementRef.current) {
            elementRef.current.style.transform = "";
        }
    }

    return (
        <div
            ref={elementRef}
            className='animated-hover'
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}

export default AnimatedHover;
