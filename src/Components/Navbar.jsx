import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="py-[20px]">
      <div className="container">
        <div className="w-full md:w-[50%]"> {/* Use full width on small screens, 50% on larger screens */}
          <div className="flex space-x-[10px] text-white p-[10px] border-[2px] rounded-[15px] backdrop-blur-[50px] border-[#92A3B0]">
            <div className="">
              <CiDeliveryTruck className="h-full text-[60px]" />
            </div>
            <div className="text-[20px] font-semibold">
              <div className="">ระบบจัดแผนเดินรถสำหรับส่งชิ้นส่วนไก่</div>
              <div className="">Chicken parts delivery planning system</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
