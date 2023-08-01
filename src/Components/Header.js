import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderAvatar from './HeaderAvatar';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Header({ authorized, setAuthorized }) {
  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href={process.env.PUBLIC_URL}>MERN Maniacs</a></h1>
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto ">
                <Nav.Link href={process.env.PUBLIC_URL + "/about"}>
                  About
                </Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + "/services"}>
                  Services
                </Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + "/team"}>
                  Team
                </Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + "/profile"}>
                  Profile
                </Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + "/community"}>
                  Community
                </Nav.Link>
                {authorized &&
                  <NavDropdown
                    title="Items"
                    id="collapsible-nav-dropdown"
                    menuVariant="light"
                  >
                    <NavDropdown.Item
                      href={process.env.PUBLIC_URL + "/addItem"}
                      style={{ color: "indigo" }}
                    >
                      Add Item
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href={process.env.PUBLIC_URL + "/products"}
                      style={{ color: "indigo" }}
                    >
                      Rent Item
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href={process.env.PUBLIC_URL + "/yourProducts"}
                      style={{ color: "indigo" }}
                    >
                      See your Items
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                }                
                {authorized && 
                <>
                <Nav.Link href={process.env.PUBLIC_URL + "/cart"}>
                  Cart
                </Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + "/messages"}>
                  Messages
                </Nav.Link>
                </>
                }
              </Nav>
              <Nav>
                <Nav.Link href={process.env.PUBLIC_URL + "/contact"}>
                  Contact
                </Nav.Link>
                <Nav.Link href={process.env.PUBLIC_URL + "/faq"}>
                  FAQ
                </Nav.Link>
                {authorized === false && <Link className="getstarted scrollto" to={process.env.PUBLIC_URL + "/login"}>Get Started</Link>}
                {authorized && <HeaderAvatar setAuthorized={setAuthorized} />}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  );
}

