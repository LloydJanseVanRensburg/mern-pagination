/* eslint-disable import/no-anonymous-default-export */

async function parseResponseJSON(response){
    let responseJson = null;
    try{
        responseJson = await response.json();
    }catch(err){
        console.log(err)
    }

    return responseJson;
}

export default {

    async performRequest({url, options, payload}) {
        console.log("Begining request to", url);

        let currentToken = "";


        try{
            if(localStorage.getItem("authToken")){
                currentToken = localStorage.getItem("authToken");
            }
        }catch(err){
            console.log(err);
        }

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentToken}`,
        }

        const fullURL = url.startsWith("/") ? url : `/${url}`;


        const response  = await fetch(fullURL, {
            ...options,
            headers, 
            body: payload instanceof FormData ? payload : JSON.stringify(payload),
        });

        if(response.status === 401){
            const error = new Error("UnAuthorised");

            error.code = "E_UNAUTHORISED";
            throw error;
        }

        const responseJSON = await parseResponseJSON(response);

        return responseJSON;
    }
}