import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAdm = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="#">Admin Panel</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="#">Home</Link>
                        </li>                
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Users
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" to="#">List Users</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" to="#">List Products</Link>
                                <Link class="dropdown-item" to="#">Add Product</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavbarAdm;