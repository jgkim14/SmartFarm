import React from 'react';
import '../chartinfo.css';
import ChartMonthInfo from './ChartMonthInfo';


function ChartMonth({ MonthData }) {

    return(

      <div className="ChartBottom">
          <div className="ChartBottomItem">
              <div className="ChartBottomContainer">
                  <div className="ChartBottomFont">

                    <ChartMonthInfo MonthData={MonthData}/>

                  </div>
              </div>
          </div>
      </div>
    )
}

export default ChartMonth;