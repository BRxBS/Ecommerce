import {CaretDown, CaretUp} from 'phosphor-react'
import { useEffect } from 'react';
import { useState } from 'react';
import './styles.scss'

export const SizeDropdown = ({ placeHolder, options }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null)

    useEffect(() => {
        const handler = () => setShowMenu(false)

        window.addEventListener('click', handler)
        return () => {
            window.addEventListener('click', handler)
        }
    },[])
    const handleInputClick = (e) => {
        e.stopPropagation()
        setShowMenu(!showMenu)
    }

    const getDisplay = () => {
        if (selectedValue) {
          return selectedValue.id
        }
        return placeHolder
      };

      const onItemClick = (option) => {
        setSelectedValue(option)
      }
      const isSelected = (option) => {
        if (!selectedValue){
          return false;
        }

        return selectedValue.productSize === option.productSize
      }
    
      return (
        <div className="dropdown_size_container">
          <div onClick={handleInputClick} className="dropdown_size_input">
            {showMenu && (
                    <div className='dropdown_size_menu'>
                    {options.map((option) => (
                        <p
                         onClick={() => onItemClick(option)}
                         key={option.id} 
                         className={`dropdown_size_item ${isSelected(option) && "selected"}`}>
                           {option.productSize} 
                        </p>
                    ))}
                </div>
            )}
            <div className="dropdown_size_selected_value">{getDisplay()}</div>
            <div className="dropdown_size_tools">
              <div className="dropdown_size_tool">
              {showMenu ? <CaretUp size={25} /> :  <CaretDown size={25}  />}
             
              
              </div>
            </div>
          </div>
      
        </div>
      );
  }