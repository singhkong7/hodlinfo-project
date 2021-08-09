import React from "react";
import "./price.css";
function Price()
{
    return(
        <div className="head">
            <div className="section ">
                <h4 className="per">0.57%</h4>
                <p>5 Mins</p>
            </div>
            <div className="section ">
                <h4 className="per">1.28%</h4>
                <p>1 Hour</p>
            </div>
            <div className="section ">
                <h1>₹28,58,659</h1>
                <p>Average BTC/INR net price including commission</p>
            </div>
            <div className="section ">
                <h4 className="per">8.84%</h4>
                <p>1 Day</p>
            </div>
            <div className="section ">
                <h4 className="per ">14.33%</h4>
                <p>7 Days</p>
            </div>
        </div>
    )
}
export default Price;