import React from "react";
import picture from "../../assets/img/subject2/stucture.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { BsFillRecordFill } from "react-icons/bs";
import "react-photo-view/dist/react-photo-view.css";
import { oldstucture } from "../../utils/oldstucture";

const OldStucture = () => {
  return (
    <div className="min-h-[100vh] bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 pt-[101px]">
      <div className="container py-[50px]">
        <div className="font-thai flex justify-end gap-[10px] py-[20px] items-center md:text-[30px] font-semibold text-white">
          <div className="">บทที่2</div>
          <div className="font-thai md:text-[25px]">
            การวิเคราะห์ระบบวางแผนการขนส่ง บริษัท ตาตงนครสวรรค์ จำกัด
          </div>
        </div>
        <div className="">
          <div className="font-thai font-bold text-white text-[30px]">
            ระบบการทำงานในปัจจุบัน
          </div>
          <div className="w-full py-[20px]">
            <div className="md:flex gap-[20px] backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20">
              <div className="md:w-[30%]">
                <div className="font-thai text-white/80 font-bold text-[19px]">
                  โครงสร้างองค์กรและคำอธิบายการทำงาน
                </div>
                <PhotoProvider
                  speed={() => 800}
                  easing={(type) =>
                    type === 2
                      ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                      : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }
                  overlayRender={() => (
                    <div className="font-thai absolute bottom-[10px] left-[10px] bg-black text-white text-[14px]">
                      โครงสร้างองค์กร
                    </div>
                  )}
                >
                  <PhotoView src={picture}>
                    <img
                      className="w-full h-[150px] cursor-pointer rounded-[7px]"
                      src={picture}
                      alt="subject image"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div className="text-white/80 md:w-[70%]">
                <div className="font-thai text-[20px]">คำอธิบายการทำงาน</div>
                {oldstucture.map((item, index) => {
                  return (
                    <div key={index} className="">
                      <div className="badge badge-primary font-thai text-[17px] mt-[10px]">
                        {item.title}
                      </div>
                      <div className="">
                        {item.des.map((des, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <div className="">
                                <BsFillRecordFill />
                              </div>
                              <div className="font-thai text-[15px]">{des}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldStucture;
