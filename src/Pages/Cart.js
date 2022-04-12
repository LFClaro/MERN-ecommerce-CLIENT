import { useState, useEffect } from 'react'

// api
import { getRentals } from '../Api/rentalApi'

// components
import CartItem from '../Components/Cart/CartItem'
import CartHistoryItem from '../Components/Cart/CartHistoryItem'

const Cart = () => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartHistoryItems, setCartHistoryItems] = useState([])
    const [isCartVisible, setIsCartVisible] = useState(true)

    useEffect(() => {

        // check if this user is authenticated
        let storageToken = localStorage.getItem("token");
        console.log(storageToken)

        // set the token and load initial api calls here
        if (storageToken) {
            setToken(storageToken)
            setIsAuthenticated(true)
            // call api here
            getRentals(storageToken).then((data) => {
                setCartItems(data.filter(i => !i.rentalDate))
                setCartHistoryItems(data.filter(i => i.rentalDate ))
            })

        }

    }, [])

    const handleCartClick = () => {
        setIsCartVisible(false)
    }

    const handleHistoryClick = () => {
        setIsCartVisible(true)
    }

    return (
        <section className="cart section-bg">
            <div className="container w-50">
                <div className="section-title">

                    {isCartVisible &&
                        <><h2>Cart</h2>
                            <button className="btn" onClick={handleCartClick}>
                                View cart history
                            </button>
                        </>
                    }

                    {!isCartVisible &&
                        <><h2>History</h2>
                            <button className="btn" onClick={handleHistoryClick}>
                                View cart
                            </button>
                        </>
                    }


                </div>
                {isCartVisible &&
                    <>
                        {cartItems.map((i) => (
                            <CartItem key={i._id} id={i._id} itemId={i.item} token={token} />
                        ))}
                    </>
                }

                {!isCartVisible &&
                    <>
                        {cartHistoryItems.map((i) => (
                            <CartHistoryItem key={i._id} id={i._id} itemId={i.item} rental={i} token={token} />
                        ))}
                    </>
                }
            </div>
        </section>
    )

}

export default Cart