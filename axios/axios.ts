import axios from "axios";

const instance = axios.create({
    baseURL: "http://api.alquran.cloud/v1"
});

export default instance