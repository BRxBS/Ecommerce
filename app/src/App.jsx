import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header";
import { CartProvider }from './hooks/useCart';
import { FavProvider } from './hooks/useFav';
import { UserProvider } from './hooks/useUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <FavProvider>
          <UserProvider>
            <CartProvider>
              <Header/>
              <Router />
            </CartProvider>
          </UserProvider>
        </FavProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
