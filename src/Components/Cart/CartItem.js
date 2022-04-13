import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

// api
import { getItem } from '../../Api/itemApi'

const CartItem = ({ id, itemId, token }) => {

    const [item, setItem] = useState({})

    useEffect(() => {
        console.log(itemId)
        console.log(token)
        getItem(itemId, token).then((data) => {
            setItem(data)
            console.log(data)
        })

    }, [])

    const handleCheckout = (event) => {
        // redirect to schedule page
        
        window.open("/schedule?id="+id, "_self")
    }

    return (
        <div className="card m-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-5 text-center">
                        <img src={item.image} height={200} />
                    </div>

                    <div className="col">
                        <h5>{item.name}</h5>
                        <p className="text-muted">{item.description}</p>
                        <br />
                        <h6>Price: ${item.price}</h6>
                        <button className="btn btn-primary" onClick={handleCheckout}>
                            Rent Item
                        </button>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default CartItem