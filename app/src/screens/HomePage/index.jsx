import { Header } from "../../components/Header";
import { BarTwo } from "../../components/BarTwo";
import { CardProduct } from "../../components/CardProduct";
import "./styles.scss";

export function HomePage() {
  return (
    <div className="homePage_wrapper">
       <div className="container_HomePage">
        <CardProduct />
      </div>
    </div>
  );
}
