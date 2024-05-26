import React from "react";
import './graph.css';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import styled from "styled-components";

// props 객체에서 tempData를 구조 분해 할당
export default function Graph({ temp }){

    const FontDiv = styled.div`
      font-family: 'SCDream', sans-serif;
`;
     
    return(
        <div className="GraphBox">
            <FontDiv>
                <div className="GraphBoxIn">
                    <div className="GraphBoxContainer">
                        <div className="GraphBoxTextContainer">
                            <span className="GraphBoxFontTop">온도</span>
                            <span className="GraphBoxFontBottom">{temp}°C</span>
                        </div>
                        <ThermostatIcon style={{ fontSize: '3vw' , marginLeft: '6vw'}} />
                    </div>
                    <div className="GraphBoxFontBottomBottom">
                            직전 온도 : 23°C
                    </div>
                </div>
            </FontDiv>
        </div>
    )
}
