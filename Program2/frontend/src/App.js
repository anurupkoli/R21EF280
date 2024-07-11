import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductState from "./Contexts/ProductState";
import Main from "./Components/Main";
function App() {
  return (
    <ProductState>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </ProductState>
  );
}

export default App;
