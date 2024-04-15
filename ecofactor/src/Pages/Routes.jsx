import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./NoPage";
import ChatGpt4 from "./chatGpt4/ChatGpt4";
import ESGGuidelineChecker from "./esgGuidelineChecker/ESGGuidelineChecker";
import Materials from "./material catalouge/Materials";
import Pricing from "./pricing page/Pricing";
import ProductOptimization from "./productOptimization/ProductOptimization";
import Products from "./products catalouge/Products";
import Suppliers from "./supplier directory/Suppliers";
import Guidelines from "./usg guidelines/Guidelines";
function CustomRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductOptimization />} />
          <Route path="/esg-guidlines" element={<ESGGuidelineChecker />} />
          <Route path="/regular-chatgpt4" element={<ChatGpt4 />} />
          <Route path="/pricing/:title" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/guidelines" element={<Guidelines />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default CustomRoutes;
