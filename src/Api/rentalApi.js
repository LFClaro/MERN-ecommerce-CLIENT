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

    console.log(datetime)

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
        body.rentalDate = pickup.getFullYear()+"-"+String(parseInt(pickup.getMonth()+1)).padStart(2, '0')+"-"+pickup.getDate();
        body.returnDate = dropoff.getFullYear()+"-"+String(parseInt(dropoff.getMonth()+1)).padStart(2, '0')+"-"+dropoff.getDate()

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

// get rental date time
export const addComment = (id, comment) => {

    try {

        const promise = axios.patch(
            process.env.REACT_APP_API_URL + `/api/rentals/comment/` + id,
            comment
        );

        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
        
    } catch (err) {
        console.log(err.message);
    }

}