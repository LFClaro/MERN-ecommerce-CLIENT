import { useState, useEffect } from 'react'

// api
import { getAllMessages, getContacts, getMessages, sendMessage } from '../Api/messageApi'

// components
import MessagesContact from '../Components/Messages/MessagesContact'
import MessagesConversation from '../Components/Messages/MessagesConversation'

const Messages = () => {



    // tmp
    let conversatiomImg = "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"

    const [token, setToken] = useState([])
    const [contacts, setContacts] = useState([])
    const [selectedMessages, setSelectedMessages] = useState([])
    const [receiverId, setReceiverId] = useState("")
    const [receiverDisplayName, setReceiverDisplayName] = useState("")
    const [messageData, setMessageData] = useState("")
    const [isMessageSelected, setIsMessageSelected] = useState(false)
    // TODO call this before loading this page
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleSelectMsg = (e, displayName) => {
        // if it's the same user, dont do anything
        if (e.currentTarget.id === receiverId) {
            return;
        }
        setSelectedMessages([]) // clear messages first, then use effect will repopulate
        setIsMessageSelected(true)
        setReceiverId(e.currentTarget.id)
        setReceiverDisplayName(displayName)
    }

    const handleInputChange = (input) => {
        setMessageData(input.target.value)
    }

    const handleMessageSend = (event) => {
        event.preventDefault();
        // call api to send message
        sendMessage(token, receiverId, messageData)
            .then((data) =>
                // get updated messages
                handleRefresh()
            )

        // clear the textarea
        setMessageData("")
    }

    const handleRefresh = ()  => {
        getMessages(token, receiverId).then((data) =>
            setSelectedMessages(data))
    }

    useEffect(() => {
        // check if this user is authenticated
        let storageToken = localStorage.getItem("token");

        // set the token and load initial api calls here
        if (storageToken) {
            setToken(storageToken)
            setIsAuthenticated(true)
            // call api here
            getContacts(storageToken).then((data) => {
                setContacts(data)
            })

        }

    }, []);

    useEffect(() => {
        handleRefresh()
    }, [receiverId]);

    return (
        <section className="messages section-bg">
            <div className="container" data-aos="fade-up">
                <div className="row">

                    <div className="col-lg-2 messages-contacts">
                        <h3>
                            CONTACTS
                        </h3>
                        <div className="messages-contacts-list">
                            {contacts.map((c) => (
                                <>
                                    <button id={c._id} onClick={(e) => handleSelectMsg(e, c.fname + " " + c.lname)}>
                                        <MessagesContact img={conversatiomImg} name={c.fname + " " + c.lname} />
                                    </button>
                                </>
                            ))}
                        </div>

                    </div>



                    <div className="col messages-convo">

                        <h3>
                            {receiverDisplayName}
                            <button className="btn btn-primary" style={{ float: "right" }} onClick={handleRefresh} >Refresh Chat</button>
                        </h3>
                        {isMessageSelected &&
                            <>
                                <div className="messages-chat-history">
                                    {selectedMessages.map((m) => {

                                        if (m.receiverId === receiverId) {
                                            return <MessagesConversation message={m} position="right" />
                                        } else {
                                            return <MessagesConversation message={m} position="left" />
                                        }

                                    })}


                                </div>
                                <div className="messages-chat-box">
                                    <form className="d-flex">
                                        <textarea className="form-control messages-textarea" value={messageData} onChange={handleInputChange}></textarea>
                                        <button className="btn btn-primary" onClick={handleMessageSend}>Send</button>
                                    </form>
                                </div>
                            </>
                        }
                    </div>



                </div>


            </div>


        </section>

    )
}

export default Messages