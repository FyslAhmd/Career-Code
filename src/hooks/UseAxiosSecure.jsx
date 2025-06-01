import axios from "axios";
import React from "react";
import { use } from "react";
import AuthContext from "../contexts/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://career-code-server-sage.vercel.app",
});

const UseAxiosSecure = () => {
  const { user, logOut } = use(AuthContext);
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      if (err.status === 401 || err.status === 403) {
        logOut()
          .then(() => {
            console.log("Unauthorized Access Detected");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export default UseAxiosSecure;
