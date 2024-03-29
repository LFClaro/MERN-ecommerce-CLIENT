/*
Developer(s): Tim Burns

*/
import React from "react";
import DropzoneUploader from "../Components/DropzoneUploader";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileItemRow from "../Components/Profile/ProfileItemRow";
import ProfileItemCurrentRentals from "../Components/Profile/ProfileItemCurrentRentals";
import { Nav, Link } from "react-router-dom";
import jwt from "jwt-decode";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export const Profile = () => {
  const [profileInfo, setProfileList] = useState([]);

  useEffect(() => {
    //allows you to perform side effects in your components.
    // Some examples of side effects are: fetching data, directly updating the DOM
    sendApiRequest();
  }, []);

  const sendApiRequest = async () => {
    try {
      let token = localStorage.getItem("token"); // gets the token from local storage, stored when logged in
      // const user = jwt(token);
      // console.log(user);
      let config = {
        // used to specify the data we want to put in the header and the content type
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      const response = await axios.get(
        // using axios get method to fetch the data using our api end point
        process.env.REACT_APP_API_URL + "/api/profile", // api end point that allows to get all todo (set in our back end)
        config // passing in the config arg which is a var declared above - to store token in header
        //
      );
      setProfileList(response.data); // set the todo to the api response data
      console.log(response); // logging the entire response to se the structure
    } catch (err) {
      // catch any errors and log them to the console
      console.log(err);
    }
  };
  


  if (profileInfo === null) {
    return (
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <h1 className="text-center mb-4">My Profile</h1>
          <div className="main-body">
            <div className="row">
              {/* <ProfileList/> */}

              {/* {profileInfo.map((post) => ( */}
              <ProfileList2 />
              {/* ))} */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  else {
    return (
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <h1 className="text-center mb-4">My Profile</h1>
          <div className="main-body">
            <div className="row">
              {/* <ProfileList/> */}

              {profileInfo.map((post) => (
                <ProfileList post={post} key={post._id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }


};



const ProfileList = (props) => {
  const [formData, setFormData] = useState({
    firstname: props.post.firstname,
    lastname: props.post.lastname,
    phone: props.post.phone,
    address: props.post.address,
  });
  const [token, setToken] = useState(localStorage.getItem("token"))
 


  // break down form data into fields
  const { firstname, lastname, phone, address } = formData;

  const [firstnameError, setFirstnameError] = useState("");
  const setFirstnameErr = (String) => {
    setFirstnameError(String);
    console.log(firstnameError);
  };

  const [lastnameError, setLastnameError] = useState("");
  const setLastnameErr = (String) => {
    setLastnameError(String);
    console.log(lastnameError);
  };

  const [phoneError, setPhoneError] = useState("");
  const setPhoneErr = (String) => {
    setPhoneError(String);
    console.log(phoneError);
  };

  const [addressError, setAddressError] = useState("");
  const setAddressErr = (String) => {
    setAddressError(String);
    console.log(addressError);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  let formIsValid = true;
  const handleValidation = async (e) => {
    //Name
    console.log("reached validation");
    if (firstname.trim() === "" || firstname == null) {
      formIsValid = false;
      setFirstnameErr("first name can not be empty");
      console.log("issues with fname - empty");
    }

    if (lastname.trim() === "" || lastname == null) {
      formIsValid = false;
      setLastnameErr("last name can not be empty");
      console.log("issues with lname - empty");
    }

    if (phone.trim() === "" || phone == null) {
      formIsValid = false;
      setPhoneErr("phone can not be empty");
      console.log("issues with phone - empty");
    }

    if (address.trim() === "" || address == null) {
      formIsValid = false;
      setAddressErr("address can not be empty");
      console.log("issues with address - empty");
    }

    var str = new String(address);
    if (str.length > 3) {
      formIsValid = false;
      setAddressErr("please only provide the first 3 digits of your postal code");
      console.log("issues with address - more than 3 digits");
    }

    return formIsValid;
  };
  const [myFile, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("reached submit");
    let tester = handleValidation();
    // this.props.history.push('/contact')

    if (formIsValid == true) {
      console.log("reached valid form in submit");
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token, // not using token atm as i need to tie into alex login
          // "x-auth-token":
          //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjRiMjFjZTQyMWMzYjNmZDg5MGI2IiwiZW1haWwiOiJodWQyQG1haWwuY29tIn0sImlhdCI6MTY0ODMxNTQwNSwiZXhwIjoxNjQ4Njc1NDA1fQ.hsJpCMTNWdYjJ9j3rYO1KFUMXJJ6QBls4s6hxycSTGM",
        },
      };

      
      let data = new FormData();
      data.append('firstname', firstname);
      data.append('lastname', lastname);
      data.append('phone', phone);
      data.append('address', address);
      data.append('myFile', myFile);
      try {
        const response = await axios.put(
          process.env.REACT_APP_API_URL + "/api/profile",
          data,
          config
        );

        console.log("profile updated sent");
        // alert("Your message has been received, please check your email");
        window.location.href = process.env.PUBLIC_URL + "/#/profile"; // refreshes the page
        // console.log(data);
      } catch (e) {
        console.log(e.response.data.errors);
      }
    } else {
      alert("Your profile has errors.");
      console.log(formIsValid);
    }
  };

  //Populating items list
  const [items, setItems] = useState([]);

  useEffect(() => {
    sendApiRequest();
  }, []);

  const sendApiRequest = async () => {
    try {
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/api/items",
        config
      );
      setItems(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row row-eq-height">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={props.post.image}
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                    height="110"
                  />
                  <div className="mt-3">
                    <h4>
                      {props.post.firstname} {props.post.lastname}
                    </h4>
                  </div>
                </div>
                <div className="d-flex flex-column text-center">
                  <DropzoneUploader setFile={setFile} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card">
              <div className="card-body ">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      id="firstname"
                      value={firstname}
                      placeholder="First Name"
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <span style={{ color: "red" }}>{firstnameError}</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      id="lastname"
                      value={lastname}
                      placeholder="Last Name"
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <span style={{ color: "red" }}>{lastnameError}</span>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      value={phone}
                      placeholder="Phone"
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <span style={{ color: "red" }}>{phoneError}</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address </h6>
                    <p className="text-primary">* First 3 Digits of Postal Code</p>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      id="address"
                      value={address}
                      placeholder="First 3 digits of postal code"
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <span style={{ color: "red" }}>{addressError}</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="submit"
                      className="btn btn-primary px-4"
                      value="Save Changes"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></form>

      <div className="row mt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="text-center">Available Products for Lease</h5>
            {items.map((item, index) => (
              <ProfileItemRow
                key={index}
                id={item._id}
                image={item.image}
                title={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>      
    </>
  );
};

const ProfileList2 = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
  });


  // break down form data into fields
  const { firstname, lastname, phone, address } = formData;

  const [firstnameError, setFirstnameError] = useState("");
  const setFirstnameErr = (String) => {
    setFirstnameError(String);
    console.log(firstnameError);
  };

  const [lastnameError, setLastnameError] = useState("");
  const setLastnameErr = (String) => {
    setLastnameError(String);
    console.log(lastnameError);
  };

  const [phoneError, setPhoneError] = useState("");
  const setPhoneErr = (String) => {
    setPhoneError(String);
    console.log(phoneError);
  };

  const [addressError, setAddressError] = useState("");
  const setAddressErr = (String) => {
    setAddressError(String);
    console.log(addressError);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  let formIsValid = true;
  const handleValidation = async (e) => {
    //Name
    console.log("reached validation");
    if (firstname.trim() === "" || firstname == null) {
      formIsValid = false;
      setFirstnameErr("first name can not be empty");
      console.log("issues with name - empty");
    }

    if (lastname.trim() === "" || lastname == null) {
      formIsValid = false;
      setLastnameErr("last name can not be empty");
      console.log("issues with name - empty");
    }

    if (phone.trim() === "" || phone == null) {
      formIsValid = false;
      setPhoneErr("phone can not be empty");
      console.log("issues with name - empty");
    }

    if (address.trim() === "" || address == null) {
      formIsValid = false;
      setAddressErr("address can not be empty");
      console.log("issues with name - empty");
    }

    // just added this line 
    var str = new String(address);
    if (str.length > 3 ) {
      formIsValid = false;
      setAddressErr("please only provide the first 3 digits of your postal code");
      console.log("issues with address - more than 3 digits");
    }

    return formIsValid;
  };
  const [myFile, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("reached submit");
    let tester = handleValidation();
    // this.props.history.push('/contact')

    if (formIsValid == true) {
      console.log("reached valid form in submit");
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token, // not using token atm as i need to tie into alex login
          // "x-auth-token":
          //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjRiMjFjZTQyMWMzYjNmZDg5MGI2IiwiZW1haWwiOiJodWQyQG1haWwuY29tIn0sImlhdCI6MTY0ODMxNTQwNSwiZXhwIjoxNjQ4Njc1NDA1fQ.hsJpCMTNWdYjJ9j3rYO1KFUMXJJ6QBls4s6hxycSTGM",
        },
      };

      
      let data = new FormData();
      data.append('firstname', firstname);
      data.append('lastname', lastname);
      data.append('phone', phone);
      data.append('address', address);
      data.append('myFile', myFile);
      try {
        const response = await axios.put(
          process.env.REACT_APP_API_URL + "/api/profile",
          data,
          config
        );

        console.log("profile updated sent");
        // alert("Your message has been received, please check your email");
        window.location.href = process.env.PUBLIC_URL + "/#/profile"; // refreshes the page
        // console.log(data);
      } catch (e) {
        console.log(e.response.data.errors);
      }
    } else {
      alert("Your Profile form has errors.");
      console.log(formIsValid);
    }
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row row-eq-height">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="assets/img/profile-default.png"
                    alt="Default profile Image"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                    height="110"
                  />
                  {/* <AccountCircleIcon fontSize="large"/> */}
                  <div className="mt-3">
                    <h4>
                      {/* {props.post.firstname} {props.post.lastname} */}
                    </h4>
                  </div>
                </div>
                <div className="d-flex flex-column text-center">
                  <DropzoneUploader setFile={setFile} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card">
              <div className="card-body ">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      id="firstname"
                      value={firstname}
                      placeholder="First Name"
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <span style={{ color: "red" }}>{firstnameError}</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      id="lastname"
                      value={lastname}
                      placeholder="Last Name"
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <span style={{ color: "red" }}>{lastnameError}</span>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      value={phone}
                      placeholder="Phone"
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <span style={{ color: "red" }}>{phoneError}</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address </h6>
                    <p className="text-primary">* First 3 Digits of Postal Code</p>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      id="address"
                      value={address}
                      placeholder="First 3 digits of postal code"
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <span style={{ color: "red" }}>{addressError}</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="submit"
                      className="btn btn-primary px-4"
                      value="Save Changes"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></form>

      
    </>
  );
};

export default Profile;
