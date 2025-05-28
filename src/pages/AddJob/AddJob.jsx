import React, { use } from "react";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

const AddJob = () => {
  const { user } = use(AuthContext);
  const handleAddAJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    const { min, max, currency, ...rest } = data;
    rest.salaryRange = { min, max, currency };

    rest.requirements = rest.requirements.split(",").map((item) => item.trim());

    rest.responsibilities = rest.responsibilities
      .split(",")
      .map((item) => item.trim());

    rest.status = "active";

    //save to db
    axios
      .post("http://localhost:5000/jobs", rest)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("data added successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Please Add a Job</h2>
      <form action="" onSubmit={handleAddAJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Job Title"
            name="title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Company Name"
            name="company"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Location"
            name="location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Company Logo"
            name="company_logo"
          />
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Ob-Site"
              value="on-site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="hybrid"
            />
          </div>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select defaultValue="Job Category" className="category">
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>HR</option>
            <option>Sales</option>
            <option>Web Developer</option>
            <option>App Developer</option>
          </select>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input
            type="date"
            className="input w-full"
            name="applicationDeadline"
          />
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Minimum Salary"
                name="min"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Maximum Salary"
                name="max"
              />
            </div>

            <div>
              <select
                defaultValue="Select a Currency"
                className="w-full"
                name="currency"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BFT</option>
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
                <option>PKR</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea w-full"
            placeholder="description"
            name="description"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea w-full"
            placeholder="requirements"
            name="requirements"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea w-full"
            placeholder="Responsibilities"
            name="responsibilities"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Hr Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="HR Name"
            name="hr_name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            defaultValue={user.email}
            className="input w-full"
            placeholder="HR Email"
            name="hr_email"
          />
        </fieldset>
        <input type="submit" value="Add Job" className="btn w-full p-2 my-2" />
      </form>
    </div>
  );
};

export default AddJob;
