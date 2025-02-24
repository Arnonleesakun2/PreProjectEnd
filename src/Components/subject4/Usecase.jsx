import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { usecase } from "../../utils/usecase";
import picture from "../../assets/img/subject4/usecase.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Usecase = () => {
  return (
    <div className="pt-[50px] px-4">
      <h1 className="text-3xl font-extrabold text-white text-center mb-6">
        กระบวนการพัฒนาระบบคอมพิวเตอร์
      </h1>
      <div className="p-6">
        <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border mx-auto border-white/20 max-w-3xl">
          <div className="flex items-center mb-4">
            <FaProjectDiagram className="text-white text-3xl mr-2" />
            <h1 className="text-2xl font-bold">
              การออกแบบยูสเคสไดอะแกรม (Use Case Diagram)
            </h1>
          </div>
          <p className="text-lg font-semibold">บริษัท ตาตงนครสวรรค์ จำกัด</p>
          <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
            overlayRender={() => (
              <div className="font-thai absolute bottom-[10px] left-[10px] bg-black text-white text-[14px] p-2">
                ยูสเคสไดอะแกรมของระบบสารสนเทศและวางแผนการขนส่ง
              </div>
            )}
          >
            <PhotoView src={picture}>
              <img
                className="w-full mt-4 rounded-lg shadow"
                src={picture}
                alt="subject image"
              />
            </PhotoView>
          </PhotoProvider>
          <div className="mt-6 space-y-4 text-white">
            <h2 className="text-xl font-bold">ขั้นตอนการทำงาน</h2>
            <ul className="list-disc list-inside space-y-2">
              {usecase.map((item, index) => (
                <li key={index} className="text-lg text-gray-200">
                  <strong className="font-extrabold text-white">{item.title}</strong> {item.des}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usecase;
