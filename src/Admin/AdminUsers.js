import React from 'react'
import { Link } from 'react-router-dom';
import AdminProducts from './AdminProducts';

export default function AdminUsers() {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container-fluid" data-aos="fade-up">
                <div className="row justify-content-center">
                    <section id="services" className="services section-bg">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2 className='text-black-50 fs-2'>Admin Services</h2>
                            </div>
                            <div className="row gy-4">
                                <div className='col-sm-4 bg-light p-4'>
                                    <div className='list-group'>
                                        <li className="list-group-item"><Link to="">Users</Link></li>
                                        <li className="list-group-item"><Link to="">Add Admin</Link></li>
                                        <li className="list-group-item"><Link to="">Add new Role</Link></li>
                                        <li className="list-group-item"><Link to="list-group-item">Products</Link></li>
                                    </div>
                                </div>

                                <div className="col-xl bg-light p-4">

                                    <AdminProducts />

                                </div>
                            
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}