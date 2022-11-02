import {CaretDown} from 'phosphor-react'
import { useEffect } from 'react';
import { useState } from 'react';
import './styles.scss'

export const Dropdown = ({ placeHolder, options }) => {

    const [showMenu, setShowMenu] = useState(false)
    const [selectValue, setSelectValue] = useState(null)

    useEffect(() => {
        const handler = () => setShowMenu(false)

        window.addEventListener('click', handler)
        return () => {
            window.removeEventListener('click', handler)
        }
    })

    const handleinputClick = (e) => {
        e.stopPropagation()
        setShowMenu(!showMenu)
    }
    const getDisplay = () => {
        if(selectValue) {
            return selectValue.title
        }
      return placeHolder;
    };
    const onItemClick = (option) => {
        setSelectValue(option)
    } 
    const isSelected = (option) => {
        if (!selectValue) {
            return false
        }
        return selectValue.id === option.id
    } 
  
    return (
      <div className="dropdown_container">
        <div onClick={handleinputClick} className="dropdown_input">
           {showMenu && (
             <div className='dropdown_menu'>
                {options.map((option) => (
                    <div
                    onClick={() => onItemClick(option)} 
                    key={option.id} 
                    className={`dropdown_item ${isSelected(option) && 'selectd'}`}>
                        {option.title}
                    </div>
                ))}
            </div>
           )}
          <div className="dropdown-selected-value">{getDisplay()}</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
            <CaretDown size={20} />
            </div>
          </div>
        </div>
      </div>
    );
  }