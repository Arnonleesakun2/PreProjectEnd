import React from "react";
import { BsFillRecordFill } from "react-icons/bs";
import { process } from "../../utils/process";

const SubjectWorkStep = () => {
  return (
    <div className="p-[20px] md:w-[50%] bg-black/90 z-[10] shadow-custom">
      <div className="font-thai text-white font-bold text-[19px] text-center py-[20px]">
        ขั้นตอนการดำเนินงาน
      </div>
      {process.map((item, index) => {
        return (
          <div key={index} className="">
            <div className="badge badge-secondary font-thai text-[17px] mt-[10px]">
              {item.title}
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="">
                <BsFillRecordFill />
              </div>
              <div className="font-thai text-[15px]">{item.des}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubjectWorkStep;
