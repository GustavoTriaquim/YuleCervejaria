import StartPage from "./Pages/StartPage/StartPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellerPage from "./Pages/SellerPage/SellerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/brindes" element={<ProductsPage />} />
        <Route path="/vendedor" element={<SellerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
