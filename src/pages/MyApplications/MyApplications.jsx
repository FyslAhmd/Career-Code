import React, { Suspense, use } from "react";
import ApplicationList from "./ApplicationList";
import AuthContext from "../../contexts/AuthContext";
import UseApplicationApi from "../../hooks/UseApplicationApi";

const myApplicationsFunction = (email, accessToken) => {
  //using cookie
  // return fetch(`https://career-code-server-sage.vercel.app/applications?email=${email}`, {
  //   credentials: "include",
  // }).then((res) => res.json());
  //using firebase accessToken
  // return fetch(`https://career-code-server-sage.vercel.app/applications?email=${email}`, {
  //   headers: {
  //     authorization: `Bearer ${accessToken}`,
  //   },
  // }).then((res) => res.json());
};

const MyApplications = () => {
  const { user } = use(AuthContext);
  const { myApplicationPromise } = UseApplicationApi();
  // console.log(myApplicationPromise(user.email));

  return (
    <div>
      <Suspense fallback={"loading..."}>
        <ApplicationList
          myApplicationPromise={myApplicationPromise(user?.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
