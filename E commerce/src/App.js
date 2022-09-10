import "./App.css";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CustomHome from "./pages/CustomHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/list/" element={<ProductList />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/cart/" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
