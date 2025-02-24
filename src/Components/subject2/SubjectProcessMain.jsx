import React from "react";
import { processmain } from "../../utils/processmain";

const SubjectProcessMain = () => {
  return (
    <div className="absolute w-full top-[250px] md:right-[100px] md:top-[0px] md:w-[30%]">
      <div className="">
        <div className="font-thai text-[30px] font-bold text-white text-center md:text-start ">
          วิธีการประมวลผล (Process)
        </div>
        <div className="mt-[10px] space-y-2">
          {processmain.map((item, index) => {
            return (
              <div key={index} className="flex font-thai text-black">
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

export default SubjectProcessMain;
