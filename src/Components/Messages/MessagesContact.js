import React from 'react'

const MessagesContact = ({ img, name }) => {

    return (
        <>
            <div className="contact-box mt- mb-1 row">
                <div className="col col-4">
                    <img src={img} style={{ width: 50 + 'px' }}/>
                </div>
                <div className="col col-6">
                    <p>{name}</p>
                </div>

            </div>
        </>


    )
}

export default MessagesContact