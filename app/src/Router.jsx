
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import {SingleProduct} from "./screens/SingleProduct"
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { Cart } from "./screens/Cart";
import { Shipping } from "./screens/Shipping";
import { Payment } from "./screens/Payment";
import { Post } from "./screens/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/post" element={<Post/>}/>

    </Routes>
  );
}
