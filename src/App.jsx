import { Route, Routes } from "react-router-dom";
import HardLevel from "./pages/HardLevel";
import MenuPage from "./pages/MenuPage";
import StarPage from "./pages/StarPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StarPage />} />
        <Route path="/home" element={<MenuPage />} />
        <Route path="/game/hard" element={<HardLevel />} />
      </Routes>
    </div>
  );
}

export default App;
