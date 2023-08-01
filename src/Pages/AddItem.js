/*
Developer(s): Luiz Claro

*/
import React from "react";
import { Alert } from '@mui/material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// React-Dropzone Uploader
import DropzoneUploader from "../Components/DropzoneUploader";
// Item Categories
const constants = require("../lib/constants");
const categories = constants.CATEGORY_CONSTANT;

const AddItem = () => {
  // MUI Alert handling
  const [alertExist, setAlertExist] = useState(false);
  const [alertMsg, setAlertMsg] = useState();

  const navigate = useNavigate();
  // for from data
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: 0,
  });
  const [myFile, setFile] = useState();
  const { name, category, description, price } = formData;

  const [nameError, setNameError] = useState("");
  const setNameErr = (String) => {
    setNameError(String);
    console.log(nameError);
  };

  const [categoryError, setCatError] = useState("");
  const setCatErr = (String) => {
    setCatError(String);
    console.log(categoryError);
  };

  const [descriptionError, setDescError] = useState("");
  const setDescErr = (String) => {
    setDescError(String);
    console.log(descriptionError);
  };

  const [priceError, setPriceError] = useState("");
  const setPriceErr = (String) => {
    setPriceError(String);
    console.log(priceError);
  };

  // Form validation
  let formIsValid = true;
  const handleValidation = async (e) => {
    //Name
    if (name.trim() === "" || name == null) {
      formIsValid = false;
      setNameErr("Item name can't be empty");
      console.log("issues with name - empty");
    }
    //Category
    if (category.trim() === "" || category == null) {
      formIsValid = false;
      setCatErr("Item category can't be empty");
      console.log("issues with catogory - empty");
    }
    //Description
    if (description.trim() === "" || description == null) {
      formIsValid = false;
      setDescErr("Item description can't be empty");
      console.log("issues with description - empty");
    }
    //Price
    if (price.trim() === "" || price == null) {
      formIsValid = false;
      setPriceErr("Item rental price can't be empty");
      console.log("issues with price - empty");
    }
    return formIsValid;
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let tester = handleValidation();
    // this.props.history.push('/contact')

    if (formIsValid == true) {
      setNameErr("");
      setCatErr("");
      setDescErr("");
      setPriceErr("");
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": token,
        },
      };

      if (myFile === undefined) {
        setAlertExist(true);
        setAlertMsg("Item image hasn't been uploaded; please try again.");
      } else {
        let data = new FormData();
        data.append("name", name);
        data.append("category", category);
        data.append("description", description);
        data.append("price", price);
        data.append("myFile", myFile);
        try {
          const response = await axios.post(
            process.env.REACT_APP_API_URL + "/api/items/",
            data,
            config
          ).catch(function (error) {
            if (error.response) {
              let payload = error.response.data.errors[0];
              setAlertExist(true);
              setAlertMsg(`Oops! ${payload.msg}`);
            }
          });

          if (response.status === 200) {
            console.log(response.status.data);
            alert("Your item has been added!");
            // window.location.href = "/profile";
            navigate(process.env.PUBLIC_URL + "/profile");
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      setAlertExist(true);
      setAlertMsg("Your item form has errors.");
      console.log(formIsValid);
    }
  };

  return (
    <section id="addItem" className="section-bg">
      <div className="container" data-aos="fade-up">
        <br />
        <div className="section-title">
          <h2>Add an item for rental</h2>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="row">
                <div className="col-lg-12 form-group">
                  <DropzoneUploader setFile={setFile} />
                </div>
              </div>

              {alertExist && <Alert severity="warning" onClose={() => { setAlertExist(false) }}>{alertMsg}</Alert>}
              <br />

              <div className="row">
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={name}
                    placeholder="Item Name"
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <span style={{ color: "red" }}>{nameError}</span>
                </div>
                <div className="col-md-4 form-group">
                  <select
                    name="category"
                    className="form-select"
                    id="category"
                    aria-label="Default select example"
                    onChange={(e) => onChange(e)}
                    required
                  >
                    <option disabled selected>
                      Choose a category
                    </option>
                    {categories.map((category) => (
                      <option value={category}>{category}</option>
                    ))}
                  </select>
                  <span style={{ color: "red" }}>{categoryError}</span>
                </div>
                <div className="col-md-4 form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      id="price"
                      value={Number(price).toString()}
                      min="0.00"
                      max="999.99"
                      step="0.01"
                      placeholder="Item Price"
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <span style={{ color: "red" }}>{priceError}</span>
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="description"
                  rows="5"
                  placeholder="Item Description"
                  value={description}
                  onChange={(e) => onChange(e)}
                  minLength="10"
                  required
                ></textarea>
                <span style={{ color: "red" }}>{descriptionError}</span>
              </div>
              <br />
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

export default AddItem;
