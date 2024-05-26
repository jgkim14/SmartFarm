import React from 'react';
import '../chartinfo.css';
import ChartHourInfo from './ChartHourInfo';


function ChartHour({ HourData }) {

    return(

      <div className="ChartBottom">
          <div className="ChartBottomItem">
              <div className="ChartBottomContainer">
                  <div className="ChartBottomFont">

                    <ChartHourInfo HourData={HourData}/>

                  </div>
              </div>
          </div>
      </div>
    )
}

export default ChartHour;