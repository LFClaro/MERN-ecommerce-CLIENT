import { useState } from 'react'

// components
import MessagesContact from '../Components/Messages/MessagesContact'
import MessagesConversation from '../Components/Messages/MessagesConversation'

const Messages = () => {

    // dummy data
    const contacts = [
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Christine"
        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Angela"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Tommy"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Hilfiger"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Chanel"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Bobby"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Cereal"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Flakes"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Banana"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Bread"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Grapes"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Grapes"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Grapes"

        },
        {
            contactImg: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
            contactName: "Grapes"

        }


    ]

    const [selectedMsg, setSelectedMsg] = useState("")

    const handleSelectMsg = (name) => {
        setSelectedMsg(name)
    }

    return (
        <section className="messages section-bg">
            <div className="container" data-aos="fade-up">
                <div className="row">

                    <div className="col-sm-2 messages-contacts">
                        <h3>
                            CONTACTS
                        </h3>
                        <div className="messages-contacts-list">
                            {contacts.map((c) => (
                                <button onClick={() => handleSelectMsg(c.contactName)}>
                                    <MessagesContact key={c.contactName} img={c.contactImg} name={c.contactName} />
                                </button>
                            ))}
                        </div>

                    </div>
                    <div className="col messages-convo">
                        <h3>
                            MESSAGES
                        </h3>
                        <div className="messages-chat-history">

                            <MessagesConversation user={selectedMsg} />

                        </div>
                        <div className="messages-chat-box">
                            <form className="d-flex">
                                <textarea className="form-control messages-textarea"></textarea>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>
                        </div>

                    </div>

                </div>


            </div>


        </section>

    )
}

export default Messages