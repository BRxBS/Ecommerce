import { Header } from "../components/Header";
import { BarTwo } from "../components/BarTwo";
import { CardProduct } from "../components/CardProduct";

export function HomePage(){
  window.scrollTo(0, 0);
    return (
      <>
        <Header />
        <BarTwo />
        <div className="block p-6">
          <CardProduct />
        </div>

      </>
    );
}