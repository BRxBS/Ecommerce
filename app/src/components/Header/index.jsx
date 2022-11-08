import { ShoppingCart, MagnifyingGlass, HeartStraight } from "phosphor-react";
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
        <div className = 'search-box'>
      <input className = "search-text" type="text" placeholder = "Pesquise o produto"/>
     <a href="#" className = "search-btn">
      <i className="fas fa-search">
         <MagnifyingGlass size={36}/>
      </i>
      </a>
    
       </div>

          <Link to={"/Cart"}>
            <ShoppingCart size={38} className=" ShoppingCart" />
          </Link>

          <Link to={"/Cart"} >
          <HeartStraight size={38} className='HeartStraight'/>
          </Link>

          <TheModal />
        </div>
      </header>
    </div>
  );
}
