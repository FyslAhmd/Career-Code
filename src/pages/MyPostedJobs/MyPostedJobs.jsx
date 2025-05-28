import React, { use, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

const MyPostedJobs = () => {
  const [data, setData] = useState([]);
  const { user } = use(AuthContext);
  useState(() => {
    axios
      .get(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  return (
    <div>
      <h1>Total Posted Jobs: {data.length}</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Job Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.jobType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
