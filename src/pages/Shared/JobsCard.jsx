import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    _id,
    company_logo,
    title,
    company,
    location,
    requirements,
    description,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm border border-white p-2">
      <div className="flex gap-4">
        <figure>
          <img src={company_logo} className="w-12" alt="Shoes" />
        </figure>
        <div>
          <h3 className="text-xl">{company}</h3>
          <p className="flex items-center gap-2">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((req, index) => (
            <div key={index} className="badge badge-outline">
              {req}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn bg-white text-black">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
