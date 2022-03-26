import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminProducts() {
    const [product, setProduct] = useState([
        {
            id: "1",
            brand: "Apple",
            model: "iPhone 13",
            memory: "128 GB",
            price: "1200 $",

        },
        {
            id: "2",
            brand: "Apple",
            model: "iPhone 13 Pro Max",
            memory: "256 GB",
            price: "1550 $",

        }
    ]);

    return (
        <div>
            <table className='table'>
            <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Memory</th>
                <th>Price</th>
                <th colSpan='2'>Operations</th>
            </tr>
                {product.map((e) => (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.brand}</td>
                        <td>{e.model}</td>
                        <td>{e.memory}</td>
                        <td>{e.price}</td>
                        <td><Link to="" className="btn btn-outline-primary btn-sm-3">Edit</Link></td>
                        <td><Link to="" className="btn btn-outline-danger btn-sm-3">Delete</Link></td>
                    </tr>
                ))}

            </table>

        </div>
    );
}