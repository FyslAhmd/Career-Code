import React, { Suspense, use } from "react";
import ApplicationList from "./ApplicationList";
import AuthContext from "../../contexts/AuthContext";

const myApplicationsFunction = (email) => {
  return fetch(`http://localhost:5000/applications?email=${email}`).then(
    (res) => res.json()
  );
};

const MyApplications = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <ApplicationList
          myApplicationsFunction={myApplicationsFunction(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
