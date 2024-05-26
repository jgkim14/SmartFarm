import React from "react";
import './sidebar.css'
import imgLogo from './baekPro.jpg'
import imgLogo2 from './logo.gif'
import { useNavigate } from 'react-router-dom';

export default function Sidebar(){
    let navigate = useNavigate();

    return(        
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="SidebarLogo">
                        <img src={imgLogo2} alt='logo image'/>

                        <div className="SidebarLogoText">JMO</div>


                    </div>
                    <img src={imgLogo} alt='logo image' className="SideAvatar"/>
                    </div>
                <div className="sidebarListItem">
                    <h3 onClick={() => navigate('/')} className="SidebarText">Dashboard</h3>
                </div>

                <div className="sidebarListItem">
                    <h3 onClick={() => navigate('/camera')} className="SidebarText">Camera</h3>
                </div>

                <div className="sidebarListItem">
                    <h3 onClick={() => navigate('/history')} className="SidebarText">History</h3>

                </div>
                
                
                
            </div>
        </div>
    )
}