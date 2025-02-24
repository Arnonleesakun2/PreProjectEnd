import React from "react";
import { motion } from "framer-motion";
import Scroll from "../layout/Scroll";
import Usecase from "../Components/subject4/Usecase";
import OutputDesign from "../Components/subject4/OutputDesign";
import InputDesign from "../Components/subject4/InputDesign";
import Er from "../Components/subject4/Er";
import Activity from "../Components/subject4/Activity";

const Subject4 = () => {
  return (
    <>
      <Scroll />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-[100vh] bg-gradient-to-r from-teal-700 via-cyan-600 to-emerald-500 pt-[20px]"
        //bg-gradient-to-r from-green-900 via-teal-800 to-gray-900 บท5
      >
        <div className="container py-[50px]">
          <h1 className="text-5xl font-extrabold text-white mb-10 pt-[50px]">
            บทที่ 4 การออกแบบระบบงานใหม่
          </h1>
            <Usecase/>
            <Activity/>
            <Er/>
            <OutputDesign/>
            <InputDesign/>
        </div>
      </motion.div>
    </>
  );
};

export default Subject4;
