import React from 'react'
import{Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Container}from 'reactstrap';

const AppNavbar = () => {
    return (
        <div>
             <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Book Shop</NavbarBrand>
                        <NavbarToggler />
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                              <NavItem>
                                  <NavLink href="https://github.com/jamil4321">
                                    Github
                                  </NavLink>
                              </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
        </div>
    )
}

export default AppNavbar
