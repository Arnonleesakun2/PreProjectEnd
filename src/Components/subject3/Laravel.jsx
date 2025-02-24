import React from 'react'
import { motion } from "framer-motion";
import { FaLaravel } from "react-icons/fa";

const Laravel = () => {
  return (
    <div className=" flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-5xl font-extrabold text-white mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaLaravel  className="inline-block mr-2" /> Laravel
      </motion.h1>

      <motion.div
        className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20 hover:scale-105 transition-all max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>Laravel</strong> คือเฟรมเวิร์กสำหรับพัฒนาเว็บแอปพลิเคชันด้วยภาษา PHP ซึ่งได้รับความนิยมอย่างมาก เนื่องจากใช้งานง่าย มีเครื่องมือช่วยพัฒนาอย่างครบครัน และช่วยให้นักพัฒนาสามารถสร้างเว็บแอปพลิเคชันได้อย่างมีประสิทธิภาพ รวดเร็ว และปลอดภัย
        </p>
      </motion.div>
    </div>
  )
}

export default Laravel
