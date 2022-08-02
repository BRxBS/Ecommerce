import { Header } from "../components/Header";
import { BarTwo } from "../components/BarTwo";
import { CardProduct } from "../components/CardProduct";
import { SideBar } from "../components/SideBar";

export function HomePage(){
  window.scrollTo(0, 0);
    return (
      <>
        <Header />
        <BarTwo />
       
        <div className="block flex-wrap md:pl-20 p-6">
          <CardProduct />
        </div>

      </>
    );
}