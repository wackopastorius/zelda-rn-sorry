import axios from "axios";

export default axios.create({
    baseURL: "http://verran.se:8082/api/v1"
})