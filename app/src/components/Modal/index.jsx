import React, {useState} from "react";
import {List, X } from "phosphor-react";
import { ModalData } from "./ModalData";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import './styles.scss'



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
        <button onClick={openModal}  >
          <List
            size={42}
            className="button_styles"
            onClick={() => setOpen(!open)}
          />
        </button>
      ) : (
        <button onClick={closeModal} >
          <X
            size={42}
            className="button_styles"
            onClick={() => setOpen(!open)}
          />
          <Modal
            isOpen={ModalIsOpen}
            onRequestClose="disabled"
            className='modal'
            //fixed top-[5.4rem] right-0"
            overlayClassName="bg-none"
          >
            {ModalData.map((item) => {
              return (
                <ul className="">
                  <li
                    key={item.id}
                    
                  >
                    <Link to={item.path}  style={{textDecoration: 'none'}}>
                      <div>
                      {item.icon}
                      <span>{item.title}</span>
                      </div>

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
