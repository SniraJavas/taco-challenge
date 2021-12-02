import BASE_URL from "../../constants";


export const SaveOrders = (order) => {
    (async () => {
        const rawResponse = await fetch(
            BASE_URL + "/api/Orders",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",  
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            }
        );
    })();
};

