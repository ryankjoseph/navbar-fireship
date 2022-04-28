import React, { useState } from 'react'
import './DropdownMenu.scss'
import DropdownItem from '../DropdownItem/DropdownItem'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

function DropdownMenu(props) {
  const primaryMenuName = `${props.description}-primary-menu`;
  const [displayedMenu, setDisplayedMenu] = useState(primaryMenuName);
  const [menuHeight, setMenuHeight] = useState(null);
  function calcHeight(el){
    const height = el.offsetHeight;
    setMenuHeight(height)
  }
  return (
    <div className="dropdown-menu" style={{height: menuHeight}}>
      <CSSTransition in={displayedMenu === primaryMenuName} unmountOnExit timeout={500} classNames='nav-menu-primary' onEnter={calcHeight}>

        <div className={primaryMenuName}>
          {props.dropdown.map(function (x, i) {
            // if there is a secondary menu, the secondary menu is named that, on click the dropdown item will take you there
            if (x.secondary) {
              const secondaryMenu = x.description.split(' ').join('-') + '-secondary-menu';
              return (
                <DropdownItem setDisplayedMenu={setDisplayedMenu} secondaryMenu={secondaryMenu} link={x.link} leftIcon={x.leftIcon} rightIcon={x.rightIcon} description={x.description} />
              )
            }
            else {
              return (
                <DropdownItem dropdownDisplay= {props.dropdownDisplay} setDropdownDisplay={props.setDropdownDisplay} link={x.link} leftIcon={x.leftIcon} rightIcon={x.rightIcon} description={x.description} />
              )
            }
          })}

        </div>
      </CSSTransition>

      {props.dropdown.map(function (x, i) {
        if (x.secondary) {
          const secondaryMenu = x.description.split(' ').join('-') + '-secondary-menu';
          return (
            // create CSS transition
            <CSSTransition in={displayedMenu === secondaryMenu} unmountOnExit timeout={500} classNames='nav-menu-secondary' onEnter={calcHeight}>
              <div className={secondaryMenu}>
                <DropdownItem setDisplayedMenu={setDisplayedMenu} primaryMenuName={primaryMenuName} leftIcon={x.leftIcon} rightIcon={x.rightIcon} description="Previous menu" />
                {
                  x.secondary.map(function (x, i) {
                    return <DropdownItem dropdownDisplay= {props.dropdownDisplay} setDropdownDisplay={props.setDropdownDisplay} link={x.link} leftIcon={x.leftIcon} rightIcon={x.rightIcon} description={x.description} />
                  })
                }
              </div>
            </CSSTransition>
          )
        }
      })}

    </div>
  )
}

export default DropdownMenu