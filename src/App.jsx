import { Route, Routes } from "react-router-dom";
import Board from "./components/Board";
import MenuPage from "./pages/MenuPage";
import StarPage from "./pages/StarPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StarPage />} />
        <Route path="/home" element={<MenuPage />} />
        <Route path="/gameHard" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
