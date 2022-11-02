import { AddressBook, NotePencil, Gear, SignOut, SignIn} from "phosphor-react";
import React from "react";
import './styles.scss'

export const ModalData = [
  { id: 1,
    title: "Login",
    path: "/login",
    icon: <SignIn size={32} />,
  },
  { id: 2,
    title: "Post",
    path: "/post",
    icon: <NotePencil size={32} />,
  },
  { id: 3,
    title: "Address",
    path: "/address",
    icon: <AddressBook size={32} />,
  },
  { id: 4,
    title: "settings",
    path: "/settings",
    icon: <Gear size={32} />,
  },
  { id: 5,
    title: "exit",
    path: "/exit",
    icon: <SignOut size={32} />,
  },
];
