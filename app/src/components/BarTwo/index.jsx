import {MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";

export function BarTwo() {
  return (
    <div className="min-w-full top-[5.5rem] left-0 right-0 max-w-full  py-2 block md:flex  bg-gray-100 ">

      <input className="m-2 p-3 hidden  md:flex items-center  bg-gray-500 border-red-900"/>
  

      <input className="m-2 p-3 hidden  md:flex items-center bg-gray-500 border-red-900"/>


      <input className="m-2 p-3 hidden md:flex items-center bg-gray-500 border-red-900"/>

      
      <input className="m-2 p-3 hidden  md:flex items-center bg-gray-500 border-red-900"/>

      <div className="flex items-center m-2 md:w-[50%] md:ml-36 ">
        <input
          type="text"
          placeholder="Procure seu produto"
          className="h-12 w-[100%] p-2  rounded-sm border-2 border-black"
        />

        <MagnifyingGlass
          size={32}
          className="text-white border-2 border-black bg-black h-12 w-10 rounded-sm"
        />
      </div>
    </div>
  );
}
