import {MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";
import './styles.scss'
import { Dropdown } from "./Dropdown";
import { DropdownData } from "./DropdownData";

export function BarTwo() {
  //min-w-full top-[5.5rem] left-0 right-0 max-w-full  py-2 block md:flex  bg-gray-100 
 
  // <button className="section">Sapatos</button>
 // <button className="section">Blusas</button>            
 // <button className="section">Calças</button>
  return (
    <div className="container_barTwo">


      <Dropdown placeHolder='Select...' options={DropdownData}
             />   
 



      <div className="Wrapper">
        <input
          type="text"
          placeholder="Procure seu produto"
          className="searching_input"
        />

        <MagnifyingGlass
          size={32}
          className="MagnifyingGlass"
        />
      </div>
    </div>
  );
}
