import BASE_URL from "../../constants";


export const GetResturants = () => {


    fetch(BASE_URL + "/Resturants", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    }).then(response => {
        
        return response.json()}).then(data => {
            // do something with your data
            console.log(`data ${data}`)
            return data;
          });;
};

