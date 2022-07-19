import { ShoppingCart, List } from "phosphor-react";
import Icon from "./Icon";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className=" fixed top-0 left-0 right-0 max-w-full py-2 flex  items-center justify-between bg-black">
      <Link to={"/"}>
        <Icon className="m-auto" />
      </Link>

      <div className="flex">
        <Link to={"/Cart"}>
          <ShoppingCart size={38} className="m-3 mx-10 text-white" />
        </Link>

        <List size={38} className="m-3 mx-10 text-white" />
      </div>
    </header>
  );
}
