import axios from "axios";

export const checkoutRentalItem = (token, stripeToken, checkoutItem) => {
    try {

        let config = {
            headers: {
                "x-auth-token": token
            },
        };

        let body = {
            "stripeToken": stripeToken,
            "checkoutItem": checkoutItem
        }

        const promise = axios.post(
            process.env.REACT_APP_API_URL + `/api/checkout/`,
            body,
            config
        );
        const data = promise.then((response) => response.data);
        console.log(data)

        return data;
    } catch (err) {
        console.log(err.message);
    }
}