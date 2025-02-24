import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Workprocess = () => {
  return (
    <div className="min-h-[100vh] bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400">
      <div className="container">
        <div className="relative">
          <div className="text-white absolute  top-[-400px] bg-black p-[30px] md:w-[60%] md:top-[-300px]">
            <div className="font-thai text-[40px] md:text-[50px] font-bold text-shadow-lg">
              แผนกวางแผนการขนส่ง
            </div>
            <div className="font-thai text-[20px] md:text-[30px] mt-[10px] font-medium">
              - วางแผนจัดการเส้นทางขนส่งสินค้า
            </div>
            <div className="mt-[10px] p-[15px] md:p-[20px]">
              <div className="font-thai">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;บริษัท ตาตง นครสวรรค์ จำกัด
                มีระบบการวางแผนเดินรถสำหรับขนส่งชิ้นส่วนไก่เดิมนั้น
                เป็นระบบในรูปแบบ “วินโดว์แอปพลิเคชัน”
                ทำให้มีปัญหาในด้านการเข้าใช้ระบบในกรณีที่ไม่ได้อยู่ในออฟฟิศ เช่น
                อยู่นอกสถานที่ หรือ Workfromhome
                ระบบเดิมจะไม่สามารถใช้งานได้ทำให้มีข้อจำกัดด่านสถานที่
                กรณีฝ่ายบริหารหรือฝ่ายที่เกี่ยวข้องต้องการข้อมูลภายใน เช่น
                ข้อมูลรถ ข้อมูลคนขับรถ ข้อมูลแผนการเดินรถ
                จะต้องพิมพ์เป็นรูปแบบกระดาษทำให้สิ้นเปลืองทรัพยากร อีกทั้ง
                ระบบงานเดิมฐานข้อมูลไม่ได้เชื่อมต่อกับข้อมูลฝ่ายบุคคล ทำให้
                เมื่อมีพนักงานได้ลาออก
                หรือมีการรับพนักงานใหม่เข้ามาจะต้องคอยนำข้อมูลมาปรับปรุงในระบบเดิม
                เกิดปัญหาข้อมูลซ้ำซ้อน
              </div>
              <div className="font-thai opacity-80 font-medium mt-[10px]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ดังนั้นเพื่อแก้ปัญหาดังกล่าว
                และเพื่อเพิ่มประสิทธิภาพในการทำงานในด้านการวางแผนเดินรถ
                จึงจัดทำระบบวางแผนการเดินรถสำหรับส่งชิ้นส่วนไก่
                ในรูปแบบของเว็ปแอปพลิเคชันขึ้น
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[400px] md:pt-[170px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=""></div>
            <div className="text-white">
              <div className="font-thai flex text-[50px] font-bold text-shadow-lg md:justify-end">
                ⦁ วัตถุประสงค์
              </div>
              <div className="font-thai flex justify-end text-[25px] font-medium text-shadow-lg">
                ของระบบจัดแผนเดินรถสำหรับส่งชิ้นส่วนไก่
              </div>

              {/* First Objective */}
              <div className="flex items-center space-x-5 cursor-pointer hover:translate-x-3 duration-500 ">
                <div className="text-[30px]">
                  <FaArrowRight />
                </div>
                <div className="mt-[10px] backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20">
                  <div className="font-thai">
                    เพื่อพัฒนาระบบวางแผนการเดินรถสำหรับส่งชิ้นส่วนไก่ของบริษัทตาตง
                    นครสวรรค์ จำกัด
                  </div>
                </div>
              </div>

              {/* Second Objective */}
              <div className="flex items-center space-x-5 cursor-pointer hover:translate-x-3 duration-500">
                <div className="text-[30px]">
                  <FaArrowRight />
                </div>
                <div className="mt-[10px] backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20">
                  <div className="font-thai">
                    เพื่อเพิ่มประสิทธิภาพการทำงานด้านวางแผนการเดินรถสำหรับส่งชิ้นส่วนไก่ของบริษัทตาตง
                    นครสวรรค์ จำกัด
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workprocess;
