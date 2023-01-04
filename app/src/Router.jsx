
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import {SingleProduct} from "./screens/SingleProduct"
import { Cart } from "./screens/Cart";
import { Favorite } from "./screens/Favorite";




export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorite />} />



 
    </Routes>
  );
}
