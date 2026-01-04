import { useState } from "react";
import "./Wallpaper.css";

const Wallpaper = () => {
  const [percent, setPercent] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPercent({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div
        className="elispe e1"
        style={{
          transform: `translate(${percent.x * 10}px, ${percent.y * 10}px)`,
        }}
      >
        <img src="Ellipse.png" alt="" />
      </div>

      <div
        className="elispe e2"
        style={{
          transform: `translate(${percent.x * 11}px, ${
            percent.y * 11
          }px) rotate(170deg)`,
        }}
      >
        <img src="Ellipse.png" alt="" />
      </div>

      <div
        className="elispe e3"
        style={{
          transform: `translate(${percent.x * 6}px, ${
            percent.y * 6
          }px) rotate(-90deg)`,
        }}
      >
        <img src="Ellipse.png" alt="" />
      </div>
      <div
        className="elispe e4"
        style={{
          transform: `translate(${percent.x * 20}px, ${
            percent.y * 20
          }px) rotate(-50deg)`,
        }}
      >
        <img src="Ellipse.png" alt="" />
      </div>
      <div
        className="elispe e5"
        style={{
          transform: `translate(${percent.x * 14}px, ${
            percent.y * 14
          }px) rotate(80deg)`,
        }}
      >
        <img src="Ellipse.png" alt="" />
      </div>
      <div
        className="elispe e6"
        style={{
          transform: `translate(${percent.x * 14}px, ${
            percent.y * 14
          }px) rotate(130deg)`,
        }}
      >
        <img src="Ellipse.png" alt="" />
      </div>
    </div>
  );
};

export default Wallpaper;
