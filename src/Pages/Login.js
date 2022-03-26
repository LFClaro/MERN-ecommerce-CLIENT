import React, { useState } from 'react';
import { Grid, Box, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

const fieldStyle = { background: "white", padding: 20, minWidth: "25em", hight: "55vh", margin: "0 auto", }
const formikError = { textAlign: "left", fontSize: "0.72rem", fontWeight: 500, marginTop: "5px", color: "#dc3545", };

// Yup for validation ============
const validationSchema = yup.object({
    email: yup.string().email("Please enter a valid email address").required("Email is required!"),
    password: yup.string().required("Password is required!"),
});

//******************************************************* */
const Login = ({ setAuthorized }) => {
    const navigate = useNavigate();

    //password visibility settings
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => { setShowPassword(!showPassword); };
    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    //***************back end link changes may needed */
    const onSubmit = async (values) => {
        console.log(process.env.BACKEND_API);
        const res = await fetch(process.env.BACKEND_API+`/api/auth`, {
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
            alert(`Oops! ${payload.errors}`);
        } else if (res.status === 200) {
            console.log('the token is created: ', payload.token);
            localStorage.setItem('token', payload.token);
            setAuthorized(true);
            navigate('/');
        } else {
            alert(`unknow error`);
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
                        <h3 class="">Sign In</h3><br />

                        {/* email TextField */}
                        <div>
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
                            <div><button type='submit' class="btn btn-primary mb-2">Get Started!</button></div>
                            <div><Link to="../signup" >  <u>Create Account</u></Link></div>
                        </div>

                    </form>
                    {/* {console.log("formik: ", formik)} */}
                </Box>
            </section>
        </div>
    )
}

export default Login