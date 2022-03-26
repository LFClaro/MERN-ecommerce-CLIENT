import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import CheckoutProductInfo from '../Components/Checkout/CheckoutProductInfo'

// Uses Stripe for checkout
// https://www.youtube.com/watch?v=lkA4rmo7W6k&ab_channel=WebDev101

const Checkout = () => {

    // TODO this is a placeholder and needs to access actual product and user details
    const product = {
        price: 100,
        name: "Test Product",
        image: "https://m.media-amazon.com/images/I/71Td9FZnnFL._AC_SL1010_.jpg",
        pickup: "March 1, 2022 13:00:00",
        dropoff: "March 5, 2022 14:00:00",
        location: "123 Street Toronto, ON, A1A A1A",
        notes: "Go to side of building"
    }

    const user = {
        fname: "Christine",
        lname: "Ebeo",
        email: "ce@mail.ca",
        address: "1 ABC Street, Toronto, ON, B1B B1B",
        phone: "647 123 4567"

    }

    function handleToken(token, addresses) {
        console.log(token, addresses)
        // TODO this needs to call backend
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
                                <img src={product.image} style={{ width: 200 + 'px' }} />
                            </div>
                            <div className="col-lg-8">
                                <h4>RENTAL DETAILS</h4>
                                <hr />
                                <CheckoutProductInfo product={product} />
                            </div>
                        </div>

                        <div className="row mb-4 checkout-box">
                            <h4>REVIEW YOUR INFORMATION</h4>
                            <hr />
                            <form className="mb-3">
                                <div className="form-group row">
                                    <div className="form-group col-md-6">
                                        <label className="fw-bold">First Name</label>
                                        <input type="text" class="form-control" value={user.fname} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="fw-bold">Last Name</label>
                                        <input type="text" class="form-control" value={user.lname} />
                                    </div>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fw-bold">Email</label>
                                    <input type="email" className="form-control" value={user.email} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fw-bold">Address</label>
                                    <input type="text" className="form-control" value={user.address} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="fw-bold">Phone Number</label>
                                    <input type="text" className="form-control" value={user.phone} />
                                </div>
                            </form>
                        </div>

                        <StripeCheckout
                            stripeKey="pk_test_51KStzzGm4MuMFls1q732IEPAJLN6pbi3jIi8Mbz1AlRXRBV3yjbDdL8cgpfjDL6lnbGT6fczXasPHlwcX2cDAYQM00w3WhPcwC"
                            token={handleToken}
                            amount={product.price * 100}
                            product={product.name}
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