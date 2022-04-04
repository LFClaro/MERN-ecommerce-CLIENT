import React from 'react'

const ScheduleAvailabilityList = ({ pickup, dropoff }) => {

    return (
        <>
            <div className="row">
                <div className="col">
                    <h5>PICK UP</h5>
                    <p>{pickup}</p>
                </div>

                <div className="col">
                    <h5>DROP OFF</h5>
                    <p>{dropoff}</p>
                </div>

            </div>


        </>


    )
}

export default ScheduleAvailabilityList