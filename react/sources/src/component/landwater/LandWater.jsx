import React from "react";
import './landwater.css';
import WavesIcon from '@mui/icons-material/Waves';
import styled from "styled-components";

export default function LandWater({ground1,ground2}){

    const FontDiv = styled.div`
        font-family: 'SCDream', sans-serif;
    `;

    return(
        <div className="LandWaterBox">
            <FontDiv>
                <div className="LandWaterBoxIn">
                    <div className="LandWaterBoxContainer">
                        <div className="LandWaterTextContaier">
                            <span className="LandWaterBoxFontTop">토양습도</span><br/>
                            <span className="LandWaterBoxFontBottom">{(ground1+ground2)/2}%</span>
                        </div>
                        <WavesIcon style = {{ fontSize: '3vw', marginLeft: '6vw' }}/>
                    </div>
                    <div className="LandWaterBoxFontBottomBottom">
                        평균 습도 : 44%
                    </div>
                </div> 
            </FontDiv>
        </div>
    )
}