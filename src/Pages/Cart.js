import { useState, useEffect } from 'react'

// api
import { getRentals } from '../Api/rentalApi'

// components
import CartItem from '../Components/Cart/CartItem'

const Cart = () => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {

        // check if this user is authenticated
        let storageToken = localStorage.getItem("token");

        // set the token and load initial api calls here
        if (storageToken) {
            setToken(storageToken)
            setIsAuthenticated(true)
            // call api here
            getRentals(token).then((data) => {
                setCartItems(data)
            })

        }

    }, [])

    return (
        <section className="section-bg">
            <div className="container w-50">
                <div class="section-title">
                    <h2>Cart</h2>
                </div>
                {cartItems.map((i) => (
                    <CartItem itemId={i.item} />
                ))}
            </div>
        </section>
    )

}

export default Cart