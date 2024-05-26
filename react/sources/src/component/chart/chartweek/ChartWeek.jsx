import React from 'react'
import '../chartinfo.css';
import ChartWeekInfo from './ChartWeekInfo';


function ChartWeek({ WeekData }) {
    return(

      <div className="ChartBottom">
          <div className="ChartBottomItem">
              <div className="ChartBottomContainer">
                  <div className="ChartBottomFont">

                    <ChartWeekInfo WeekData={WeekData}/>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default ChartWeek;