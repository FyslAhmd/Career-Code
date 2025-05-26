import Lottie from "lottie-react";
import React, { use } from "react";
import loginLottie from "../../assets/lottie/login.json";
import AuthContext from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //login using firebase
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        location?.state ? navigate(location.state) : navigate("/");
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
            animationData={loginLottie}
            className="w-80"
            loop={true}
          ></Lottie>
        </div>
        <div className="card-body border rounded-xl">
          <h1 className="text-3xl font-bold mx-20">Login now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
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
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
