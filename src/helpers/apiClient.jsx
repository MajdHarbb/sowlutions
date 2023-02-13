import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `https://api.manoapp.com/api/v1/users`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = `f44a4aabfc5992514d262d7f517327e7`;
    config.headers['StoreID'] = 4;
    config.headers['UserAddressID'] = 60877;
    return config;
  },
  function (error) {
    let res = error.response;
    if (res.status == 401) {
      // window.location.href = `http://127.0.0.1:8000/`;
    }
    console.error(`Looks like there was a problem. Status Code: ` + res.status);
    return Promise.reject(error);
  }
);
