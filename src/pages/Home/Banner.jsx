import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-t-3xl border-blue-800 border-l-8 border-b-8 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team2}
            className="max-w-sm rounded-t-3xl border-blue-800 border-l-8 border-b-8 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
            animate={{ rotate: 180, transition: { duration: 4 } }}
            className="text-5xl font-bold"
          >
            Latest Jobs For You.
          </motion.h1> */}
          <h1 className="text-5xl font-bold">Latest Jobs For You.</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-white text-black">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
