import React, { useState } from "react";
import './homehistory.css';
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import ChartMonth from "../chart/chartmonth/ChartMonth";
import ChartHour from "../chart/charthour/ChartHour";
import ChartWeek from "../chart/chartweek/ChartWeek";

export default function HistoryChart({ MonthData, HourData, WeekData }) {
  let navigate = useNavigate();
  const [selected, setSelected] = useState(""); // 초기 선택된 항목 상태를 빈 문자열로 설정

  const handleSelect = (path) => {
    setSelected(path);
    navigate(path);
  };

  const getClassName = (path) => {
    return selected === path ? "HomeHistoryFont selected" : "HomeHistoryFont";
  };

  return (
    <div className="HomeHistoryBox">
        <div className="HomeHistoryIn">
            <div className="HomeHistoryContainer">
                <Routes>
                    <Route path="/" element={<Navigate replace to="month" />} /> {/* 기본 경로에서 'month'로 리다이렉트 */}
                    <Route path="month" element={<ChartMonth MonthData={MonthData} />} />
                    <Route path="hour" element={<ChartHour HourData={HourData} />} />
                    <Route path="week" element={<ChartWeek WeekData={WeekData} />} />
                </Routes>
                <div className="HomeHistoryList">
                    <div className="HomeHistoryListItem">
                        <h3 onClick={() => handleSelect('hour')} className={getClassName('hour')}>Day</h3>
                    </div>
                    <div className="HomeHistoryListItem">
                        <h3 onClick={() => handleSelect('week')} className={getClassName('week')}>Week</h3>
                    </div>
                    <div className="HomeHistoryListItem">
                        <h3 onClick={() => handleSelect('month')} className={getClassName('month')}>Month</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
