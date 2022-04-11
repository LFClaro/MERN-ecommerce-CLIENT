import React from 'react'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AdminContext from '../Context/AdminContext';


export default function AdminUsers() {
    const adminContext = useContext(AdminContext);
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        try {
            //let token = localStorage.getItem('token');
            //let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MWEyZGQ5YTJlMWQxMzIwNzcyMGY5IiwiZW1haWwiOiJhYWFAZ21haWwuY29tIn0sImlhdCI6MTY0OTUxNzI3NywiZXhwIjoxNjQ5NTUzMjc3fQ.VHEbHfUh5c29_FhSfF4U6aOq1axidIDSLHmKW6zafHQ"; 
            // let config = {
            //     headers: {
            //         'Content-Type':'application/json',
            //         'x-auth-token': token,
            //     }
            // }
            const response = await axios.get('http://localhost:5000/api/admin/all'/*, config*/);
            setUsers(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <>
        <div className='container'>
            <h1 className='text text-center text-black-50 mt-5'>Users Page</h1>
            <table className='table table-striped'>
                <tr>
                    {/* <th>First Name</th>*/}
                    <th>ID</th> 
                    <th>Email</th>
                    <th>Role</th>
                    <th colSpan={2}>Operations</th>
                </tr>
                {users.map((user) => (
                    <tr>
                        {/* <td>{user.fname}</td>*/}
                        <td>{adminContext.id_user = user._id}</td> 
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td><Link to="edit" className="btn btn-primary btn-sm" >Edit</Link></td>
                        <td><Link to="#" className="btn btn-danger btn-sm">Delete</Link></td>
                    </tr>
                ))}
            </table>
            <Link to="add" className='btn btn-primary btn-md'>Add User</Link>

        </div>
        </>
    );
}