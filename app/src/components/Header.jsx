import {ShoppingCart,} from 'phosphor-react'
import Icon from "./Icon";
import { Link } from "react-router-dom";
import { TheModal } from './Modal';

export function Header() {
   // const [open, setOpen] = useState(false);
   
  return (
    <div className="flex max-h-[5.375rem] min-w-full justify-between bg-black">
      <header className="py-1 flex  w-screen items-center justify-between bg-black">
        <Link to={"/"}>
          <Icon className="m-auto" />
        </Link>

        <div>
          <Link to={"/Cart"}>
            <ShoppingCart size={38} className=" text-white" />
          </Link>
        </div>
      </header>
      <TheModal />
    </div>
  );
}
