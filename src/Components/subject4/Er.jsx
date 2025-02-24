import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import er from "../../assets/img/subject4/er.png"

const Er = () => {
  return (
    <div className="pt-[50px] px-4">
      <div className="p-6">
        <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border mx-auto border-white/20 max-w-3xl">
          <div className="flex items-center mb-4">
            <FaProjectDiagram className="text-white text-3xl mr-2" />
            <h1 className="text-2xl font-bold">
            การออกแบบแผนภาพความสัมพันธ์ข้อมูล (E-R Diagram)
            </h1>
          </div>
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
            <PhotoView src={er}>
              <img
                className="w-full mt-4 rounded-lg shadow"
                src={er}
                alt="subject image"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
      </div>
    </div>
  )
}

export default Er
