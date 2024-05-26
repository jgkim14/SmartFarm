import React from "react";
import './Topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">DASHBOARD</span>
                </div>
            </div>
        </div>
    )
}