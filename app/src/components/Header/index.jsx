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
    <div className='container_header' >
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
