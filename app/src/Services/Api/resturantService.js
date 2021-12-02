import BASE_URL from "../../constants";


export const GetResturants = () => {
    (async () => {
       
        const rawResponse = await fetch(BASE_URL + "/Resturants", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: {}
        });
        const content = await rawResponse.json();
        return content;
    })();
};

