import { AddressBook, NotePencil, Gear, SignOut, SignIn} from "phosphor-react";
import React from "react";

export const SideBarData = [
  {
    title: "Login",
    path: "/login",
    icon: <SignIn size={32} />,
  },
  {
    title: "Post",
    path: "/post",
    icon: <NotePencil size={32} />,
  },
  {
    title: "Address",
    path: "/address",
    icon: <AddressBook size={32} />,
  },
  {
    title: "settings",
    path: "/settings",
    icon: <Gear size={32} />,
  },
  {
    title: "exit",
    path: "/exit",
    icon: <SignOut size={32} />,
  },
];
