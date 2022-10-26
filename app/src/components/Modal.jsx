import React, {useState} from "react";
import {List, X } from "phosphor-react";
import { ModalData } from "./ModalData";
import { Link } from "react-router-dom";
import Modal from "react-modal";



export function TheModal() {
    const [open, setOpen] = useState(false);
    const [ModalIsOpen, setModalIsOpen] = useState(false);

      function openModal() {
        setModalIsOpen(true);
      }

        function closeModal() {
          setModalIsOpen(false);
        }

  return (
    <>
      {!open ? (
        <button onClick={openModal}>
          <List
            size={42}
            className="py-1 h-[5.375rem] mx-8 bg-black text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </button>
      ) : (
        <button onClick={closeModal} className=" py-1 bg-black">
          <X
            size={42}
            className="py-1 h-[5.375rem] mx-8  text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <Modal
            isOpen={ModalIsOpen}
            onRequestClose="disabled"
            className="fixed top-[5.4rem] right-0"
            overlayClassName="bg-none"
          >
            {ModalData.map((item) => {
              return (
                <ul className="w-40 ">
                  <li
                    key={item.id}
                    className="flex  w-[10rem] p-6 bg-gray-700 text-white "
                  >
                    <Link to={item.path} className="flex">
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </Modal>
        </button>
      )}
    </>
  );
}
