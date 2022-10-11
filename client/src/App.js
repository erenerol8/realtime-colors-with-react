import "./App.css";

import { useEffect } from "react";
import Palette from "./components/Palette";
import { init } from "./socketApi";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <Palette />
    </div>
  );
}

export default App;
