import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repassword: ''
    });
    const { email, password, repassword } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();

        // let token = localStorage.getItem('token');
        // let config = {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'x-auth-token': token,
        //   },
        // };

        let data = {
            email,
            password,
            repassword,
        };
        try {
            const response = await axios.post(
                'http://localhost:5000/api/users',
                data
            );
        } catch (e) {
            console.log(e.response.data.errors);
        }
        navigate("../users")

    };

    return (
        <>
            <div className='container'>
                <h1 className='text text-center text-black-50 mt-5'>Add a new User</h1>
                <form onSubmit={(e) => onSubmit(e)} className="form">
                    <div className='col-md-3 mb-3'>
                        <input
                            type='text'
                            placeholder='Email'
                            name='email'
                            value={email}
                            className="form-control"
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </div>
                    <div className='col-md-3 mb-3'>
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={password}
                            className="form-control"
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                    <div className='col-md-3 mb-3'>
                        <input
                            type='password'
                            placeholder='Re-password'
                            name='repassword'
                            value={repassword}
                            className="form-control"
                            onChange={(e) => onChange(e)}
                        />
                    </div>

                    <input type='submit' value='Create' className='btn btn-primary btn-md'/>
                </form>
            </div>
        </>
    )
}
