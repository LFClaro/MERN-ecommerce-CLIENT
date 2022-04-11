import axios from "axios";

export const getProfileDetails = (token) => {

    try {

        let headers = {
            "x-auth-token": token
        };

        const promise = axios.get(
            process.env.REACT_APP_API_URL + `/api/profile/`,
            {headers}
        );
        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
    } catch (err) {
        console.log(err.message);
    }

};