import React from "react";
import Home from "../page/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Notfount from "../page/Notfount";
import Layout from "../layout/Layout";
import Subject2 from "../page/Subject2";
import Subject3 from "../page/Subject3";
import Subject4 from "../page/Subject4";

const Approute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/subject2" element={<Subject2/>} />
          <Route path="/subject3" element={<Subject3/>} />
          <Route path="/subject4" element={<Subject4/>} />
        </Route>
        <Route path="*" element={<Notfount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approute;
