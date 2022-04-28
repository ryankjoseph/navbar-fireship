import React, {useState } from 'react'
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
                secondary: false,
                link: "/about1"
            },
            {
                leftIcon: <LogoIcon />,
                description: "second item",
                rightIcon: null,
                secondary: false,
                link: "/about11"
            }, {
                leftIcon: <LogoIcon />,
                description: "third item",
                rightIcon: <LogoIcon />,
                secondary: false,
                link: "/about12"
            }]

        },
        {
            link: "/home2",
            icon: <LogoIcon />,
            description: 'sometext',
            dropdown: null,

        },
        {
            link: null,
            icon: <LogoIcon />,
            description: 'sometext',
            dropdown: [{
                leftIcon: <LogoIcon />,
                description: "first item 1",
                rightIcon: null,
                link: "/about3",
                secondary: [{
                    leftIcon: <LogoIcon />,
                    description: "first primary item",
                    rightIcon: null,
                    link: "/aboot",
                },
                {
                    leftIcon: <LogoIcon />,
                    description: "second secondary item",
                    rightIcon: null,
                    link: "/aboot2",
                },
            ],
            },
            {
                leftIcon: <LogoIcon />,
                description: "second item",
                rightIcon: null,
                secondary: false,
                link: "/about31"
            }, {
                leftIcon: <LogoIcon />,
                description: "third item",
                rightIcon: <LogoIcon />,
                secondary: false,
                link: "/about32"
            }]

        },

    ]
    //attempt at closing other nav items
    const [dropdownDisplay, setDropdownDisplay] = useState('working');
    return (
        <nav className='navbar'>
            <ul className="navbar-list">
                {
                    navList.map(function (x, i) {
                        if (x.dropdown) {
                            return (
                            <NavItem dropdownDisplay= {dropdownDisplay} setDropdownDisplay={setDropdownDisplay} key={i} link={x.link} description={x.description} icon={x.icon}>
                                <DropdownMenu dropdownDisplay= {dropdownDisplay} setDropdownDisplay={setDropdownDisplay} description = {x.description} key={i} dropdown={x.dropdown} />
                            </NavItem>)
                        }
                        else {
                            return (
                                <NavItem link={x.link} description={x.description} icon={x.icon}>
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