import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Vscodes = () => {
  const code = ["JavaScript", "C#", "Java", "Python", "HTML", "PHP"];
  const decode = [
    "ง่ายต่อการเรียนรู้เหมาะสำหรับผู้เริ่มต้น ทั้งในเรื่องไวยากรณ์ของภาษาและเครื่องมือ การใช้งาน ",
    "ความนิยมของตัวภาษา โดยอาจกล่าวได้ว่าภาษา Basic นั้นเป็นภาษาที่คนเรียนรู้และ ใช้งานมากที่สุดในประวัติศาสตร์ของคอมพิวเตอร์",
    "การพัฒนาอย่างต่อเนื่อง การปรับปรุงประสิทธิภาพในด้านของตัวภาษาและความเร็ว ของการประมวลผล และในเรื่องของความสามารถใหม่ๆ เช่น การติดต่อกับระบบ ฐานข้อมูล การเชื่อมต่อกับเครือข่ายอินเตอร์เน็ต ",
  ];
  return (
    <>
      <div className="pt-[50px]">
        <motion.h1
          className="text-3xl font-extrabold text-white mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          เทคโนโลยีด้านซอฟต์แวร์ที่ใช้ในการพัฒนาระบบ
        </motion.h1>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <motion.h1
          className="text-5xl font-extrabold text-white mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaCode className="inline-block mr-2" /> Visual Studio Code
        </motion.h1>

        <motion.div
          className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20 hover:scale-105 transition-all max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            <strong>Visual Studio Code (VS Code)</strong> คือโปรแกรม Code Editor
            ของ Microsoft ที่ใช้สำหรับเขียน แก้ไข และตรวจสอบความผิดพลาดของโค้ด
            จุดเด่นของโปรแกรมนี้คือความเบา ประสิทธิภาพสูง และรองรับส่วนขยาย
            (Extensions) ที่ช่วยเพิ่มขีดความสามารถ
            สามารถใช้เขียนโค้ดได้หลากหลายภาษา
          </p>
          <br />
          <p className="text-lg text-gray-300 leading-relaxed">
            <strong>VS Code รองรับภาษาอะไรบ้าง?</strong>
            <br />
            VS Code สนับสนุนการเขียนโค้ดแทบทุกภาษาคอมพิวเตอร์ เช่น:
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>CSS และ HTML</li>
            <li>C#</li>
            <li>Java</li>
            <li>Markdown</li>
            <li>C++</li>
            <li>JSON</li>
            <li>Powershell</li>
            <li>Python</li>
            <li>PHP</li>
            <li>YAML</li>
          </ul>
          <br />
          <p className="text-lg text-gray-300 leading-relaxed">
            <strong>ข้อดีของการเขียนโปรแกรมด้วย VS Code</strong>
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <strong>ง่ายต่อการเรียนรู้</strong> เหมาะสำหรับผู้เริ่มต้น
              ทั้งในเรื่องไวยากรณ์และเครื่องมือการใช้งาน
            </li>
            <li>
              <strong>ความนิยมสูง</strong>{" "}
              เป็นหนึ่งในเครื่องมือยอดนิยมของนักพัฒนา
            </li>
            <li>
              <strong>การพัฒนาอย่างต่อเนื่อง</strong>{" "}
              มีการอัปเดตเพื่อเพิ่มประสิทธิภาพและฟีเจอร์ใหม่ ๆ อยู่เสมอ
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Vscodes;
