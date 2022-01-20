import queryString from 'query-string';

    export const list = params => {
        const query = queryString.stringify(params);
        console.log("query", query);
        return fetch(`${process.env.REACT_APP_API_URL}/products?${query}`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };
    export const read = productId => {
        return fetch(`${process.env.REACT_APP_API_URL}/product/${productId}`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };
    
    export const listRelated = productId => {
        return fetch(`${process.env.REACT_APP_API_URL}/products/related/${productId}`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };


    export const getBraintreeClientToken = (userId, token) => {
        return fetch(`${process.env.REACT_APP_API_URL}/braintree/getToken/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };
    
    export const processPayment = (userId, token, paymentData) => {
        return fetch(`${process.env.REACT_APP_API_URL}/braintree/payment/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(paymentData)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };
    export const createOrder = (userId, token, createOrderData) => {
        return fetch(`${process.env.REACT_APP_API_URL}/order/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ order: createOrderData })
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    