import React from "react";
import { motion } from "framer-motion";
import { FaPhp } from "react-icons/fa";

const Php = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-5xl font-extrabold text-white mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaPhp className="inline-block mr-2" />PHP
      </motion.h1>

      <motion.div
        className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20 hover:scale-105 transition-all max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>PHP (Hypertext Preprocessor)</strong>{" "}
          เป็นภาษาโปรแกรมสำหรับพัฒนาเว็บแอปพลิเคชันฝั่งเซิร์ฟเวอร์ (Server-Side
          Scripting Language) ที่ได้รับความนิยมสูงมาก
          ใช้สำหรับสร้างเว็บไซต์แบบไดนามิก (Dynamic Websites)
          และสามารถทำงานร่วมกับฐานข้อมูล เช่น MySQL, PostgreSQL, MongoDB
          ได้อย่างง่ายดาย
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          PHP ถูกพัฒนาโดย Rasmus Lerdorf ในปี 1994 และปัจจุบันดูแลโดย PHP Group
        </p>
      </motion.div>
    </div>
  );
};

export default Php;
