import { useEffect } from "react";
import HexOptions from "./components/HexOptions";
import './css/main.css'

function App() {
  useEffect(() => {
    document.title = "Color Hex Guessing Game";
  });
  return (
    <div className="main-wrapper">
      <HexOptions />
    </div>
  );
}

export default App;
