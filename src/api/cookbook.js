import axios from "axios";

export default axios.create({
    baseURL: "http://172.22.1.139:8082/api/v1"
})