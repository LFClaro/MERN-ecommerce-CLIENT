import axios from "axios";

export const getItem = (id) => {

    try {

        const promise = axios.get(
            process.env.REACT_APP_API_URL + `/api/items/` + id
        );
        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
    } catch (err) {
        console.log(err.message);
    }

};