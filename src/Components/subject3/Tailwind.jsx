import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Tailwind = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-5xl font-extrabold text-white mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaCode className="inline-block mr-2" /> Tailwind CSS
      </motion.h1>

      <motion.div
        className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20 hover:scale-105 transition-all max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>Tailwind CSS</strong> เป็น CSS Framework ที่ใช้แนวทาง
          Utility-First
          ซึ่งหมายความว่าแทนที่จะใช้คลาสที่กำหนดไว้ล่วงหน้าสำหรับองค์ประกอบ UI
          (เช่น Bootstrap หรือ Bulma) Tailwind
          ให้คลาสที่สามารถใช้ปรับแต่งสไตล์ได้โดยตรงใน HTML
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>ทำไมต้องใช้ Tailwind CSS?</strong>
          <br />
          จุดเด่นของ Tailwind CSS ได้แก่:
        </p>
        <ul className="list-disc list-inside text-gray-300">
          <li>ไม่ต้องเขียน CSS เองเยอะ – ใช้คลาสที่มีอยู่แทน</li>
          <li>
            ปรับแต่งได้ง่าย – ใช้ไฟล์ <code>tailwind.config.js</code>{" "}
            ปรับแต่งได้ตามต้องการ
          </li>
          <li>เหมาะกับการทำงานร่วมกับ React, Vue, Next.js และ Laravel</li>
          <li>น้ำหนักเบาและเร็ว – รองรับการลบ CSS ที่ไม่ได้ใช้ (PurgeCSS)</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Tailwind;
