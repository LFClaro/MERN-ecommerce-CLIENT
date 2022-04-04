import { tableBodyClasses } from "@mui/material";
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

// get rentals by id
export const getRentalById = (token, id) => {

    try {

        let headers = {
            "x-auth-token": token
        };

        const promise = axios.get(
            process.env.REACT_APP_API_URL + `/api/rentals/` + id,
            {headers}
        );
        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
    } catch (err) {
        console.log(err.message);
    }

};

// get rental date time
export const updateRentalDateTime = (token, id, rentalItem, datetime) => {

    try {

        let config = {
            headers: {
                "x-auth-token": token
            },
        };

        let pickup = new Date(datetime.pickup)
        let dropoff = new Date(datetime.dropoff)

        // TODO, fix rental/return dates to use pickup and dropoff
        let body = rentalItem
        body.id=id // workaround to match API
        body.itemId = body.item // workaround to match API
        body.rentalDate = "2022-01-01"
        body.returnDate = "2022-01-01"

        const promise = axios.put(
            process.env.REACT_APP_API_URL + `/api/rentals/`,
            body,
            config,
        );

        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
        
    } catch (err) {
        console.log(err.message);
    }

};