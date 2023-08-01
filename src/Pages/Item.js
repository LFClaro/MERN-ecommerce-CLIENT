/*
Developer: Luiz Claro

*/
import { React, useState, useEffect } from "react";
import { Alert } from '@mui/material';
import { useParams } from "react-router-dom";
import axios from "axios";
// React-Dropzone Uploader
import DropzoneUploader from "../Components/DropzoneUploader";
// Item Categories
const constants = require("../lib/constants");
const categories = constants.CATEGORY_CONSTANT;

export const Item = () => {
  const { id } = useParams();
  let itemID = id;

  const [itemInfo, setItemInfo] = useState([]);
  const [queryUserId, setQueryUserID] = useState([]);
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
        process.env.REACT_APP_API_URL + "/api/items/" + itemID,
        config
      );
      setItemInfo(response.data._doc);
      setQueryUserID(response.data.queryUser);
    } catch (err) {
      console.log(err);
    }
  };

  if (queryUserId == itemInfo.user) {
    return (
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <h1 className="text-center mb-4">Item Details</h1>
          <div className="main-body">
            <div className="row">
              <ItemUser item={itemInfo} key={itemInfo._id} />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <h1 className="text-center mb-4">Item Details</h1>
          <div className="main-body">
            <div className="row">
              <ItemDetails item={itemInfo} key={itemInfo._id} />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

const ItemDetails = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };

    let data = new FormData();
    data.append("itemId", props.item._id);

    console.log(props.item);

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/api/rentals/",
        data,
        config
      );

      console.log("Rental created");
      alert("Item added to cart!");
      window.location.href = process.env.PUBLIC_URL + "/#/cart"; // redirect to cart
    } catch (err) {
      console.log(err.response.data.errors);
    }
  };
  return (
    <>
      <div className="row row-eq-height">
        <div className="col-lg-12">
          <div className="card">
            <img class="card-img-top" src={props.item.image} alt="Item image" />
            <div className="card-body">
              <div className="row">
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="mt-3">
                    <h4>{props.item.name}</h4>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="mt-3">
                    <p>{props.item.description}</p>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center text-center">
                  <form onSubmit={(e) => onSubmit(e)}>
                    <input type="hidden" name="id" value={props.item._id} />
                    <input
                      type="submit"
                      className="btn btn-primary px-4"
                      value="Add to Cart"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ItemUser = (props) => {
  const [formData, setFormData] = useState({
    id: props.item._id,
    image: props.item.image,
    name: props.item.name,
    description: props.item.description,
    category: props.item.category,
    price: props.item.price,
  });

  const { id, name, category, description, price } = formData;

  // MUI Alert handling
  const [alertExist, setAlertExist] = useState(false);
  const [alertMsg, setAlertMsg] = useState();

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

  // Validation
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
    if (price === "" || price == null) {
      formIsValid = false;
      setPriceErr("Item rental price can't be empty");
      console.log("issues with price - empty");
    }

    return formIsValid;
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [myFile, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    let tester = handleValidation();

    if (formIsValid == true) {
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": token,
        },
      };

      let data = new FormData();
      data.append("id", id);
      data.append("name", name);
      data.append("category", category);
      data.append("description", description);
      data.append("price", price);

      //We'll set the image with the 'myFile' variable only if a new image has been uploaded
      if (myFile != undefined) {
        data.append("myFile", myFile);
      }

      try {
        const response = await axios.put(
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
          console.log("Item updated");
          alert("Your item has been updated!");
          window.location.reload(); // refreshes the page
        }
      } catch (err) {
        console.log(err.response.data.errors);
      }
    } else {
      setAlertExist(true);
      setAlertMsg("Your item form has errors.");
      console.log(formIsValid);
    }
  };
  const onSubmitDelete = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    try {
      const response = await axios.delete(
        process.env.REACT_APP_API_URL + "/api/items/", {
        config,
        data: {
          "id": props.item._id
        }
      }
      ).catch(function (error) {
        if (error.response) {
          let payload = error.response.data.errors[0];
          setAlertExist(true);
          setAlertMsg(`Oops! ${payload.msg}`);
        }
      });

      if (response.status === 200) {
        console.log("Item deleted");
        alert("Your item has been deleted!");
        window.location.href = process.env.PUBLIC_URL + "/#/profile"; // goes back to profile
      }
    } catch (err) {
      console.log(err.response.data.errors);
    }
  };

  return (
    <>
      <form id="formDelete" onSubmit={(e) => onSubmitDelete(e)}></form>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row row-eq-height">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={props.item.image}
                    alt="Item image"
                    className="img-fluid animated p-1 bg-primary"
                  />
                  <div className="mt-3">
                    <h4>{props.item.name}</h4>
                  </div>
                </div>
                <div className="d-flex flex-column text-center">
                  <DropzoneUploader setFile={setFile} />
                </div>
              </div>
            </div>
          </div>

          {alertExist && <Alert severity="warning" onClose={() => { setAlertExist(false) }}>{alertMsg}</Alert>}

          <div className="col-lg-6">
            <div className="card">
              <div className="card-body ">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Item Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
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
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Daily Rental Price</h6>
                  </div>
                  <div className="col-sm-3 text-secondary">
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
                  <div className="col-sm-2">
                    <h6 className="mb-0">Category</h6>
                  </div>
                  <div className="col-sm-4 text-secondary">
                    <select
                      name="category"
                      className="form-select"
                      id="category"
                      aria-label="Category Select"
                      onChange={(e) => onChange(e)}
                      defaultValue={category}
                      required
                    >
                      {categories.map((category) => (
                        <option value={category}>{category}</option>
                      ))}
                    </select>
                    <span style={{ color: "red" }}>{categoryError}</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Description</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
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
                </div>

                <div className="row justify-content-md-center">
                  <div className="col-sm-6 d-flex justify-content-start">
                    <input
                      type="submit"
                      className="btn btn-primary px-4"
                      value="Save Changes"
                    />
                  </div>
                  <div className="col-sm-6 d-flex justify-content-end">
                    <input form="formDelete" type="hidden" value={props.item._id} />
                    <input form="formDelete"
                      type="submit"
                      className="btn btn-danger px-4"
                      value="Delete Item"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Item;
