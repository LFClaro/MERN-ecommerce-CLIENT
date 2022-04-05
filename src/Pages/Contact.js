/*
Developer(s): Tim Burns

*/
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { validEmail } from "../Validation/Regex";

const Contact = () => {
  // for from data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // break down form data into fields
  const { name, email, subject, message } = formData;

  const [nameError, setNameError] = useState("");
  const setNameErr = (String) => {
    setNameError(String);
    console.log(nameError);
  };

  const [emailError, setEmailError] = useState("");
  const setEmailErr = (String) => {
    setEmailError(String);
    console.log(emailError);
  };

  const [subjectError, setSubjectError] = useState("");
  const setSubjectErr = (String) => {
    setSubjectError(String);
    console.log(subjectError);
  };

  const [messageError, setMessageError] = useState("");
  const setMessageErr = (String) => {
    setMessageError(String);
    console.log(messageError);
  };

  const [contactInfo] = [
    {
      welcome:
        "Come check us out, or drop us an email, or give us a shout. We would love to hear from you!",
      address: "205 Humber College Blvd, Etobicoke, ON M9W5L7",
      email: "info.mernmaniacs@gmail.com",
      phone: "+1 (416) 777 7777",
    },
  ];

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
let formIsValid = true;
  const handleValidation = async (e) => {
    
    
    //Name    
    if (name.trim() === "" || name == null) {
      formIsValid = false;
      setNameErr("name can not be empty");  
      console.log("issues with name - empty")      
    }

    // if (name.trim() !== "") {
    //   if (!validName.test(name)) { // not working
    //     formIsValid = false;
    //     setNameErr("Your name can not contain any numbers.");
    //   }
    // }

    //Email
    if (email.trim() === "" || email == null) {
      formIsValid = false;
      setEmailErr("Your email can not be empty");    
      console.log("issues with email - empty")  
    }

    if (email.trim() !== "") {
      if (!validEmail.test(email)) {
        formIsValid = false;
        setEmailErr("Your email must be a valid email.");
        console.log("issues with email - invalid")  
        // email.isEmail();
        
      }
    }

    if (subject.trim() === "" || subject == null) {
      formIsValid = false;
      setSubjectErr("Your subject can not be empty");    
      console.log("issues with subject - empty")  
    }

    if (message.trim() === "" || message == null) {
      formIsValid = false;
      setMessageErr("Your message can not be empty");    
      console.log("issues with message - empty")  
    }

    
    return formIsValid;
    
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let tester = handleValidation();
    // this.props.history.push('/contact')

    if (formIsValid == true) {
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "Content-Type": "application/json",
          'x-auth-token': token, // not using token atm as i need to tie into alex login
          // "x-auth-token":
          //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjRiMjFjZTQyMWMzYjNmZDg5MGI2IiwiZW1haWwiOiJodWQyQG1haWwuY29tIn0sImlhdCI6MTY0ODMxNTQwNSwiZXhwIjoxNjQ4Njc1NDA1fQ.hsJpCMTNWdYjJ9j3rYO1KFUMXJJ6QBls4s6hxycSTGM",
        },
      };

      let data = {
        name,
        email,
        subject,
        message,
      };
      try {
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "/api/contact",
          data,
          config
        );

        console.log("message sent");
        alert("Your message has been received, please check your email");
        window.location.href = "/contact";
      } catch (e) {
        console.log(e.response.data.errors);
      }
    } 
    else {
      alert("Your contact form has errors.");      
      console.log(formIsValid);
    }
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact Mern Maniacs</h2>
          <p>{contactInfo.welcome}</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>{contactInfo.address}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>{contactInfo.email}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>{contactInfo.phone}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={name}
                    placeholder="Your Name"
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <span style={{ color: "red" }}>{nameError}</span>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Your Email"
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <span style={{ color: "red" }}>{emailError}</span>
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  value={subject}
                  placeholder="Subject"
                  onChange={(e) => onChange(e)}
                  required
                />
                <span style={{ color: "red" }}>{subjectError}</span>
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => onChange(e)}
                  minLength="10"
                  required
                ></textarea>
                <span style={{ color: "red" }}>{messageError}</span>
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
// changes being made

export default Contact;
