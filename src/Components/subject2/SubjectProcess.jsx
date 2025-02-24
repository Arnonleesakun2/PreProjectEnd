import React from "react";

import Subjectlisen from "../subject2/Subjectlisen";
import SubjectSystemRequre from "./SubjectSystemRequre";
import SubjectWorkStep from "./SubjectWorkStep";

const SubjectProcess = () => {
  return (
    <div className="min-h-[100vh] bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900">
      <div className="container py-[50px]">
        <div className="flex justify-end relative">
          <SubjectWorkStep />
          <SubjectSystemRequre />
          <Subjectlisen />
        </div>
      </div>
    </div>
  );
};

export default SubjectProcess;
