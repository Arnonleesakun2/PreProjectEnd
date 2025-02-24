import React from "react";
import Banner from "../Components/home/Banner";
import Workprocess from "../Components/home/Workprocess";
import Scope from "../Components/home/Scope";
import Scroll from "../layout/Scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=""
    >
      <Scroll />
      <Banner />
      <Workprocess />
      <Scope />
    </motion.div>
  );
};

export default Home;
