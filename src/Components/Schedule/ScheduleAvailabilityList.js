import React, { useState, useEffect } from 'react'

const ScheduleAvailabilityList = ({ dates, clickHandler }) => {

    return (
        <>
            {dates.map((a) => (
                <button className="btn m-3" onClick={(e) => clickHandler(e, a)}>
                    <div className="row">
                        <div className="col">
                            <p>{String(a).split(" ").slice(0,3).join(" ")}</p>
                        </div>
                    </div>
                </button>
            ))}


        </>


    )
}

export default ScheduleAvailabilityList