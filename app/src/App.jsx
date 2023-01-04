import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header";
import { CartProvider }from './hooks/useCart';
import { FavProvider } from './hooks/useFav';


function App() {
  return (
    // to start the db.json 
    // npx json-server -p 8000 -w db.json
    <>
      <BrowserRouter>
        <FavProvider>
            <CartProvider>
              <Header/>
              <Router />
            </CartProvider>
        </FavProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
