import React from "react";
import UseAxiosSecure from "./UseAxiosSecure";

const UseApplicationApi = () => {
  const axiosSecure = UseAxiosSecure();

  const myApplicationPromise = (email) => {
    return axiosSecure
      .get(`/applications?email=${email}`)
      .then((res) => res.data);
  };
  return { myApplicationPromise };
};

export default UseApplicationApi;
