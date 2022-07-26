import {ShoppingCart,List, X} from 'phosphor-react'
import {  useState, useEffect } from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { SideBar } from './SideBar';

export function Header() {
   // const [open, setOpen] = useState(false);
   
  return (
    <div className="flex max-h-[5.375rem] justify-between bg-black">
      <header className=" top-0 left-0 right-0 py-1 flex  w-screen items-center justify-between bg-black">
        <Link to={"/"}>
          <Icon className="m-auto" />
        </Link>

        <div>
          <Link to={"/Cart"}>
            <ShoppingCart size={38} className=" text-white" />
          </Link>
        </div>
      </header>
      <SideBar />
    </div>
  );
}
