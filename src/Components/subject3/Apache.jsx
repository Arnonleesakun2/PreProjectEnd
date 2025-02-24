import React from 'react';
import { motion } from "framer-motion";
import { FaServer } from "react-icons/fa";

const Apache = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-5xl font-extrabold text-white mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaServer className="inline-block mr-2" /> Apache HTTP Server
      </motion.h1>

      <motion.div
        className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20 hover:scale-105 transition-all max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>Apache HTTP Server</strong> หรือที่เรียกสั้น ๆ ว่า <strong>Apache</strong> เป็นซอฟต์แวร์เว็บเซิร์ฟเวอร์ (Web Server Software) ที่ใช้กันอย่างแพร่หลายที่สุดในโลก มันทำหน้าที่รับคำขอจากผู้ใช้ผ่านเว็บเบราว์เซอร์ (Client Request) และส่งข้อมูลกลับมาในรูปแบบของเว็บเพจ
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          Apache ได้รับการพัฒนาโดย <strong>Apache Software Foundation (ASF)</strong> และเป็นโอเพ่นซอร์ส (Open Source) สามารถใช้งานได้ฟรี รองรับหลายระบบปฏิบัติการ เช่น:
        </p>
        <ul className="list-disc list-inside text-gray-300">
          <li>Windows</li>
          <li>macOS</li>
          <li>Linux</li>
          <li>Unix</li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Apache
