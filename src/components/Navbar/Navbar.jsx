import React from 'react'
import './Navbar.scss'
import NavItem from './NavItem/NavItem'
import { ReactComponent as LogoIcon } from '../../icons/logo.svg'
import DropdownMenu from './DropdownMenu/DropdownMenu'
function Navbar(props) {

    const navList = [
        {
            link: null,
            icon: <LogoIcon />,
            description: 'sometext',
            dropdown: [{
                leftIcon: <LogoIcon />,
                description: "first item",
                rightIcon: null,
                advanced: false,
                link:"/about"
            },
            {
                leftIcon: <LogoIcon />,
                description: "second item",
                rightIcon: null,
                advanced: false,
                link:"/about"
            }, {
                leftIcon: <LogoIcon />,
                description: "third item",
                rightIcon: <LogoIcon />,
                advanced: false,
                link:"/about"
            }]

        },
        {
            link: "/home2",
            icon: <LogoIcon />,
            description: 'sometext',
            dropdown: null,

        },

    ]

    return (
        <nav className='navbar'>
            <ul className="navbar-list">

                {
                    navList.map(function (x, i) {
                        if (x.dropdown) {
                            return (<NavItem key={i} link={x.link} description={x.description} icon={x.icon}>

                                <DropdownMenu key={i} dropdown={x.dropdown} />
                            </NavItem>)
                        }
                        else {
                            return (
                                <NavItem link={x.link} description={x.description} icon={x.icon}>
                                    BOB
                                </NavItem>
                            )

                        }
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar