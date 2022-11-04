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
<<<<<<< HEAD
       <div className="container_HomePage">
=======
      <div className="container_HomePage">
>>>>>>> 747cb5614311f06824d29cb44fc311b07cbc2632
        <CardProduct />
      </div>
    </>
  );
}
