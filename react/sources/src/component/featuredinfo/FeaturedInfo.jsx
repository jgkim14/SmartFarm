import React from "react";
import './featuredInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo(){
    return(
        <div className="featured">
            <div className="featuredItem">
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">통합그래프</span>
                </div>
            </div>
        </div>
    )
}