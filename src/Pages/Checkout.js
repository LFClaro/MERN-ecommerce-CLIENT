import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout'

import CheckoutProductInfo from '../Components/Checkout/CheckoutProductInfo'

// api
import { getRentalById } from '../Api/rentalApi'
import { getItem } from '../Api/itemApi';
import { getProfileDetails } from '../Api/profileApi';
import { checkoutRentalItem } from '../Api/checkoutApi';

// Uses Stripe for checkout
// https://www.youtube.com/watch?v=lkA4rmo7W6k&ab_channel=WebDev101

const Checkout = () => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const [item, setItem] = useState({})
    const [rentalItem, setRentalItem] = useState({})
    const [user, setUser] = useState({})
    const id = searchParams.get("id") // rental id

    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [dayDiff, setDayDiff] = useState("")

    useEffect(() => {
        // check if this user is authenticated
        let storageToken = localStorage.getItem("token");

        // set the token and load initial api calls here
        if (storageToken) {
            setToken(storageToken)
            setIsAuthenticated(true)

            // get rental details
            getRentalById(token, id)
                .then((data) => {
                    setRentalItem(data)

                    getItem(data.item)
                        .then((data) => {
                            setItem(data)
                        })

                    setDayDiff((new Date(data.returnDate) - new Date(data.rentalDate)) / (1000 * 3600 * 24))

                })

            // get user details
            getProfileDetails(token)
                .then((data) => {
                    console.log(data[0])
                    setUser(data[0])

                    setAddress(data[0].address)
                    setPhoneNumber(data[0].phone)
                })
        }

    }, [])

    function handleToken(stripeToken) {
        console.log(stripeToken)
        // TODO this needs to call backend

        let checkoutItem = {
            "rentalId": rentalItem.item,
            "price": item.price,
            "userId": user._id,
            "address": address,
            "phoneNumber": phoneNumber
        }

        checkoutRentalItem(token, stripeToken, checkoutItem)
            .then((data) => {
                window.open("/cart", "_self")
            })

    }

    const handleAddressOnChange = (input) => {
        setAddress(input.target.value)
    }

    const handlePhoneNumberOnChange = (input) => {
        setPhoneNumber(input.target.value)
    }

    return (

        <section className="section-bg">
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center">
                    <div class="section-title">
                        <h2>Checkout</h2>
                    </div>

                    <div className="">
                        <div className="row mb-4 checkout-box">
                            <div className="col text-center">
                                <img src={item.image} style={{ width: 300 + 'px' }} />
                            </div>
                            <div className="col-lg-8">
                                <h4>RENTAL DETAILS</h4>
                                <hr />
                                <CheckoutProductInfo item={item} rentalItem={rentalItem} dayDiff={dayDiff} />
                            </div>
                        </div>

                        <div className="row mb-4 checkout-box">
                            <h4>REVIEW YOUR INFORMATION</h4>
                            <hr />
                            <form className="mb-3">
                                <div className="form-group row">
                                    <div className="form-group col-md-6">
                                        <label className="fw-bold">First Name</label>
                                        <input type="text" class="form-control" value={user.firstname} readOnly={true} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="fw-bold">Last Name</label>
                                        <input type="text" class="form-control" value={user.lastname} readOnly={true} />
                                    </div>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="fw-bold" required>Address</label>
                                    <input type="text" className="form-control" value={user.address} onChange={handleAddressOnChange} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fw-bold" required>Phone Number</label>
                                    <input type="text" className="form-control" value={user.phone} onChange={handlePhoneNumberOnChange} />
                                </div>
                            </form>
                        </div>

                        <StripeCheckout
                            stripeKey={process.env.REACT_APP_STRIPE_KEY}
                            token={handleToken}
                            email={user.email}
                            amount={item.price * dayDiff * 100}
                            product={item.name}
                            name="Checkout"
                            currency="CAD"
                        >
                            <button className="btn btn-warning checkout-btn">Pay With Card</button>
                        </StripeCheckout>


                    </div>
                </div>
            </div>
        </section >
    )
}

export default Checkout