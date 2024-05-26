import React from "react";
import './home.css';
import ChartInfo from "../../component/chart/chartweek/ChartWeek";
import HistroyBool from "../../component/homehistory/HistoryBool";
import HistoryChart from "../../component/homehistory/HistoryChart";



export default function HomeHistory({MonthData, HourData, WeekData}){
    return(

        <div className="home">
            <div>
                <HistoryChart MonthData={MonthData} HourData={HourData} WeekData={WeekData}/>
            </div>

        </div>
    )
}