import React from 'react'
import { Link } from 'react-router-dom'
import './DropdownItem.scss'
function DropdownItem(props) {
    // console.log(props);
    console.log("HELLO")
    return (
        <Link to={props.link}>
            <div className="dropdown-item">
                <span className="icon-button">{props.leftIcon}</span>
                <span className="dd-description">{props.description}</span>
                {props.rightIcon && <span className="icon-button icon-right">{props.rightIcon}</span>}
            </div>
        </Link>
    )
}

export default DropdownItem