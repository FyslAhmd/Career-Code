import React from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <HotJobs data={data}></HotJobs>
    </div>
  );
};

export default Home;
