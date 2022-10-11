import { useState } from "react";
import { send } from "../socketApi";

const Palette = ({ activeColor }) => {
  const [color, setColor] = useState("color");
  return (
    <div className="palette">
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>click</button>
    </div>
  );
};

export default Palette;
