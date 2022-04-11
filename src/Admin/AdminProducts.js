import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AdminProducts() {
    const [product, setProduct] = useState([]);

    const getAllProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/product'); //Add link
            setProducts(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className='container'>
            <h1 className='text text-center text-black-50 mt-5'>Products Page</h1>
            <table className='table'>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Memory</th>
                    <th>Price</th>
                    <th colSpan='2'>Operations</th>
                </tr>
                {/* {product.map((e) => (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.brand}</td>
                        <td>{e.model}</td>
                        <td>{e.memory}</td>
                        <td>{e.price}</td>
                        <td><Link to="" className="btn btn-outline-primary btn-sm-3">Edit</Link></td>
                        <td><Link to="" className="btn btn-outline-danger btn-sm-3">Delete</Link></td>
                    </tr>
                ))} */}

            </table>

        </div>
    );
}