import { Header } from "../../components/Header";
import { BarTwo } from "../../components/BarTwo";
import { CardProduct } from "../../components/CardProduct";
import "./styles.scss";

export function HomePage() {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <BarTwo />
       <div className="container_HomePage">
        <CardProduct />
      </div> 

    </>
  );
}
