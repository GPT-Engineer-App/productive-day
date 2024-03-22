import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Horses from "./pages/Horses.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/horses" element={<Horses />} />
      </Routes>
    </Router>
  );
}

export default App;
