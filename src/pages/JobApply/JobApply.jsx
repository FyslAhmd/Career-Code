import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const linkedin = e.target.linkedin.value;
    const github = e.target.github.value;
    const resume = e.target.resume.value;
    const application = {
      jobId: id,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };
    axios
      .post("http://localhost:5000/applications", application)
      .then((res) => {
        console.log(res.data);
        navigate("/myApplications");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">Apply for Job</h2>
      <form onSubmit={handleForm} action="" className="w-full my-10">
        <fieldset className="fieldset bg-base-200 border-base-300 w-md rounded-box border p-4 mx-auto space-y-4">
          <div>
            <label className="label">Linkedin Profile Link</label>
            <input
              type="url"
              name="linkedin"
              className="input w-full"
              placeholder="Linkedin Profile Link"
            />
          </div>

          <div>
            <label className="label">Github Profile Link</label>
            <input
              type="url"
              name="github"
              className="input w-full"
              placeholder="Github Profile Link"
            />
          </div>

          <div>
            <label className="label">Resume Link</label>
            <input
              type="url"
              name="resume"
              className="input w-full"
              placeholder="Resume Link"
            />
          </div>
          <button type="submit" className="btn bg-white text-black">
            Apply
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
