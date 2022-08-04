import React, {useState} from "react";
import {List, X } from "phosphor-react";
import { SideBarData } from "./SideBarData";
import { Link } from "react-router-dom";


export function SideBar() {
    const [open, setOpen] = useState(false);

  return (
    <>
      {!open ? (
        <List
          size={42}
          className="py-1 h-[5.375rem] mx-8 bg-black text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <aside className=" relative bg-black w-[7rem] md:w-[10rem]">
          <div className="h-[5.375rem] py-1 bg-black">
            <X
              size={34}
              className="ml-12 mt-5 md:ml-[6rem] md:mt-5 text-white cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          {SideBarData.map((item) => {
            return (
              <ul className="w-40 ">
                <li
                  key={item.id}
                  className="flex  w-[7rem]  md:w-[10rem] p-2 md:p-6 bg-gray-700 text-white "
                >
                  <Link to={item.path} className="flex">
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              </ul>
            );
          })}
        </aside>
      )}
    </>
  );
}
