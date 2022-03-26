import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderAvatar from './HeaderAvatar';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Header({ authorized, setAuthorized }) {
    return (
        <>
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo"><a href="index.html">MERN Maniacs</a></h1>


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
          <Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mr-auto ">
              <Nav.Link className="text-light" href="#features">
                <Link className="nav-link scrollto" to="about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link className="text-light" href="#pricing">
                <Link className="nav-link scrollto" to="services">
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link className="text-light" href="#pricing">
                <Link className="nav-link scrollto" to="team">
                  Team
                </Link>
              </Nav.Link>
              <Nav.Link className="text-light" href="#pricing">
                <Link className="nav-link scrollto " to="profile">
                  Profile
                </Link>
              </Nav.Link>
              <Nav.Link className="text-light" href="#pricing">
                <Link className="nav-link scrollto " to="community">
                  Community
                </Link>
              </Nav.Link>
              <NavDropdown
                title="Products"
                id="collasible-nav-dropdown"
                menuVariant="light"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  style={{ color: "indigo" }}
                >
                  Category 0
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  style={{ color: "indigo" }}
                >
                  Category 1
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  style={{ color: "indigo" }}
                >
                  Category 2
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  style={{ color: "indigo" }}
                >
                  All Products
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link className="text-light" href="#deets">
                <Link className="nav-link scrollto" to="contact">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link className="text-light" eventKey={2} href="#memes">
                <Link className="nav-link scrollto" to="faq">
                  FAQ
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        </div>      
      </header>
    </>
  );
}

