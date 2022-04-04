import React from 'react'

const CheckoutProductInfo = ({ item, rentalItem }) => {

    return (
        <>
            <table className="table table-borderless">
                <tr>
                    <td>
                        <span className="fw-bold">Price:</span>
                    </td>
                    <td>
                        ${item.price}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="fw-bold">Pick up time:</span>
                    </td>
                    <td>
                        {new Date(rentalItem.rentalDate).toString()}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="fw-bold">Drop off time:</span>
                    </td>
                    <td>
                    {new Date(rentalItem.returnDate).toString()}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="fw-bold">Item Description:</span>
                    </td>
                    <td>
                        {item.description}
                    </td>
                </tr>
            </table>

        </>
    )
}

export default CheckoutProductInfo