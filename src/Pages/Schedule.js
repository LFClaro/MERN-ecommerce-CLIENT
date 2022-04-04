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

    //console.log(searchParams.get("id")) // get id from param
    //console.log(searchParams.get("item_id")) // get itemId from param

    useEffect(() => {

        // check if this user is authenticated
        let storageToken = localStorage.getItem("token");

        // set the token and load initial api calls here
        if (storageToken) {
            setToken(storageToken)
            setIsAuthenticated(true)

            // generate pick up and drop off datetimes
            let hours = new Array(8).fill(null).map((item, index) => index + 9);
            let datetimes = hours.map((item) => {
                // pick up is tomorrow, dropoff 7 days from now
                let pickup = new Date()
                pickup.setDate(pickup.getDate() + 1)
                pickup.setHours(item, 0, 0)

                let dropoff = new Date()
                dropoff.setDate(pickup.getDate() + 7)
                dropoff.setHours(item, 0, 0)

                return {
                    pickup: pickup,
                    dropoff: dropoff
                }
            });

            setAvailability(datetimes)

            // get rental details
            getRentalById(token, id).then((data) => {
                setRentalItem(data)
                console.log(data)
            })

        }

    }, [])

    function handleSelectSchedule(event, datetime) {
        console.log(datetime)

        updateRentalDateTime(token, id, rentalItem, datetime)
            .then((data) => {
                window.open("/checkout?id="+id, "_self")
            })

    }

    return (
        <section className="schedule section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Schedule Meetup</h2>
                    <p>Select a date and time for item pick up and drop off</p>
                </div>

                {/* TODO this needs to check from DB if owner is available on given date and time */}

                <div className="d-flex flex-column">
                    {availability.map((a) => (
                        <button className="btn mb-3" onClick={(e) => handleSelectSchedule(e, a)}>
                            <ScheduleAvailabilityList pickup={String(a.pickup)} dropoff={String(a.dropoff)} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Schedule