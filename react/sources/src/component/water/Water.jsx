import React from "react";
import './water.css';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import styled from "styled-components";

export default function Water({humi}){

    const FontDiv = styled.div`
    font-family: 'SCDream', sans-serif;
    `;

    return(
        <div className="WaterBox">        
            <FontDiv>
                <div className="WaterBoxIn">
                    <div className="WaterBoxContainer">
                        <div className="WaterBoxTextContainer">
                            <span className="WaterBoxFontTop">습도</span>
                            <span className="WaterBoxFontBottom">{humi}%</span>
                        </div>
                        <WaterDropIcon style={{ fontSize: '3vw' , marginLeft: '6vw'}}/>
                    </div>    
                    <div className="WaterBoxFontBottomBottom">
                        평균 습도 : 45%
                    </div>
                </div>
            </FontDiv>
        </div>
    )
}