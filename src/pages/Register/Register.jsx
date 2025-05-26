import React, { use } from "react";
import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import AuthContext from "../../contexts/AuthContext";
const Register = () => {
  const { registerUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //register using firebase
    registerUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-[500px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left mt-60 ml-20 hidden md:block">
          <Lottie
            animationData={registerLottie}
            className="w-80"
            loop={true}
          ></Lottie>
        </div>
        <div className="card-body border rounded-xl">
          <h1 className="text-3xl font-bold mx-20">Register now!</h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
