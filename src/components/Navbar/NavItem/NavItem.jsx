import React, { useState } from 'react'
import './NavItem.scss';
import { Link } from "react-router-dom";

function NavItem(props) {
    const [open, setOpen] = useState(false);
    if (props.link) {
        return (
            <li className="nav-item">
                <Link to={props.link}>
                    <div className="icon-button" onClick={() => setOpen(!open)}>
                        {props.icon}
                    </div>
                </Link>
            </li >
        )
    }
    else {
        return (
            <li className="nav-item">
                <div className="icon-button" onClick={() => setOpen(!open)}>
                    {props.icon}
                </div>
                {(() => {
                    if (props.dropdownDisplay === "closeAll" && open === true) {
                        //close nav dropdown and change
                        setOpen(false)
                        props.setDropdownDisplay('working')
                    }
                })()}
                {open && props.children}
            </li >
        )
    }
}

export default NavItem