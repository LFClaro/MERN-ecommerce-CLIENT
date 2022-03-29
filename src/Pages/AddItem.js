/*
Developer(s): Luiz Claro

*/
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
// React-Dropzone Uploader
import DropzoneUploader from "../Components/DropzoneUploader";

const AddItem = () => {
    const navigate = useNavigate();
    // for from data
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        description: '',
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

    // Validation
    let formIsValid = true;
    const handleValidation = async (e) => {
        //Name
        if (name.trim() === "" || name == null) {
            formIsValid = false;
            setNameErr("Item name can\'t be empty");
            console.log("issues with name - empty")
        }

        //Category
        if (category.trim() === "" || category == null) {
            formIsValid = false;
            setCatErr("Item name can\'t be empty");
            console.log("issues with catogory - empty")
        }

        //Description
        if (description.trim() === "" || description == null) {
            formIsValid = false;
            setDescErr("Item description can\'t be empty");
            console.log("issues with description - empty")
        }

        //Price
        if (price.trim() === "" || price == null) {
            formIsValid = false;
            setPriceErr("Item rental price can\'t be empty");
            console.log("issues with price - empty")
        }

        return formIsValid;
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const onChange2 = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let tester = handleValidation();
        // this.props.history.push('/contact')

        if (formIsValid == true) {
            let token = localStorage.getItem("token");
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': token,
                    // "x-auth-token":
                    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjRiMjFjZTQyMWMzYjNmZDg5MGI2IiwiZW1haWwiOiJodWQyQG1haWwuY29tIn0sImlhdCI6MTY0ODMxNTQwNSwiZXhwIjoxNjQ4Njc1NDA1fQ.hsJpCMTNWdYjJ9j3rYO1KFUMXJJ6QBls4s6hxycSTGM",
                },
            };

            let data = new FormData();
            data.append('name', name);
            data.append('category', category);
            data.append('description', description);
            data.append('price', price);
            data.append('myFile', myFile);

            // let data = {
            //     name,
            //     category,
            //     description,
            //     price,
            //     myFile
            // };

            try {
                const response = await axios.post(
                    process.env.REACT_APP_API_URL + "/api/items/",
                    data,
                    config
                );

                console.log("Item added");
                alert("Your item has been added!");
                // window.location.href = "/profile";
                navigate('/profile');
            } catch (err) {
                console.log(err);
            }
        }
        else {
            alert("Your contact form has errors.");
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
