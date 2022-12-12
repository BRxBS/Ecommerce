import { ShoppingCart, MagnifyingGlass, HeartStraight } from "phosphor-react";
import Icon from "../Icon/Icon";
import SmallIcon from '../Icon/SmallIcon'
import { Link } from "react-router-dom";
import { TheModal } from "../Modal";
import { useCart } from "../../hooks/useCart";
import { useFav } from "../../hooks/useFav";
import "./styles.scss";

export function Header() {
  const {cart} = useCart()
  const {fav} = useFav()
  const cartSize = cart.length;
  const favActive = fav.length;
 
 
  return (
    <div className='container_header' >
      <header className="header">
        <Link to={"/"}>
          <Icon className="icon" />
        </Link>
        
        <Link to={"/"} className="small_icon" >
          <SmallIcon  />
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

          <Link 
         
          to={"/cart"}>
            <ShoppingCart size={38} className=" ShoppingCart" />
          </Link>
          {cartSize === 0 ? '' :  <p
            className="cartLength"
            >{cartSize}</p>}
         

     { //    <Link to={"/Cart"} className="small_ShoppingCart">
        //    <ShoppingCart size={30}  />
        //  </Link>
     }

          <Link to={"/favorite"} >
            { favActive < 1 
            ? <HeartStraight size={38} className='HeartStraight'/>
            : <HeartStraight size={38} className='HeartStraight'   weight="fill" color= "#017ff0"  /> 

            }

          </Link>

        { // <Link to={"/Cart"} className='small_HeartStraight' >
         // <HeartStraight size={30} />
         // </Link>
         }

          <TheModal />
        </div>
      </header>
    </div>
  );
}
