import React, { useEffect, useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // ถ้าเลื่อนลง -> ซ่อน Navbar
        setIsVisible(false);
      } else {
        // ถ้าเลื่อนขึ้น -> แสดง Navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed top-0 py-[10px] z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
      style={{
        backgroundColor:
          lastScrollY > 50 ? "rgba(0, 0, 0, 0.8)" : "transparent",
      }}
    >
      <div className="container">
        <div className="w-full flex justify-between items-center">
          <div className="hidden  space-x-[10px] text-white p-[10px] md:flex">
            <div className="">
              <CiDeliveryTruck className="h-full text-[60px]" />
            </div>
            <div className="text-[17px] font-semibold">
              <div className="font-thai">
                ระบบสารสนเทศและวางแผนการขนส่ง บริษัท ตาตงนครสวรรค์ จำกัด
              </div>
              <div className="font-eng">
                Transportation Information and Planning System Tatong Nakhon
                Sawan Co., Ltd.
              </div>
            </div>
          </div>
          <div role="tablist" className="tabs tabs-lifted">
            <Link to="/" role="tab" className="tab font-thai text-white">
              บท1
            </Link>
            <Link to="subject2" role="tab" className="tab font-thai text-white">
              บท2
            </Link>
            <Link to="subject3" role="tab" className="tab font-thai text-white">
              บท3
            </Link>
            <Link to="subject4" role="tab" className="tab font-thai text-white">
              บท4
            </Link>
            <Link to="subject2" role="tab" className="tab font-thai text-white">
              บท5
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
