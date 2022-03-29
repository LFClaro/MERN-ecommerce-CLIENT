import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderAvatar from './HeaderAvatar';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Header({ authorized, setAuthorized }) {
  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href="/">MERN Maniacs</a></h1>


          {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                     <nav id="navbar" className="navbar">
                         <ul>
                             <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                             <li><Link className="nav-link scrollto" to="about">About</Link></li>
                             <li><Link className="nav-link scrollto" to="services">Services</Link></li>
                             <li><Link className="nav-link scrollto " to="products">Products</Link></li>
                             <li><Link className="nav-link scrollto" to="team">Team</Link></li>
                             
                             <li><Link className="nav-link scrollto" to="contact">Contact</Link></li>
                             <li><Link className="nav-link scrollto" to="faq">FAQ</Link></li>
                             <li>{authorized === false && <Link className="getstarted scrollto" to="login">Get Started</Link>}</li>
                             {authorized && <HeaderAvatar setAuthorized={setAuthorized} />}
                         </ul>
                         <i className="bi bi-list mobile-nav-toggle"></i>
                     </nav>
                 </div>
             </header>


         </>
     ); 

              <a href="index.html" className="logo">
                <img src="assets/img/logo.png" alt="" className="img-fluid" />
              </a>
            </div>
          </Navbar.Brand>*/}


          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto ">
                <Nav.Link href="about">
                  About
                </Nav.Link>
                <Nav.Link href="services">
                  Services
                </Nav.Link>
                <Nav.Link href="team">
                  Team
                </Nav.Link>
                <Nav.Link href="profile">
                  Profile
                </Nav.Link>
                <Nav.Link href="community">
                  Community
                </Nav.Link>
                {authorized &&
                  <NavDropdown
                    title="Items"
                    id="collapsible-nav-dropdown"
                    menuVariant="light"
                  >
                    <NavDropdown.Item
                      href="addItem"
                      style={{ color: "indigo" }}
                    >
                      Add Item
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.2"
                      style={{ color: "indigo" }}
                    >
                      Rent Item
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action/3.4"
                      style={{ color: "indigo" }}
                    >
                      See your Items
                    </NavDropdown.Item>
                  </NavDropdown>
                }
              </Nav>
              <Nav>
                <Nav.Link href="contact">
                  Contact
                </Nav.Link>
                <Nav.Link href="faq">
                  FAQ
                </Nav.Link>
                {authorized === false && <Link className="getstarted scrollto" to="login">Get Started</Link>}
                {authorized && <HeaderAvatar setAuthorized={setAuthorized} />}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  );
}

