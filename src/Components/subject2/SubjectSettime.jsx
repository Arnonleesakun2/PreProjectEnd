import React from "react";
import { settime } from "../../utils/settime";

const SubjectSettime = () => {
  return (
    <div className="absolute w-full top-[580px] md:top-[120px] md:left-[50px] md:w-[30%] " >
      <div className="">
        <div className="font-thai text-[30px] font-bold text-white">
          เวลาที่ต้องการของแต่ละงาน (Time)
        </div>
        <div className="mt-[10px] space-y-2 ">
          {settime.map((item, index) => {
            return (
              <div
                key={index}
                className="flex font-thai text-black"
              >
                <div className="font-thai bg-amber-400 py-[4px] px-[15px] rounded-[15px] ">
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubjectSettime;
