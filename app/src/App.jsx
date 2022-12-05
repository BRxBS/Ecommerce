import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header";
import {CartProvider}from './hooks/useCart'

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <Header/>
        <Router />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
