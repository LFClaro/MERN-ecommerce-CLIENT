import React, { useState, useEffect } from 'react'
import { date } from 'yup';

const CheckoutProductInfo = ({ item, rentalItem, dayDiff }) => {


    return (
        <>
            <table className="table table-borderless">
                <tr>
                    <td>
                        <span className="fw-bold">Price (per day):</span>
                    </td>
                    <td>
                        ${item.price}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="fw-bold">Total:</span>
                    </td>
                    <td>
                        ${item.price * dayDiff}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="fw-bold">Pick up time:</span>
                    </td>
                    <td>
                        {/*String(new Date(rentalItem.rentalDate + 1)).split(" ").slice(0, 3).join(" ")*/
                        new Date(rentalItem.rentalDate).toLocaleDateString("en-CA")}
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="fw-bold">Drop off time:</span>
                    </td>
                    <td>
                        {/*String(new Date(rentalItem.returnDate)).split(" ").slice(0, 3).join(" ")*/
                        new Date(rentalItem.returnDate).toLocaleDateString("en-CA")}
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