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
    <>
      <header className="header">
        <Link to={"/"}>
          <Icon className="icon" />
        </Link>
        


        <div className="wrapper_icons">

          <Link 
          to={"/cart"}>
            <ShoppingCart size={38} className=" ShoppingCart" />
          </Link>
          {cartSize === 0 ? '' :  
          <p className="cartLength"
          > {cartSize} </p>}
         

          <Link to={"/favorite"} >
            { favActive < 1 
            ? <HeartStraight size={38} className='HeartStraight'/>
            : <HeartStraight size={38} className='HeartStraight'   weight="fill" color= "#017ff0"  /> 
            }
          </Link>

      
        </div>
      </header>
    </>
  );
}
