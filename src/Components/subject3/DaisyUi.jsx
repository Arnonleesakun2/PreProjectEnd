import React from "react";
import { motion } from "framer-motion";
import { FaPalette } from "react-icons/fa";

const DaisyUi = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-5xl font-extrabold text-white mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaPalette className="inline-block mr-2" /> DaisyUI
      </motion.h1>

      <motion.div
        className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20 hover:scale-105 transition-all max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>DaisyUI</strong> เป็น UI Component Library ที่ใช้ร่วมกับ{" "}
          <strong>Tailwind CSS</strong> เพื่อช่วยให้การออกแบบ UI
          สวยงามและง่ายขึ้น โดย DaisyUI เพิ่ม{" "}
          <strong>Component-First Classes</strong> ทำให้สามารถสร้างปุ่ม, การ์ด,
          ฟอร์ม ฯลฯ ได้เร็วขึ้น
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>คุณสมบัติเด่นของ DaisyUI</strong>
        </p>
        <ul className="list-disc list-inside text-gray-300">
          <li>
            ขยายจาก <strong>Tailwind CSS</strong> – ใช้ร่วมกันได้ง่าย
          </li>
          <li>มี Components สำเร็จรูป – เช่น ปุ่ม, เมนู, โมดัล ฯลฯ</li>
          <li>
            รองรับ <strong>Dark Mode</strong> – ใช้งานสะดวก
          </li>
          <li>
            มีธีมให้เลือกมากกว่า <strong>20 ธีม</strong>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default DaisyUi;
