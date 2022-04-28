import React from 'react'
import { Link } from 'react-router-dom'
import './DropdownItem.scss'
function DropdownItem(props) {
    if (props.secondaryMenu){
        return (
                <div className="dropdown-item open-secondary" onClick={()=>props.setDisplayedMenu(props.secondaryMenu)}>
                    <span className="icon-button">{props.leftIcon}</span>
                    <span className="dd-description">{props.description}</span>
                    {props.rightIcon && <span className="icon-button icon-right">{props.rightIcon}</span>}
                </div>
        )
    }
    else if(props.primaryMenuName){
        return(
                <div onClick={()=>{props.setDisplayedMenu(props.primaryMenuName)}} className="dropdown-item go-back">
                    <span className="icon-button">{props.leftIcon}</span>
                    <span className="dd-description">{props.description}</span>
                    {props.rightIcon && <span className="icon-button icon-right">{props.rightIcon}</span>}
                </div>
        )
    }
    else{
        return (
            <Link to={props.link} >
                <div className="dropdown-item" onClick={()=>props.setDropdownDisplay('closeAll')}>
                    <span className="icon-button">{props.leftIcon}</span>
                    <span className="dd-description">{props.description}</span>
                    {props.rightIcon && <span className="icon-button icon-right">{props.rightIcon}</span>}
                </div>
            </Link>
        )
    }
}

export default DropdownItem