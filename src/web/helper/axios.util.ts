import axios from "axios";
import { StorageService } from "../components/util/storage.service";

const BASE_URL = "https://my-json-server.typicode.com";
const AxiosInstance = axios.create({
    baseURL: BASE_URL, headers: { 'x-token': StorageService.generateRandomToken() }
});

AxiosInstance.interceptors.request.use((req) => {
    console.log(req.baseURL, req.headers);
    req.headers['x-auth'] = 'random';
    return req;
});
AxiosInstance.interceptors.response.use((res) => {
    console.log(res.config, res.headers, res);
    return res.data;
});
export const axiosInstance = AxiosInstance;