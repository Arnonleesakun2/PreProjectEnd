import React from "react";
import { control } from "../../utils/control";

const SubjectControl = () => {
  return (
    <div className="absolute w-full top-[900px] md:left-[400px] md:top-[450px] md:w-[50%]">
      <div className="">
        <div className="font-thai text-[30px] font-bold text-white">
          เวลาที่ต้องการของแต่ละงาน (Time)
        </div>
        <div className="mt-[10px] space-y-2">
          {control.map((item, index) => {
            return (
              <div
                key={index}
                className="flex font-thai text-black "
              >
                <div className="font-thai bg-amber-400 py-[4px] px-[15px] rounded-[15px]">
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

export default SubjectControl;
