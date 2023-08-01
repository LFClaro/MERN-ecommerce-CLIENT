import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

// api
import { getItem } from '../../Api/itemApi'
import { addComment } from '../../Api/rentalApi'

const CartItem = ({ id, itemId, rental, token }) => {

    const [item, setItem] = useState({})
    const [dayDiff, setDayDiff] = useState("")
    const [reviewTitle, setReviewTitle] = useState("")
    const [reviewDesc, setReviewDesc] = useState("")
    const [reviewRating, setReviewRating] = useState("")
    const [isRatingSubmitted, setIsRatingSubmitted] = useState(false)

    useEffect(() => {

        getItem(itemId, token).then((data) => {
            setItem(data)

        })

        setDayDiff((new Date(rental.returnDate) - new Date(rental.rentalDate)) / (1000 * 3600 * 24))

    }, [])

    const handleCheckout = (event) => {
        // redirect to schedule page

        window.open(process.env.PUBLIC_URL + "/schedule?id=" + id, "_self")
    }

    const handleReviewTitleOnChange = (input) => {
        setReviewTitle(input.target.value)
    }

    const handleReviewDescOnChange = (input) => {
        setReviewDesc(input.target.value)
    }

    const handleReviewRatingOnChange = (input) => {
        setReviewRating(input.target.value)
    }

    const handleSubmitReviewOnClick = (e) => {
        e.preventDefault()

        let comment = {
            title: reviewTitle,
            text: reviewDesc,
            rating: reviewRating
        }

        addComment(rental._id,comment)
            .then((data) => {
                setIsRatingSubmitted(true)
            })

    }

    return (
        <div className="card m-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-5 text-center">
                        <img src={item.image} height={200} />
                    </div>

                    <div className="col">
                        <h5>Summary</h5>

                        <table className="table table-borderless">
                            <tr>
                                <td>
                                    <span className="fw-bold">ITEM</span>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="fw-bold">PICK UP </span>
                                </td>
                                <td>
                                    {rental.rentalDate}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="fw-bold">DROP OFF</span>
                                </td>
                                <td>
                                    {rental.returnDate}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="fw-bold">TOTAL</span>
                                </td>
                                <td>
                                    ${item.price * dayDiff}
                                </td>
                            </tr>
                        </table>

                        <br />
                        <h5>Review</h5>
                        {!isRatingSubmitted &&
                            <>
                                <form>
                                    <div className="form-group mb-2">
                                        <input type="text" className="form-control" placeholder="Title" onChange={handleReviewTitleOnChange} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <textarea className="form-control" rows="2" placeholder="Description" onChange={handleReviewDescOnChange}></textarea>
                                    </div>
                                    <div className="form-group mb-2">
                                        <input type="number" min="0" max="5" className="form-control" placeholder="Rating (0-5)" onChange={handleReviewRatingOnChange} />
                                    </div>
                                </form>
                                <button className="btn btn-primary" onClick={handleSubmitReviewOnClick}>
                                    Submit
                                </button>
                            </>
                        }

                        {isRatingSubmitted &&
                            <>Thank you for your comment!</>
                        }
                    </div>

                </div>

            </div>
        </div>


    )
}

export default CartItem