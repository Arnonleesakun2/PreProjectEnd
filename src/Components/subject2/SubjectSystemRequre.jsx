import React, { useState } from "react";
import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import output from "../../assets/img/subject2/subjectoutput.png";
import { inputpicture } from "../../utils/inputpicture";

const SubjectSystemRequre = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <div className="absolute bottom-[-350px] md:bottom-[-200px] md:left-0 md:w-[40%] p-[20px] ">
      <div className="font-thai text-center font-bold text-white text-[30px]">
        ความต้องการของระบบ <br /> (System Requirement)
      </div>
      <div className="absolute left-[-50px] top-[150px] font-thai text-white px-[20px] py-[7px] bg-amber-400 rounded-[30px] shadow-custom">
        รายงาน (Output)
      </div>
      <div className="mt-[20px] shadow-custom">
        <PhotoProvider
          speed={() => 800}
          easing={(type) =>
            type === 2
              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }
          overlayRender={() => (
            <div className="font-thai absolute bottom-[10px] left-[10px] bg-black text-white text-[14px]">
              ตัวอย่างรายงานการวางแผนการเดินรถบริษัทตาตงนครสวรรค์จำกัด
            </div>
          )}
        >
          <PhotoView src={output}>
            <img
              className="w-full h-[200px] cursor-pointer rounded-[7px]"
              src={output}
              alt="Output"
            />
          </PhotoView>
        </PhotoProvider>
      </div>
      {/* ปุ่มเปิดรูป */}
      <div className="absolute right-[-100px] bottom-[70px] font-thai text-white px-[20px] py-[7px] bg-amber-400 rounded-[30px] shadow-custom">
        <button
          className=""
          onClick={() => setVisible(true)}
        >
          ข้อมูลและวิธีการนำเข้า (Input)
        </button>
      </div>
      {/* รูปที่มาลูป */}
      <div className="mt-[20px]">
        <PhotoSlider
          images={inputpicture.map((item) => ({
            src: item.picture,
            key: item.picture,
          }))}
          visible={visible}
          onClose={() => setVisible(false)}
          index={index}
          onIndexChange={setIndex}
          overlayRender={() => (
            <div className="font-thai absolute bottom-[10px] left-[10px] bg-black text-white text-[14px]">
              {inputpicture[index]?.des || "คำอธิบายไม่พบ"}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default SubjectSystemRequre;
