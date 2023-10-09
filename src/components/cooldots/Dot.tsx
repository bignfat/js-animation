import { useRef } from "react";

type DotProps = {
    radius: number;
    color: string;
    mousePos: Position;
    sensitivity: number;
    sharpness: number;
}

export default function Dot({ radius, color, mousePos, sensitivity, sharpness } : DotProps) {
    const element = useRef<HTMLDivElement>(null);
    
    if (element.current !== null) {
        const bounds = element.current.getBoundingClientRect();
        const pos = {
            x: bounds.x + bounds.width/2,
            y: bounds.y + bounds.height/2
        };

        const distance = Math.sqrt(
            Math.pow(mousePos.x - pos.x, 2) + 
            Math.pow(mousePos.y - pos.y, 2)
        );

        if (distance/radius < sensitivity) {
            radius += (sensitivity * radius - distance)/sharpness;
        }
        console.log(pos.x, mousePos.x, pos.y, mousePos.y, distance, radius);
    }

    return (
        <div ref={element} className="dot" style={{
            width: radius * 2 + 'px',
            height: radius * 2 + 'px',
            borderRadius: radius + 'px',
            backgroundColor: color
        }} />
    )
}