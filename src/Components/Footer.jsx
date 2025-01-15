import React from "react";

const Footer = () => {
  return (
    <div className="h-[80vh] flex items-end justify-start ">
      <div className="container px-4 sm:px-8 md:px-12">
        <div className="flex justify-start">
          <div className="text-white text-left">
            <div className="text-[40px] sm:text-[45px] md:text-[50px] font-bold text-shadow-lg border-b-2 pb-2">
              จบการนำเสนอ
            </div>
            <div className="text-[20px] sm:text-[22px] md:text-[25px] font-semibold pt-[20px] sm:pt-[30px]">
              ระบบจัดแผนเดินรถสำหรับส่งชิ้นส่วนไก่
            </div>
            <div className="text-[20px] sm:text-[22px] md:text-[25px] font-semibold">
              Chicken parts delivery planning system
            </div>
            <div className="text-[25px] sm:text-[28px] md:text-[30px] font-semibold mt-[20px]">
              ผู้จัดทำ
            </div>
            <div className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold">
              1. นายอาทิตย์ เจียมเงิน
            </div>
            <div className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold">
              2. นายอานนท์ ลี้สกุล
            </div>
            <div className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold">
              คณะบริหารและการจัดการ สาขาคอมพิวเตอร์ธุรกิจ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
