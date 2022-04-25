import React from 'react'
import './DropdownMenu.scss'
import DropdownItem from '../DropdownItem/DropdownItem'
import { Link } from 'react-router-dom'

function DropdownMenu(props) {
  console.log('opajsdjbas', props.dropdown)
  console.log("HELOOOOOOOOOO")

  return (
    <div className="dropdown-menu">
      { props.dropdown.map(function(x,i){
        console.log("LINK", x.link);
        return <DropdownItem link = {x.link} leftIcon={x.leftIcon} rightIcon={x.rightIcon} description = {x.description} />
      })}
    </div>
  )
}

export default DropdownMenu