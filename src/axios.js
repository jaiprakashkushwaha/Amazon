import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:5001/fir-7c477/us-central1/api" //THE API (cloud function) URL

        baseURL:'https://us-central1-fir-7c477.cloudfunctions.net/api' 
        //"http://localhost:5001/fir-7c477/us-central1/api"
});

export default instance;