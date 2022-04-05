import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { TextField, Grid, Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Yup  form Validation =================
const VALID_PASS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validationSchema = yup.object({
  email: yup.string().email("Please enter a valid email address").required("Email is required!"),
  password: yup.string().matches(VALID_PASS, "Please enter a strong password ").required("Password is required!"),
  confirmPassword: yup.string().required().oneOf([yup.ref("password"), null], "Passwords must match"),
});

//style ============
const fieldStyle = {
  background: "white",
  padding: 20,
  minWidth: "25em",
  hight: "55vh",
  margin: "0 auto",
};

const formikError = {
  textAlign: "left",
  fontSize: "0.72rem",
  fontWeight: 500,
  marginTop: "5px",
  color: "#dc3545",
};

//the function start*********************
const SignUp = ({ setAuthorized }) => {
  const navigate = useNavigate();

  //password visibility settings
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => { setShowPassword(!showPassword); };
  const handleMouseDownPassword = (event) => { event.preventDefault(); };

  //confirm password visibility settings
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowConfirmPassword = () => { setShowConfirmPassword(!showConfirmPassword); };
  const handleMouseDownConfirmPassword = (event) => { event.preventDefault(); };

  //for submittion function
  const onSubmit = async (values) => {
    // console.log(values);
    axios.post(process.env.REACT_APP_API_URL + '/api/users', {
      email: values.email,
      password: values.password
    })
      .then(res => {
        // console.log("rigster submitted", res);
        // console.log(formik);
        if (res.status >= 400) {
          setAuthorized(false);
          console.log(`Register status: ${res.status}`);
          alert(`Oops! something is wrong`);
        } else if (res.status === 200) {
          console.log('Register status: 200');
          localStorage.setItem('token', res.data.token);
          console.log('token stored in localStorage', res.data.token)
          setAuthorized(true);
          navigate('/');
        } else {
          alert(res.errors);
        }
      })
      .catch(error => {
        console.log(error);
        alert(error);
      })
  }

  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <div>
      <section id="hero" className="d-flex align-items-center justify-content-center">
        <Box component={Grid} boxShadow={10} borderRadius={8} container justifyContent="center" alignItems="center"
          style={{ background: "white", minWidth: "20em", maxWidth: "30em", minHeight: "70vh", maxHeight: "40em", }}>

          <form onSubmit={formik.handleSubmit} className="justify-content-center">

            <h3 className="">Sign Up</h3>

            {/* Email */}
            <div>
              <TextField id="email" name="email" required
                style={fieldStyle} type="text"
                variant="standard" label="Email" placeholder="Enter Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} />
            </div>

            {/* Password */}
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

            {/* ConfirmPassword */}
            <div>
              <FormControl style={fieldStyle} variant="standard">
                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                <Input id="confirmPassword" name="confirmPassword" required
                  type={showConfirmPassword ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle ConfirmPassword visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="errorMsg-password2" style={formikError}>
                    {formik.errors.confirmPassword}
                  </div>) : null}

              </FormControl>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center">
              <button type="submit" className="btn btn-primary mb-2">
                Get Started!
              </button>
              <Link to="../login">
                <u>or,Login</u>
              </Link>
            </div>

          </form>

        </Box>
      </section>
    </div>
  );
};

export default SignUp;


//set for Avatar
// const [open, setOpen] = useState(false);
// const handleClickOpen = () => { setOpen(true); };
// const handleClose = () => { setOpen(false); };
// const [image, setImage] = useState("assets/img/team/alex-profile.jpeg");
// const handleImageChange = (base64) => { setImage(base64) }


{/* <Avatar name="Avatar" src={image} sx={{ width: 140, height: 140 }} className="avatar" />
          <Button variant="outlined" onClick={handleClickOpen}>Add avatar</Button>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description" >
            <AvatarCrop src={handleImageChange} close={handleClose} />
          </Dialog> */}