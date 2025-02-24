import React from "react";
import SubjectProcessMain from "./SubjectProcessMain";
import SubjectSettime from "./SubjectSettime";
import SubjectControl from "./SubjectControl";

const SubjectProcessStep = () => {
  return (
    <div className="min-h-[100vh] bg-gradient-to-r from-purple-800 via-red-800 to-black">
      <div className="container py-[50px]">
        <div className="relative">
          <SubjectSettime />
          <SubjectControl />
          <SubjectProcessMain />
        </div>
      </div>
    </div>
  );
};

export default SubjectProcessStep;
