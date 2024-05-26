import React, { useEffect, useState } from "react";
import './ledfanbool.css';
import styled from "styled-components";

import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

import ModeFanOffIcon from '@mui/icons-material/ModeFanOff';
import AirIcon from '@mui/icons-material/Air';

import SensorsIcon from '@mui/icons-material/Sensors';
import SensorsOffIcon from '@mui/icons-material/SensorsOff';

export default function LedFanBool({ledbool,fanbool,pumpbool}) {
    // LED와 FAN의 상태를 관리하는 useState
    const [ledOn, setLedOn] = useState();
    const [fanOn, setFanOn] = useState();
    const [pumpOn, setPumpOn] = useState();

    useEffect(()=>{
        setLedOn(ledbool);
        setFanOn(fanbool);
        setPumpOn(pumpbool);
    })

    const FontDiv = styled.div`
      font-family: 'SCDream', sans-serif;
`   ;

    return (
        <div className="LedFanBox">
            <FontDiv>
            <div className="LedFanIn">
                <div className="LedFanContainer">
                    <span className="LedFanFont">
                        LED 
                        FAN 
                        펌프<br/>
                        {
                            ledOn
                            ? <WbIncandescentOutlinedIcon style={{ fontSize: '2.5vw', marginLeft: '0.3vw'}} />
                            : <WbIncandescentIcon style={{ fontSize: '2.5vw', marginLeft: '0.3vw'}} />
                        }
                        {
                            fanOn 
                            ? <AirIcon style={{ fontSize: '2.5vw', marginLeft: '2vw'}} />
                            : <ModeFanOffIcon style={{ fontSize: '2.5vw', marginLeft: '2vw'}} />   
                        }
                        {
                            pumpOn 
                            ? <SensorsIcon style={{ fontSize: '2.5vw', marginLeft: '2vw'}} />
                            : <SensorsOffIcon style={{ fontSize: '2.5vw', marginLeft: '2vw'}} />
                        }
                    </span>
                </div>
            </div>
            </FontDiv>
        </div>
    );
}
