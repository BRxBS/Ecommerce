import { ShoppingCart } from "phosphor-react";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import { TheModal } from "../Modal";
import "./styles.scss";

export function Header() {
  // const [open, setOpen] = useState(false);
  //   <div className="flex max-h-[5.375rem] min-w-full justify-between bg-black">
  //  <header className="py-1 flex  w-screen items-center justify-between bg-black">
  return (
<<<<<<< HEAD
    <div className='container_header' >
=======
    <div className="container_Header">
>>>>>>> 747cb5614311f06824d29cb44fc311b07cbc2632
      <header className="header">
        <Link to={"/"}>
          <Icon className="icon" />
        </Link>

        <div className="wrapper_icons">
          <Link to={"/Cart"}>
            <ShoppingCart size={38} className=" ShoppingCart" />
          </Link>
          <TheModal />
        </div>
      </header>
    </div>
  );
}
