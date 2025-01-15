import React from "react";

const Results = () => {
  return (
    <div className="py-[100px] sm:py-[150px] md:py-[200px]">
      <div className="container px-4 sm:px-8">
        <div className="w-full sm:w-[80%] md:w-[60%] mx-auto">
          <div className="text-white text-center text-[30px] sm:text-[35px] md:text-[40px] font-semibold text-shadow-lg">
            ประโยชน์ที่คาดว่าจะได้รับ
          </div>
          <div className="text-white space-y-[20px] mt-[30px] sm:mt-[40px]">
            <div className="flex items-center justify-center p-[12px] sm:p-[15px] border-[2px] rounded-[15px] backdrop-blur-[20px] text-[18px] sm:text-[20px] font-medium cursor-pointer hover:scale-105 duration-700">
              <span className="text-[25px] font-bold">1</span>&nbsp;พนักงานสามารถทำงานในรูปแบบออนไลน์ได้
            </div>
            <div className="flex items-center justify-center p-[12px] sm:p-[15px] border-[2px] rounded-[15px] backdrop-blur-[20px] text-[18px] sm:text-[20px] font-medium cursor-pointer hover:scale-105 duration-700">
              <span className="text-[25px] font-bold">2</span>&nbsp;สามารถจัดการรายชื่อพนักงานเข้าออกโดยอัตโนมัติ
            </div>
            <div className="flex items-center justify-center p-[12px] sm:p-[15px] border-[2px] rounded-[15px] backdrop-blur-[20px] text-[18px] sm:text-[20px] font-medium cursor-pointer hover:scale-105 duration-700">
              <span className="text-[25px] font-bold">3</span>&nbsp;สามารถคำณวนน้ำหนักเนื้อสัตว์รวมกับน้ำหนักตะกร้า
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
