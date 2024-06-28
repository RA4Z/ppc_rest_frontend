import axios from "axios";
import { notification } from "antd";
import { configs } from "constants";
import { get_data, update_database } from "./functions";

const endpoint = configs.proxyUrl;

const client = axios.create({
    baseURL: endpoint
});

client.interceptors.request.use(async configs => {
    configs.withCredentials = false;
    return configs;
});

const handleAxiosException = (err) => {
    if (err.response) {
        console.log("Full exception:", err);
        notification.error({
            message: err.response.data.title,
            description: err.response.data.description,
        });
    }
}

const api = {
    GET: {
        get_data,
        update_database
    }
}

export default api;
