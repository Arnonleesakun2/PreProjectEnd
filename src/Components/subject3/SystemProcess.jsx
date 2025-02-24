import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram } from "react-icons/fa";

const SystemProcess = () => {
  return (
    <>
      <div className="pt-[50px]">
        <motion.h1
          className="text-3xl font-extrabold text-white mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          กระบวนการพัฒนาระบบคอมพิวเตอร์
        </motion.h1>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center p-10">
          <motion.h1
            className="text-5xl font-extrabold text-white mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="inline-block mr-2"
            >
              <FaProjectDiagram />
            </motion.div>
            วงจรการพัฒนาระบบ (SDLC)
          </motion.h1>

          <motion.div
            className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20 hover:scale-105 transition-all max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              ระบบสารสนเทศทั้งหลายมีวงจรชีวิตที่เหมือนกันตั้งแต่เกิดจนตาย
              วงจรนี้จะเป็นลำดับขั้นตอนที่ต้องทำตั้งแต่ต้นจนถึงการใช้งานจริง
              นักวิเคราะห์ระบบต้องเข้าใจให้ดีว่าขั้นตอนแต่ละส่วนมีบทบาทอย่างไร
            </p>
            <br />
            <p className="text-lg text-gray-300 leading-relaxed">
              ขั้นตอนการพัฒนาระบบมีทั้งหมด 7 ขั้นตอน ได้แก่:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>
                <strong>1. เข้าใจปัญหา (Problem Recognition)</strong> –
                วิเคราะห์ปัญหาของระบบปัจจุบัน
              </li>
              <li>
                <strong>2. ศึกษาความเป็นไปได้ (Feasibility Study)</strong> –
                ประเมินความคุ้มค่าและความเป็นไปได้
              </li>
              <li>
                <strong>3. วิเคราะห์ (Analysis)</strong> –
                ศึกษาความต้องการของผู้ใช้
              </li>
              <li>
                <strong>4. ออกแบบ (Design)</strong> – กำหนดโครงสร้างและ UI
                ของระบบ
              </li>
              <li>
                <strong>5. สร้างหรือพัฒนาระบบ (Construction)</strong> –
                เขียนโค้ดและพัฒนาโปรแกรม
              </li>
              <li>
                <strong>6. การปรับเปลี่ยน (Conversion)</strong> –
                นำระบบใหม่มาใช้งานแทนระบบเก่า
              </li>
              <li>
                <strong>7. บำรุงรักษา (Maintenance)</strong> –
                ดูแลและปรับปรุงระบบให้ทันสมัย
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SystemProcess;
