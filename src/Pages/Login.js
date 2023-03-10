import React, { useState } from 'react';
import { Grid, Box, FormControl, InputLabel, Input, InputAdornment, IconButton, Typography, Alert } from '@mui/material';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import decode from 'jwt-decode';

const fieldStyle = { background: "white", padding: 20, minWidth: "25em", hight: "55vh", margin: "0 auto", }
const formikError = { textAlign: "left", fontSize: "0.72rem", fontWeight: 500, marginTop: "5px", color: "#dc3545", };

// Yup for validation ============
const validationSchema = yup.object({
    email: yup.string().email("Please enter a valid email address").required("Email is required!"),
    password: yup.string().required("Password is required!"),
});

//******************************************************* */
const Login = ({ setAuthorized, adminLogInFun }) => {
    const navigate = useNavigate();
    const [errorExist, setErrorExist] = useState(false);
    const [errorMsg, setErrorMsg] = useState();

    //password visibility settings
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => { setShowPassword(!showPassword); };
    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    //***************back end link changes may needed */
    const onSubmit = async (values) => {
        console.log(process.env.REACT_APP_API_URL);
        const res = await fetch(process.env.REACT_APP_API_URL + `/api/auth`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                mode: 'no-cors'
            },
            body: JSON.stringify({
                ...values,
            }),
        });

        const payload = await res.json();
        console.log(res.status);
        console.log("post login payload", payload);

        if (res.status >= 400) {
            setAuthorized(false);
            // alert(`Oops! ${payload.errors}`);
            setErrorExist(true)
            setErrorMsg(`Oops! ${payload.errors}`);
        } else if (res.status === 200) {
            console.log('the token is created: ', payload.token);
            localStorage.setItem('token', payload.token);

            //check weather the role is the admin
            let decodetoken = decode(payload.token);

            if (decodetoken.user.role == 'admin') {
                console.log("admin? ", decodetoken.user.role == 'admin')
                // setIsAdminLogged(true);
                adminLogInFun();
                navigate('/');
            }

            setAuthorized(true);
            navigate('/');
        } else {
            setErrorExist(true);
            setErrorMsg(`unknow error`);
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });

    return (
        <div>
            {/* {console.log("formik: ", formik)} */}

            <section id="hero" className="d-flex align-items-center justify-content-center">
                <Box component={Grid} boxShadow={10} borderRadius={8} container justifyContent="center" alignItems="center"
                    style={{ background: "white", minWidth: "20em", maxWidth: "30em", minHeight: "70vh", maxHeight: "40em" }}>

                    <form className="justify-content-center" onSubmit={formik.handleSubmit}>
                        <h3 className="">Sign In</h3><br />

                        {errorExist && <Alert severity="warning" onClose={() => { setErrorExist(false) }}>{errorMsg}</Alert>}

                        {/* email TextField */}
                        <div div >
                            <TextField style={fieldStyle} type="text" id='email' name='email' required
                                variant='standard' label="Email" placeholder='Enter Email'
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </div>

                        {/* password TextField */}
                        <div>
                            <FormControl style={fieldStyle} variant="standard">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" name="password" required
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="errorMsg-password2" style={formikError}>
                                        {formik.errors.password}
                                    </div>) : null}

                            </FormControl>
                        </div>

                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <div><button type='submit' className="btn btn-primary mb-2">Get Started!</button></div>
                            <div><Link to="../signup" >  <u>Create Account</u></Link></div>
                        </div>

                    </form>
                    {/* {console.log("formik: ", formik)} */}
                </Box>
            </section >
        </div >
    )
}

export default Login