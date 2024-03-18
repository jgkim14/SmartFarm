import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "../pages/testPage";

export default function Consist() {
  return (
    <BrowserRouter>
      <div className="w-full h-full flex flex-col bg-[#FAFBFE]">
        <Routes>
          <Route path="/" element={<TestPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
