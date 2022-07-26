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
          size={38}
          className="py-1 h-[5.375rem] mx-8 bg-black text-white"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <aside className=" relative bg-black ">
          <div className="h-[5.375rem] py-1 bg-black">
            <X
              size={34}
              className="ml-[6rem] mt-5 text-white"
              onClick={() => setOpen(!open)}
            />
          </div>

          {SideBarData.map((item, index) => {
            return (
              <ul className="w-40">
                <li key={index} className="flex p-6  bg-gray-700 text-white ">
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
