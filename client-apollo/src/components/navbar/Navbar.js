import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
export default class Navbar extends Component {
    render(){
        return (
            <div>
                <Nav>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/signin">Signin</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/signup">Signup</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
                </Nav>
            </div>
        )
    }
}
