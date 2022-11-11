import {CaretDown, X} from 'phosphor-react'
import { useEffect } from 'react';
import { useState } from 'react';
import './styles.scss'

export const SizeDropdown = ({ placeHolder, options }) => {
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const handler = () => setShowMenu(false)

        window.addEventListener('click', handler)
        return () => {
            window.addEventListener('click', handler)
        }
    })
    const handleInpitClick = (e) => {
        e.stopPropgation()
        setShowMenu(!showMenu)
    }

    const getDisplay = () => {
        return placeHolder;
      };
    
      return (
        <div className="dropdown_size_container">
          <div onClick={handleInpitClick} className="dropdown_size_input">
            {showMenu && (
                    <div className='dropdown_size_menu'>
                    {options.map((option) => (
                        <p key={option.id} className='dropdown_size_item'>
                           {option.productSize} 
                        </p>
                    ))}
                </div>
            )}
            <div className="dropdown_size_selected_value">{getDisplay()}</div>
            <div className="dropdown_size_tools">
              <div className="dropdown_size_tool">
              <CaretDown size={25}  />
              </div>
            </div>
          </div>
      
        </div>
      );
  }