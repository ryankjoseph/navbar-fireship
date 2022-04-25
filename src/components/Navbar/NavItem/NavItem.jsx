import React, { useState } from 'react'
import './NavItem.scss';
import { Link } from "react-router-dom";

function NavItem(props) {
    const [open, setOpen] = useState(false);
    console.log(props.link,"@navItem");
    if(props.link){

        return (
            <li className="nav-item">
                
                <Link to={props.link}>
                    <div className="icon-button" onClick={()=>setOpen(!open)}>
                        {props.icon} 
                    </div>
                </Link>
            </li >
        )
    }
    else{
        return(
        <li className="nav-item">
            
                <div className="icon-button" onClick={()=>setOpen(!open)}>
                    {props.icon}
                </div>
            {open && props.children}
        </li >
        )

    }

}

export default NavItem