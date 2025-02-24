import React from "react";
import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa";

const MySql = () => {
  return (
    <div className=" flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-5xl font-extrabold text-white mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaDatabase className="inline-block mr-2" /> MySQL Database
      </motion.h1>

      <motion.div
        className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20 hover:scale-105 transition-all max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          MySQL เป็นระบบจัดการฐานข้อมูลเชิงสัมพันธ์ (Relational Database Management System - RDBMS) ที่ได้รับความนิยมอย่างแพร่หลาย เนื่องจากใช้งานง่าย มีประสิทธิภาพสูง และรองรับการทำงานกับเว็บแอปพลิเคชันจำนวนมาก เช่น WordPress, Facebook, YouTube, Twitter และแอปพลิเคชันอื่น ๆ MySQL ถูกพัฒนาโดย บริษัท MySQL AB และในปี 2008 ถูกซื้อกิจการโดย Oracle Corporation ปัจจุบัน MySQL มีทั้ง เวอร์ชันฟรี (Community Edition) และ เวอร์ชันสำหรับองค์กร (Enterprise Edition) ที่มีฟีเจอร์เพิ่มเติม
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          ความสามารถในการจัดการข้อมูลแบบ Massively Parallel Processing (MPP) ซึ่งช่วยให้การประมวลผลข้อมูลเร็วขึ้น และมีความสามารถในการจัดการข้อมูลแบบ Scale-out ซึ่งช่วยให้สามารถเพิ่มประสิทธิภาพการประมวลผลข้อมูลได้โดยไม่ต้องเปลี่ยนแปลงโครงสร้างของฐานข้อมูล อีกทั้งยังมีความสามารถในการจัดการข้อมูลแบบ Columnstore Index ซึ่งช่วยให้การค้นหาข้อมูลเร็วขึ้น
        </p>
      </motion.div>
    </div>
  );
};

export default MySql;
