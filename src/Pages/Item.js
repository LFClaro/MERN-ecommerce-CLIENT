/*
Developer: Luiz Claro

*/
import React from "react";
import DropzoneUploader from "../Components/DropzoneUploader";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Item = () => {
  const { id } = useParams();
  let itemID = id;

  const [itemInfo, setItemInfo] = useState([]);
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
        process.env.REACT_APP_API_URL + "/api/items/" + itemID
        // config
      );
      setItemInfo(response.data);
    } catch (err) {
      console.log(err);
    }
  };
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
};

const ItemDetails = (props) => {
  const [formData, setFormData] = useState({
    name: props.item._id,
    name: props.item.name,
    description: props.item.description,
    category: props.item.category,
    price: props.item.price,
  });

  console.log("ITEM ID => " + props.item._id);

  const { id, name, category, description, price } = formData;

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
    if (price.trim() === "" || price == null) {
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
      data.append("myFile", myFile);

      try {
        const response = await axios.put(
          process.env.REACT_APP_API_URL + "/api/items/",
          data,
          config
        );

        console.log("Item updated");
        alert("Your item has been updated!");
        window.location.reload(); // refreshes the page
      } catch (err) {
        console.log(err.response.data.errors);
      }
    } else {
      alert("Your item form has errors.");
      console.log(formIsValid);
    }
  };

  return (
    <>
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

          <div className="col-lg-6">
            <div className="card">
              <div className="card-body ">
                <div className="row mb-3">
                  <div className="col-sm-2">
                    <h6 className="mb-0">Item Name</h6>
                  </div>
                  <div className="col-sm-4 text-secondary">
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
                  <div className="col-sm-2">
                    <h6 className="mb-0">Category</h6>
                  </div>
                  <div className="col-sm-4 text-secondary">
                    <input
                      type="text"
                      name="category"
                      className="form-control"
                      id="category"
                      value={category}
                      placeholder="Item Category"
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <span style={{ color: "red" }}>{categoryError}</span>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Daily Rental Price</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        id="price"
                        value={price}
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
        </div>
      </form>
    </>
  );
};

export default Item;
