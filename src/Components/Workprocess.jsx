import React from "react";

const Workprocess = () => {
  return (
    <div className="py-[50px] md:py-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[60%,40%] gap-[20px]">
          <div className="text-white">
            <div className="text-[40px] md:text-[50px] font-bold text-shadow-lg">
              แผนกวางแผนการขนส่ง
            </div>
            <div className="text-[20px] md:text-[30px] mt-[10px] font-medium">
              - วางแผนจัดการเส้นทางขนส่งสินค้า
            </div>
            <div className="mt-[10px] p-[15px] md:p-[20px] border-[2px] border-[#D1C7BE] backdrop-blur-[50px] rounded-[15px] text-[16px] md:text-[20px] text-shadow-lg">
              <div className="font-[100]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;บริษัท ตาตง นครสวรรค์ จำกัด
                มีระบบการวางแผนเดินรถสำหรับขนส่งชิ้นส่วนไก่เดิมนั้น
                เป็นระบบในรูปแบบ “วินโดว์แอปพลิเคชัน”
                ทำให้มีปัญหาในด้านการเข้าใช้ระบบในกรณีที่ไม่ได้อยู่ในออฟฟิศ
                เช่น อยู่นอกสถานที่ หรือ Workfromhome
                ระบบเดิมจะไม่สามารถใช้งานได้ทำให้มีข้อจำกัดด่านสถานที่
                กรณีฝ่ายบริหารหรือฝ่ายที่เกี่ยวข้องต้องการข้อมูลภายใน เช่น
                ข้อมูลรถ ข้อมูลคนขับรถ ข้อมูลแผนการเดินรถ
                จะต้องพิมพ์เป็นรูปแบบกระดาษทำให้สิ้นเปลืองทรัพยากร อีกทั้ง
                ระบบงานเดิมฐานข้อมูลไม่ได้เชื่อมต่อกับข้อมูลฝ่ายบุคคล ทำให้
                เมื่อมีพนักงานได้ลาออก
                หรือมีการรับพนักงานใหม่เข้ามาจะต้องคอยนำข้อมูลมาปรับปรุงในระบบเดิม
                เกิดปัญหาข้อมูลซ้ำซ้อน
              </div>
              <div className="opacity-80 font-medium mt-[10px]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ดังนั้นเพื่อแก้ปัญหาดังกล่าว
                และเพื่อเพิ่มประสิทธิภาพในการทำงานในด้านการวางแผนเดินรถ
                จึงจัดทำระบบวางแผนการเดินรถสำหรับส่งชิ้นส่วนไก่
                ในรูปแบบของเว็ปแอปพลิเคชันขึ้น
              </div>
            </div>
          </div>
          <div className="hidden md:block"></div> {/* Placeholder for right column */}
        </div>
      </div>
    </div>
  );
};

export default Workprocess;
