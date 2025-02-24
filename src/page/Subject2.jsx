import React from "react";
import OldStucture from "../Components/subject2/OldStucture";
import Scroll from "../layout/Scroll";
import SubjectProcess from "../Components/subject2/SubjectProcess";
import SubjectProcessStep from "../Components/subject2/SubjectProcessStep";
import SubjectOldst from "../Components/subject2/SubjectOldst";
import { motion } from "framer-motion";

const Subject2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Scroll />
      <OldStucture />
      <SubjectProcess />
      <SubjectProcessStep />
      <SubjectOldst />
    </motion.div>
  );
};

export default Subject2;
