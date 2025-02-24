import React, { useState } from "react";

const SubjectOldst = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-800 via-red-800 to-black">
      <div className="container py-[50px]">
        <div className="mt-[190px] md:mt-[150px]  rounded-[7px] p-[30px]">
          <div className="font-thai text-white text-[30px] font-bold">
            ข้อดีข้อเสียของระบบงานเดิม
          </div>
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-thai font-semibold text-black"
              aria-label="ข้อดี"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <div className="space-y-2">
                <div className="">
                  <button className="font-thai bg-amber-400 py-[4px] px-[15px] rounded-[15px] ">
                    ⦁ เจ้าหน้าที่มีความคุ้นเคยกับระบบงานเดิม
                  </button>
                </div>
                <div className="">
                  <button className="font-thai bg-amber-400 py-[4px] px-[15px] rounded-[15px] ">
                    ⦁ ไม่จำเป็นต้องใช้อินเตอร์เน็ตในการทำงาน
                  </button>
                </div>
                <div className="">
                  <button className="font-thai bg-amber-400 py-[4px] px-[15px] rounded-[15px] ">
                    ⦁ ไม่จำเป็นต้องเสียค่าเช่า host
                  </button>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-thai font-semibold text-black"
              aria-label="ข้อเสีย"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6 "
            >
              <div className="space-y-2">
                <div className="">
                  <button className="font-thai bg-amber-400 py-[4px] px-[15px] rounded-[15px] ">
                    ⦁ ไม่สามารถทำงานในรูปแบบออนไลน์ได้
                  </button>
                </div>
                <div className="">
                  <button className="font-thai bg-amber-400 py-[4px] px-[15px] rounded-[15px] ">
                    ⦁ ระบบไม่ได้มีการเชื่อมต่อกับระบบฐานข้อมูลพนักงาน
                  </button>
                </div>
                <div className="">
                  <button className="font-thai bg-amber-400 py-[4px] px-[15px] rounded-[15px] ">
                    ⦁ หากเกิดเครื่องช้ำรุดอาจทำให้ข้อมูลสูญหายได้
                  </button>
                </div>
                <div className="">
                  <button className="font-thai bg-amber-400 py-[4px] px-[15px] rounded-[15px] ">
                    ⦁ ไม่มีการเข้าสู่ระบบที่มีความปลอดภัย
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectOldst;
