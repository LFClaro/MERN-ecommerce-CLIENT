import React from 'react'

const CheckoutProductInfo = ({ product }) => {
    return (
        <>
            <table className="table table-borderless">
                <tr>
                    <td>
                        <span className="fw-bold">Price:</span>
                    </td>
                    <td>
                        ${product.price}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="fw-bold">Pick up time:</span>
                    </td>
                    <td>
                        {product.pickup}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="fw-bold">Drop off time:</span>
                    </td>
                    <td>
                        {product.dropoff}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="fw-bold">Pick up/drop off location:</span>
                    </td>
                    <td>
                        {product.location}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="fw-bold">Owner's notes for renter:</span>
                    </td>
                    <td>
                        {product.notes}
                    </td>
                </tr>
            </table>

        </>
    )
}

export default CheckoutProductInfo