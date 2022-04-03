import axios from "axios";

// get rentals by user id
export const getRentals = (token) => {

    try {

        let headers = {
            "x-auth-token": token
        };

        const promise = axios.get(
            process.env.REACT_APP_API_URL + `/api/rentals/`,
            {headers}
        );
        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
    } catch (err) {
        console.log(err.message);
    }

};