import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaLaptopCode } from "react-icons/fa";
import { outputdesign } from "../../utils/outputdesign";

const OutputDesign = () => {
  return (
    <div className="pt-[50px] px-4">
      {/* หัวข้อหลัก */}
      <h1 className="text-3xl font-extrabold text-white text-center">
        การออกแบบการเชื่อมประสานกับผู้ใช้
      </h1>

      <div className="p-6">
        <div className="bg-gray-900/40 backdrop-blur-xl shadow-xl rounded-2xl p-6 text-white border border-white/20 mx-auto max-w-3xl">
          {/* หัวข้อย่อย */}
          <div className="flex items-center mb-6">
            <FaLaptopCode className="text-white text-3xl mr-2" />
            <h1 className="text-2xl font-bold text-white">
              การออกแบบสิ่งนำออก (Output Design)
            </h1>
          </div>

          {/* แสดงภาพเรียงลงแนวตั้ง */}
          <PhotoProvider>
            <div className="flex flex-col gap-8">
              {outputdesign.map((item, index) => (
                <PhotoView key={index} src={item.picture}>
                  <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition duration-300">
                    {/* รูปภาพ */}
                    <img
                      className="w-full h-auto object-cover rounded-xl"
                      src={item.picture}
                      alt="Output Design"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium">
                        {item.des}
                      </p>
                    </div>
                  </div>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </div>
    </div>
  );
};

export default OutputDesign;
