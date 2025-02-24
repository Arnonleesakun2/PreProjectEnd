import React from "react";
import { motion } from "framer-motion";
import animationData from "../../public/animation/runanimation.json";
import LottieAnimation from "../Components/lottieanimation/LottieAnimation";

const Footer = () => {
  return (
    <div className="w-full h-[150px] bg-black overflow-hidden flex items-center">
      <motion.div
        initial={{ x: "-100vw" }} // เริ่มที่ด้านขวานอกจอ
        animate={{ x: "100vw" }} // เคลื่อนที่ไปจนถึงด้านซ้ายนอกจอ
        transition={{
          duration: 5, // ปรับความเร็วให้เหมาะสม (10 วินาทีต่อรอบ)
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex items-center"
      >
        <div className="h-[150px] w-[150px]  flex items-center">
          <LottieAnimation animationData={animationData} />
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
