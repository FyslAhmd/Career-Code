import React from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ data }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">Hot Jobs of the Day</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((job) => (
          <JobsCard key={job._id} job={job}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
