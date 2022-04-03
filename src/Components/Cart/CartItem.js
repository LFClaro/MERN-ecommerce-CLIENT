import { useState, useEffect } from 'react'

// api
import { getItem } from '../../Api/itemApi'

const CartItem = ({ itemId }) => {

    const [item, setItem] = useState({})

    useEffect(() => {

        getItem(itemId).then((data) => {
            setItem(data)
            console.log(data)
        })

    }, [])

    const handleCheckout = (event) => {
        // redirect to schedule page
        window.open("/schedule?id="+itemId, "_self")
    }

    return (
        <div className="card m-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-3">
                        <img src={item.image} height={100} />
                    </div>

                    <div className="col">
                        {item.name} <br />
                        {item.description}
                    </div>

                    <div className="col">
                        ${item.price}
                    </div>

                    <div className="col">
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