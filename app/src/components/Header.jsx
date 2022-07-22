import {ShoppingCart,List, X} from 'phosphor-react'
import {  useState, useEffect } from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { SideBar } from './SideBar';

export function Header() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleNavigate = (path) => {
      navigate(path);
    };

    useEffect(() => {
      if (pathname === "/sideBar") {
        setOpen(false);
      }
    }, [pathname]);
 
  return (
    <header className=" fixed top-0 left-0 right-0 max-w-full py-1 flex  items-center justify-between bg-black">
      <Link to={"/"}>
        <Icon className="m-auto" />
      </Link>

      <div className="flex">
        <Link to={"/Cart"}>
          <ShoppingCart size={38} className="m-3 mx-10 text-white" />
        </Link>

        <div
          className="flex items-center justify-between p-4  cursor-pointer "
          onClick={() => setOpen(!open)}
        >
          <p>Aulas</p>
          {open ? (
            <List
              size={38}
              className="m-3 mx-10 text-white"
              onClick={() => <SideBar/>}
            />
          ) : (
            <X
              size={38}
              className="m-3 mx-10 text-white"
              onClick={() => handleNavigate(-1)}
            />
          )}
        </div>
      </div>
    </header>
  );
}
