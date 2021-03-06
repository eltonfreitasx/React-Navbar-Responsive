import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, Game} from './NavbarElements'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <>
            <Nav>
                <NavLink>
                   <Link to="/"><Game/></Link>
                </NavLink>
                <Bars />
                <NavMenu>
                   <NavLink>
                        <Link to="/about">About</Link>
                   </NavLink>
                   <NavLink>
                        <Link to="/services">Services</Link>
                   </NavLink>
                   <NavLink>
                        <Link to="/contact-us">Contact Us</Link>
                   </NavLink>
                   <NavLink>
                        <Link to="/sign-up">Sign Up</Link>
                   </NavLink>
                   {/*<NavBtn>
                    <Link to="/sign-in">Sign In</Link>
                    </NavBtn>*/}
                </NavMenu>
                    <NavBtn>
                    <Link to="/sign-in">Sign In</Link>
                    </NavBtn>
            </Nav>
        </>
    )
}