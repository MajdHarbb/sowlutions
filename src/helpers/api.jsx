import { axiosClient } from "./apiClient";

const fetchData = (data) => {
    return axiosClient.get('/products/whats_new', data)
} 

export { fetchData }