import React from "react";
import './home.css';
import FeaturedInfo from "../../component/featuredinfo/FeaturedInfo";
import FeaturedInfoBottom from "../../component/featuredinfoBottom/FeaturedInfoBottom";
import ChartInfo from "../../component/chartinfo/ChartInfo";

export default function HomeCamera(){
    return( 
        <div className="home">
            <div>
                <ChartInfo/>
            </div>
            <div className="homeMargin">
                <FeaturedInfoBottom/>
                <FeaturedInfoBottom/>
                <FeaturedInfoBottom/>
            </div>
            <div className="homeMargin">
                <FeaturedInfoBottom/>
                <FeaturedInfoBottom/>
                <FeaturedInfoBottom/>
            </div>
        </div>
    )
}