import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Objective = () => {
  return (
    <div className="py-[100px] sm:py-[200px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=""></div>
          <div className="text-white">
            <div className="flex justify-end text-[50px] font-bold text-shadow-lg">
              ⦁ วัตถุประสงค์
            </div>
            <div className="flex justify-end text-[25px] font-medium text-shadow-lg">
              ของระบบจัดแผนเดินรถสำหรับส่งชิ้นส่วนไก่
            </div>

            {/* First Objective */}
            <div className="flex items-center space-x-5 cursor-pointer hover:translate-x-3 duration-500">
              <div className="text-[30px]">
                <FaArrowRight />
              </div>
              <div className="mt-[10px] p-[20px] border-[2px] border-[#D1C7BE] backdrop-blur-[50px] rounded-[15px] text-[18px] text-shadow-lg">
                <div>
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
              <div className="mt-[10px] p-[20px] border-[2px] border-[#D1C7BE] backdrop-blur-[50px] rounded-[15px] text-[18px] text-shadow-lg">
                <div>
                  เพื่อเพิ่มประสิทธิภาพการทำงานด้านวางแผนการเดินรถสำหรับส่งชิ้นส่วนไก่ของบริษัทตาตง
                  นครสวรรค์ จำกัด
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
