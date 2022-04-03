import React from 'react'
import ScheduleAvailabilityList from '../Components/Schedule/ScheduleAvailabilityList'

const Schedule = (rentalItem) => {

    // TODO this needs to connect to transaction flow
    // TODO schedule needs to pull from DB
    const availability = [
        {
            pickup: "March 1, 2021",
            dropoff: "March 7, 2021",
            time: "1 PM"
        },
        {
            pickup: "March 1, 2021",
            dropoff: "March 7, 2021",
            time: "2 PM"
        }, {
            pickup: "March 2, 2021",
            dropoff: "March 8, 2021",
            time: "2 PM"
        }, {
            pickup: "March 2, 2021",
            dropoff: "March 8, 2021",
            time: "4 PM"
        }, {
            pickup: "March 4, 2021",
            dropoff: "March 11, 2021",
            time: "5 PM"
        }, {
            pickup: "March 4, 2021",
            dropoff: "March 11, 2021",
            time: "7 PM"
        }, {
            pickup: "March 5, 2021",
            dropoff: "March 12, 2021",
            time: "1 PM"
        }, {
            pickup: "March 5, 2021",
            dropoff: "March 12, 2021",
            time: "2 PM"
        }
    ]

    function handleSelectSchedule(date, time) {
        console.log(date)
        console.log(time)
    }

    return (
        <section className="schedule section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Schedule Meetup</h2>
                    <p>Select a date and time you for item pick up and drop off</p>
                </div>

                {/* TODO this needs to check from DB if owner is available on given date and time */}

                <div className="d-flex flex-column">
                    {availability.map((a) => (
                        <button className="btn mb-3" onClick={() => handleSelectSchedule(a.date, a.time)}>
                            <ScheduleAvailabilityList key={a.pickup + a.time} pickup={a.pickup} dropoff={a.dropoff} time={a.time} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Schedule