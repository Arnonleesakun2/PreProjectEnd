import React from "react";
import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa";

const MyAdmin = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-5xl font-extrabold text-white mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaDatabase className="inline-block mr-2" /> phpMyAdmin
      </motion.h1>

      <motion.div
        className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20 hover:scale-105 transition-all max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>phpMyAdmin</strong> เป็นเครื่องมือจัดการฐานข้อมูล{" "}
          <strong>MySQL/MariaDB</strong> ผ่านเว็บเบราว์เซอร์
          ที่ช่วยให้ผู้ใช้สามารถสร้าง แก้ไข ลบ
          และจัดการฐานข้อมูลได้โดยไม่ต้องใช้คำสั่ง SQL แบบ Manual
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>คุณสมบัติเด่นของ phpMyAdmin</strong>
        </p>
        <ul className="list-disc list-inside text-gray-300">
          <li>ใช้งานผ่านเว็บเบราว์เซอร์ – ไม่ต้องใช้ Command Line</li>
          <li>รองรับทั้ง MySQL และ MariaDB</li>
          <li>เป็นโอเพ่นซอร์ส (Open Source) และใช้ฟรี</li>
          <li>รองรับหลายภาษา (รวมถึงภาษาไทย)</li>
          <li>
            มีเครื่องมือช่วยสร้างและจัดการตาราง ฐานข้อมูล และ Users ได้ง่าย
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MyAdmin;
