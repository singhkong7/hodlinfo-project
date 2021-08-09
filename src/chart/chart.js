import React from "react";
import "./chart.css";
function Chart()
{
    return(
        <div className="chart">
            <div className="title">
                <h1 className="grey" >#</h1>
                <h2 >Platform</h2>
                <h2>Last Traded Price</h2>
                <h2 >Buy/Sell Price</h2>
                <h2>Difference</h2>
                <h2 >Savings</h2>
            </div>
            <div className="row">
                <h1 className="white">1</h1>
                <h2 className="white">WazirX</h2>
                <h2 className="white">₹28,58,659</h2>
                <h2 className="white">₹28,58,659/₹29,02,608</h2>
                <h2 className="red">1.5%</h2>
                <h2 className="red">₹43,948</h2>
            </div>
            <div className="row">
                <h1>2</h1>
                <h2 className="white">Bitbns</h2>
                <h2 className="white">₹28,58,659</h2>
                <h2 className="white">₹28,58,659/₹29,02,608</h2>
                <h2 className="aqua">1.5%</h2>
                <h2 className="aqua">₹43,948</h2>
            </div>
            <div className="row">
                <h1>3</h1>
                <h2 className="white">Giotus</h2>
                <h2 className="white">₹28,58,659</h2>
                <h2 className="white">₹28,58,659/₹29,02,608</h2>
                <h2 className="aqua">1.5%</h2>
                <h2 className="aqua">₹43,948</h2>
            </div>
            <div className="row">
                <h1>4</h1>
                <h2 className="white">Colodax</h2>
                <h2 className="white">₹25,83,138</h2>
                <h2 className="white">₹25,58,659/₹29,02,608</h2>
                <h2 className="aqua">1.5%</h2>
                <h2 className="aqua">₹43,948</h2>
            </div>
            <div className="row">
                <h1>4</h1>
                <h2 className="white">WazirX</h2>
                <h2 className="white">₹28,58,659</h2>
                <h2 className="white">₹28,58,659/₹29,02,608</h2>
                <h2 className="red">1.5%</h2>
                <h2 className="red">₹43,948</h2>
            </div>
            <div className="row">
                <h1>5</h1>
                <h2 className="white">WazirX</h2>
                <h2 className="white">₹28,58,659</h2>
                <h2 className="white">₹28,58,659/₹29,02,608</h2>
                <h2 className="red">1.5%</h2>
                <h2 className="red">₹43,948</h2>
            </div>
        </div>
    )
}
export default Chart;