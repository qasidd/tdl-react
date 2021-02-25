import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
    NavbarToggler,
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <div className="container">
                    <Link to="/" className="navbar-brand">tdl</Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/about" className="nav-link">About</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.github.com/qasidd" target="_blank">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
};

export default Navigation;