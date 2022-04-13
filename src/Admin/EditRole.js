import React, { useContext } from 'react'
import { useState } from 'react';
import axios from 'axios';
import AdminContext from '../Context/AdminContext';
import jwtDecode from 'jwt-decode';

export default function EditRole() {
    const adminContext = useContext(AdminContext);
    const [roleData, setRoleData] = useState({
        _id:'',
        role: '',
    });
    const { role } = roleData;

    const onChange = (e) => {
        setRoleData({ ...roleData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        //let token = localStorage.getItem('token');
        //let decode = jwtDecode(token);
        //let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MWEyZGQ5YTJlMWQxMzIwNzcyMGY5IiwiZW1haWwiOiJhYWFAZ21haWwuY29tIn0sImlhdCI6MTY0OTUxNzI3NywiZXhwIjoxNjQ5NTUzMjc3fQ.VHEbHfUh5c29_FhSfF4U6aOq1axidIDSLHmKW6zafHQ";
        // let config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'x-auth-token': token,
        //     }
        // }

        let data = {
            role,
            _id: adminContext.id_user,
        }

        try {
            const response = await axios.put(
                'http://localhost:5000/api/admin/',
                data/*,
                config*/);
            console.log('User role Updated');

        } catch (error) {
            console.log(error.response.data.errors)
        }
    }

    return (
        <div className='container'>
            <h1 className='text text-center text-black-50 mt-5'>Edit User Role</h1>
            <p>id is : {adminContext.id}</p>
            <form onSubmit={(e) => onSubmit(e)}>
                <div>
                    <input
                        type='text'
                        placeholder='role'
                        name='role'
                        value={role}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <input type='submit' value='Update' />
            </form>
        </div>
    );
}
