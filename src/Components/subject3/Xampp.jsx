import React from 'react'
import { motion } from "framer-motion";
import { FaServer } from "react-icons/fa";

const Xampp = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
    <motion.h1
      className="text-5xl font-extrabold text-white mb-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <FaServer className="inline-block mr-2" /> XAMPP
    </motion.h1>

    <motion.div
      className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20 hover:scale-105 transition-all max-w-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-lg text-gray-300 leading-relaxed">
        <strong>XAMPP</strong> เป็นซอฟต์แวร์แพ็กเกจ (Software Package) ที่ช่วยให้คุณสามารถติดตั้ง Apache, MySQL (MariaDB), PHP และ Perl ได้ง่ายในเครื่องคอมพิวเตอร์ของคุณ เพื่อใช้พัฒนาเว็บแอปพลิเคชันแบบ Local Server โดยไม่ต้องเชื่อมต่อกับเซิร์ฟเวอร์จริง
      </p>
      <br />
      <p className="text-lg text-gray-300 leading-relaxed">
        <strong>ชื่อ XAMPP มาจากส่วนประกอบหลักของมัน:</strong>
      </p>
      <ul className="list-disc list-inside text-gray-300">
        <li><strong>X</strong> = Cross-platform (รองรับ Windows, macOS, Linux)</li>
        <li><strong>A</strong> = Apache (เว็บเซิร์ฟเวอร์)</li>
        <li><strong>M</strong> = MySQL (ฐานข้อมูล)</li>
        <li><strong>P</strong> = PHP (ภาษาสำหรับพัฒนาเว็บ)</li>
        <li><strong>P</strong> = Perl (ภาษาสคริปต์อีกตัวที่รองรับ)</li>
      </ul>
    </motion.div>
  </div>
  )
}

export default Xampp
