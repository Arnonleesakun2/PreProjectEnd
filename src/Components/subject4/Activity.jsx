import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram } from "react-icons/fa";
import { ativitys } from "../../utils/ativity"
import { PhotoProvider, PhotoView } from "react-photo-view";

const Activity = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <motion.div
        className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white border border-white/20  max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaProjectDiagram className="inline-block mr-2 mb-6" />
          การออกแบบแอกทิวิตีไดอะแกรม
        </motion.h1>
        <PhotoProvider>
            <div className="flex flex-col gap-8">
              {ativitys.map((item, index) => (
                <PhotoView key={index} src={item.picture}>
                  <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition duration-300">
                    {/* รูปภาพ */}
                    <img
                      className="w-full h-auto object-cover rounded-xl"
                      src={item.picture}
                      alt="Output Design"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium">
                      {item.des}
                      </p>
                    </div>
                  </div>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        

        
      </motion.div>
    </div>
  );
};

export default Activity;
