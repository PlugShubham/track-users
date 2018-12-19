import React from 'react';
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap';
import './header.css';
import { NavLink} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <Navbar className="header-container">
                <NavbarBrand><NavLink to="/" id ="logo">Track Users</NavLink></NavbarBrand>
                <Nav navbar>
                <NavItem>
                    <NavLink to="/add" id="nav-item">ADD USER</NavLink>
                </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
