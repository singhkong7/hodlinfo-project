import React,{ useEffect, useState } from 'react'
import "./header.css";
import { FaTelegram } from 'react-icons/fa';
import Toggle from "../toggle-button/toggle";
import ReactCountdownClock from "react-countdown-clock";
function Header() {
    const [second, setSecond] = useState(10)
    return (
        <div className="Header-section">
            <div className="clock">
            <ReactCountdownClock 
                seconds={second}
                color="aqua"
                alpha={0.9}
                size={40}
                onComplete={()=>setSecond(10)}
            />
            </div>
            <button type="button" className="button">
                <h4><FaTelegram /> Connect Telegram</h4>
            </button>
            <div className="enable -button">
                <Toggle />
            </div>
        </div>
    )
}

export default Header;
