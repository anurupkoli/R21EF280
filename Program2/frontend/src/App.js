import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductState from "./Contexts/ProductState";
import Main from "./Components/Main";
import Product from "./Components/Product"
function App() {
  return (
    <ProductState>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>}></Route>
          <Route exact path="/Product" element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
    </ProductState>
  );
}

export default App;
