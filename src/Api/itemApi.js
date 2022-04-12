import axios from "axios";

export const getItem = (id, token) => {

    let headers = {
        "x-auth-token": token
    };
    try {

        const promise = axios.get(
            process.env.REACT_APP_API_URL + `/api/items/` + id,
            { headers}
        );
        const data = promise.then((response) => response.data._doc);
        console.log(data)

        return data;
    } catch (err) {
        console.log(err.message);
    }

};