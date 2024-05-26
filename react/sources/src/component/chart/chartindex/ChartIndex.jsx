import React from 'react';
import '../chartinfo.css';
import ChartIndexInfo from './ChartIndexInfo';


function ChartIndex({ IdxData }) {

    return(

      <div className="ChartBottom">
          <div className="ChartBottomItem">
              <div className="ChartBottomContainer">
                  <div className="ChartBottomFont">

                    <ChartIndexInfo IdxData={IdxData}/>

                  </div>
              </div>
          </div>
      </div>
    )
}

export default ChartIndex;