import {CaretDown, X} from 'phosphor-react'
import { useEffect } from 'react';
import { useState } from 'react';
import './styles.scss'

export const Dropdown = ({ placeHolder, options, isMulti }) => {

    const [showMenu, setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);

    useEffect(() => {
        const handler = () => setShowMenu(false)

        window.addEventListener('click', handler)
        return () => {
            window.removeEventListener('click', handler)
        }
    })

    const handleInputClick = (e) => {
        e.stopPropagation()
        setShowMenu(!showMenu)
    }

    const getDisplay = () => {
      if (!selectedValue || selectedValue.length === 0) {
        return placeHolder;
    }
    if (isMulti) {
      return (
          <div className="dropdown-tags">
              {selectedValue.map((option) => (
                  <div key={option.id} className="dropdown-tag-item">
                      {option.title}
                      <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close"><X size={20} /></span>
                  </div>
              ))}
          </div>
      );
  }
    return selectedValue.title;
    };


    const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value);
    };

    const onTagRemove = (e, option) => {
        e.stopPropagation();
        setSelectedValue(removeOption(option));
    };

    const onItemClick = (option) => {
        let newValue;
        if (isMulti) {
            if (selectedValue.findIndex((o) => o.id === option.id) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...selectedValue, option];
            }
        } else {
            newValue = option;
        }
        setSelectedValue(newValue);
    } 

    const isSelected = (option) => {
          if (isMulti) {
        return selectedValue.filter((o) => o.id === option.id).length > 0;
    }
    if (!selectedValue) {
        return false;
    }
        return selectedValue.id === option.id
    } 
  
    return (
      <div className="dropdown_container">
        <div onClick={handleInputClick} className="dropdown_input">
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