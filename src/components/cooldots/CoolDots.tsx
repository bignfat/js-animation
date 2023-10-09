import Dot from "./Dot";

import './CoolDots.css';
import { useEffect, useState } from "react";

type CoolDotsProps = {
    cols?: number;
    rows?: number;
    dotRadius?: number;
    dotDistance?: number;
    sensitivity?: number;
    sharpness?: number;
}

export default function CoolDots({ cols = 10, rows = 10, dotRadius = 10, dotDistance = 20, sensitivity = 10, sharpness = 3 } : CoolDotsProps) {
    const cellWidth = 2 * dotDistance + 2 * dotRadius;
    const [mousePos, setMousePose] = useState<Position>({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePose({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);
    
    return (
        <div className="cool-dots" style={{width: cellWidth * cols + 'px', height: cellWidth * rows + 'px'}}>
            { Array.from({ length: cols * rows }, (_, i) => (
                <div key={i} className="cool-dots__cell" style={{width: cellWidth + 'px', height: cellWidth + 'px'}}>
                    <Dot radius={dotRadius} color="#345678" mousePos={mousePos} sensitivity={sensitivity} sharpness={sharpness} />
                </div>
            ))}
        </div>
    );
}