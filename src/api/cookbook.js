import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.1.80:8082/api/v1"
})