import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

// api
import { getRentalById, updateRentalDateTime } from '../Api/rentalApi'

// components
import ScheduleAvailabilityList from '../Components/Schedule/ScheduleAvailabilityList'

const Schedule = () => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [rentalItem, setRentalItem] = useState({})
    const [availability, setAvailability] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")

    // selection dates
    const [pickupDates, setPickupDates] = useState([]);
    const [dropoffDates, setDropoffDates] = useState([]);

    const [pickupDate, setPickupDate] = useState("");
    const [dropoffDate, setDropOffDate] = useState("");

    const [isPickupSet, setIsPickupSet] = useState(false);

    //console.log(searchParams.get("id")) // get id from param
    //console.log(searchParams.get("item_id")) // get itemId from param

    useEffect(() => {

        // check if this user is authenticated
        let storageToken = localStorage.getItem("token");

        // set the token and load initial api calls here
        if (storageToken) {
            setToken(storageToken)
            setIsAuthenticated(true)

            // generate one week of pick up dates
            let numDays = new Array(7).fill(null).map((item, index) => index + 1)
            setPickupDates(numDays.map((i) => {
                let pickup = new Date()
                pickup.setDate(pickup.getDate() + i)
                return pickup
            }))

            // get rental details
            getRentalById(token, id).then((data) => {
                setRentalItem(data)
                console.log(data)
            })

        }

    }, [])

    const handlePickupClick = (e, date) => {
        setPickupDate(date)

        // generate one week of drop off dates
        let numDays = new Array(7).fill(null).map((item, index) => index + 1)
        setDropoffDates(numDays.map((i) => {
            let dropoff = new Date(date)
            dropoff.setDate(dropoff.getDate() + i)
            return dropoff
        }))

        setIsPickupSet(true);
    }

    const handleDropoffClick = (e, date) => {
        setDropOffDate(date)

        updateRentalDateTime(token, id, rentalItem, { pickup: pickupDate, dropoff: date })
            .then((data) => {
                window.open(process.env.PUBLIC_URL + "/#/checkout?id=" + id, "_self")
            })
    }

    return (
        <section className="schedule section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Schedule Meetup</h2>
                    <p>Select a date for item pick up and drop off</p>
                </div>

                <h3>PICK UP{pickupDate !== "" &&
                    <>
                        : {String(pickupDate).split(" ").slice(0, 3).join(" ")}
                    </>
                }</h3>
                <hr />

                <div className="text-center mb-5">
                    <div className="d-flex justify-content-center">

                        <ScheduleAvailabilityList
                            dates={pickupDates}
                            clickHandler={handlePickupClick}

                        />
                    </div>
                </div>
                
                {isPickupSet &&

                    <>
                        <h3>DROP OFF</h3>
                        <hr />
                        <div className="text-center">
                            <div className="d-flex justify-content-center">

                                <ScheduleAvailabilityList
                                    dates={dropoffDates}
                                    clickHandler={handleDropoffClick}

                                />
                            </div>
                        </div>
                    </>

                }
            </div>
        </section>
    )
}

export default Schedule