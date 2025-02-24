import React from "react";
import { motion } from "framer-motion";
import Scroll from "../layout/Scroll";
import Vscodes from "../Components/subject3/Vscodes";
import MySql from "../Components/subject3/MySql";
import Php from "../Components/subject3/Php";
import Laravel from "../Components/subject3/Laravel";
import Xampp from "../Components/subject3/Xampp";
import Apache from "../Components/subject3/Apache";
import MyAdmin from "../Components/subject3/MyAdmin";
import Tailwind from "../Components/subject3/Tailwind";
import DaisyUi from "../Components/subject3/DaisyUi";
import SystemProcess from "../Components/subject3/SystemProcess";

const Subject3 = () => {
  return (
    <>
      <Scroll />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-[100vh] bg-gradient-to-r from-blue-900 via-purple-900 to-black pt-[20px]"
      >
        <div className="container py-[50px]">
          <h1 className="text-5xl font-extrabold text-white mb-10 pt-[50px]">
            บทที่ 3 ทฤษฎีและเทคโนโลยีที่เกี่ยวข้อง
          </h1>
          <SystemProcess />
          <Vscodes />
          <MySql />
          <Php />
          <Laravel />
          <Xampp />
          <Apache />
          <MyAdmin />
          <Tailwind />
          <DaisyUi />
        </div>
      </motion.div>
    </>
  );
};

export default Subject3;
