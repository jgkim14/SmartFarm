import React from "react";
import './Temp.css';
import ThermostatIcon from '@mui/icons-material/Thermostat';

export default function FeaturedInfoBottom() {
    return (
        <div className="TempBottom">
            <div className="TempBottomItem">
                <div className="TempBottomContainer">
                    <ThermostatIcon /> {/* 아이콘을 추가합니다 */}
                    <span className="TempBottomFont">온도 : 36.5 °C</span>
                </div>
            </div>
        </div>
    )
}
