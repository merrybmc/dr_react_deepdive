import { useState } from 'react';
import './AppXY.css';

function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className='container'
      onPointerMove={(event) => {
        setPosition({ x: event.clientX, y: event.clientY });
        // setPosition({ ...position, x: event.clientX });
      }}
    >
      <div style={{ transform: `translate(${position.x}px,${position.y}px)` }} className='pointer'></div>
    </div>
  );
}

export default AppXY;
