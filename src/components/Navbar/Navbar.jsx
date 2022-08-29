import React, { useState } from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'

const Navbar = () => {
    const [click, setClick ] = useState(false);

    const handleClick = setClick(!click)
    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo>
                        <NavIcon>
                            ULTRA
                        </NavIcon>
                    </NavLogo>
                    <MobileIcon onClick={handleClick} click={click}>
                        { click ? <FaTimes /> : <FaBars /> }
                    </MobileIcon>

                    {/* Menu */}
                    <NavMenu onClick={handleClick}>
                    {/* Home */}
                        <NavItem>
                            <NavLinks path='/'>Home</NavLinks>
                        </NavItem>
                   
                    {/* Services */}
                        <NavItem>
                            <NavLinks path='/services'>Services</NavLinks>
                        </NavItem>
                    
                    {/* Products */}
                        <NavItem>
                            <NavLinks path='/'>Products</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
       
    )
}

export default Navbar