import React from 'react'

const ScheduleAvailabilityList = ({ pickup, dropoff, time }) => {

    return (
        <>
            <span className="fw-bold">PICK UP:</span> {pickup}, {time} <br />
            <span className="fw-bold">DROP OFF:</span> {dropoff}, {time}
        </>


    )
}

export default ScheduleAvailabilityList