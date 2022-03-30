import axios from "axios";

export const getAllMessages = (token) => {
    
    try {

        let config = {
            headers: {
                "x-auth-token": token
            },
        };

        const promise = axios.post(
            process.env.REACT_APP_API_URL + `/api/messages/`,
            "",
            config
        );
        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
    } catch (err) {
        console.log(err.message);
    }
    
};

// get specific messages related to current user and receiverId
export const getMessages = (token, receivedId) => {
    
    try {

        let config = {
            headers: {
                "x-auth-token": token
            },
        };

        const promise = axios.post(
            process.env.REACT_APP_API_URL + `/api/messages/to/` + receivedId,
            "",
            config
        );
        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
    } catch (err) {
        console.log(err.message);
    }
    
};

export const getContacts = (token) => {

    try {

        let config = {
            headers: {
                "x-auth-token": token
            },
        };

        const promise = axios.post(
            process.env.REACT_APP_API_URL + `/api/messages/contacts`,
            "",
            config
        );
        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
    } catch (err) {
        console.log(err.message);
    }
}

export const sendMessage = (token, receiverId, messageData) => {
    try {

        let postData = {
            "receiverId" : receiverId,
            "messageData" : messageData
        };

        let config = {
            headers: {
                "x-auth-token": token
            },
        };

        console.log("sending messages...")
        const promise = axios.post(
            process.env.REACT_APP_API_URL + `/api/messages/create`,
            postData,
            config
        );
        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
    } catch (err) {
        console.log(err.message);
    }
}