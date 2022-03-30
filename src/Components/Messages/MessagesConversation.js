import React from 'react'

const MessagesConversation = ({message, position}) => {
    return (
        <>
            <div className={"messages-chat-history-data-" + position}>
                {message.messageData}
            </div>

        </>
    )
}

export default MessagesConversation