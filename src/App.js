import StartPage from "./Pages/StartPage/StartPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/brindes" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
