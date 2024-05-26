import React from "react";
import './home.css';
import Graph from "../../component/graph/Graph";
import ChartInfo from "../../component/chart/chartweek/ChartWeek";
import Water from "../../component/water/Water";
import LandWater from "../../component/landwater/LandWater";
import LedFanBool from "../../component/ledfanbool/LedFanBool";
import ChartIndex from "../../component/chart/chartindex/ChartIndex";


export default function Home({ LatestData, IdxData })
{
    return( 
        <div className="home">
            <div className="homeMargin">
                <Graph temp={LatestData.LatestTempData} />
                <Water humi={LatestData.LatestHumiData}/>
                <LandWater ground1={LatestData.LatestGround1Data} ground2={LatestData.LatestGround2Data}/>
                <LedFanBool ledbool={LatestData.LatestLedData} fanbool={LatestData.LatestFanData} pumpbool={LatestData.LatestPumpData}/>
            </div>
            <div className="homeChartMargin">
                <ChartIndex 
                    IdxData={IdxData}
                />
            </div>
            
            <div className="homeMargin">
                
            </div>
        </div>
    )
}
