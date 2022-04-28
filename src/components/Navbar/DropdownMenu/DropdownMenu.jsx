import React, { useState } from 'react'
import './DropdownMenu.scss'
import DropdownItem from '../DropdownItem/DropdownItem'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

function DropdownMenu(props) {
  console.log('opajsdjbas', props.dropdown)
  console.log("HELOOOOOOOOOO")
  const primaryMenuName = `${props.description}-primary-menu`;
  const [displayedMenu, setDisplayedMenu] = useState(primaryMenuName);
  return (
    <div className="dropdown-menu">
      <CSSTransition in={displayedMenu === primaryMenuName} unmountOnExit timeout={500} classNames='nav-menu-primary'>

        <div className={primaryMenuName}>
          {props.dropdown.map(function (x, i) {
            // if there is a secondary menu, the secondary menu is named that, on click the dropdown item will take you there
            if (x.secondary) {
              const secondaryMenu = x.description.split(' ').join('-') + '-secondary-menu'
              console.log(secondaryMenu, 'secondary')
              return (
                <DropdownItem setDisplayedMenu={setDisplayedMenu} secondaryMenu={secondaryMenu} link={x.link} leftIcon={x.leftIcon} rightIcon={x.rightIcon} description={x.description} />
              )
            }
            else {
              return (
                <DropdownItem link={x.link} leftIcon={x.leftIcon} rightIcon={x.rightIcon} description={x.description} />
              )
            }
            console.log("LINK", x.link);
          })}

        </div>
      </CSSTransition>

      {props.dropdown.map(function (x, i) {
        if (x.secondary) {
          const secondaryMenu = x.description.split(' ').join('-') + '-secondary-menu'
          console.log(secondaryMenu, 'secondary2')
          return (
            // create CSS transition
            <CSSTransition in={displayedMenu === secondaryMenu} unmountOnExit timeout={500} classNames='nav-menu-secondary'>
              <div className={secondaryMenu}>
                <DropdownItem setDisplayedMenu={setDisplayedMenu} primaryMenuName={primaryMenuName} link={x.link} leftIcon={x.leftIcon} rightIcon={x.rightIcon} description={x.description} />
                {
                  x.secondary.map(function (x, i) {
                    return <DropdownItem link={x.link} leftIcon={x.leftIcon} rightIcon={x.rightIcon} description={x.description} />
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