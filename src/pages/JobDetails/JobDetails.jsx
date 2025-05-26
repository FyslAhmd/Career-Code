import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <Link to={`/jobApply/${job._id}`}>
        <button className="btn bg-white text-black"> Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
