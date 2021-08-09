import React from "react";
import "./button.css";
import Dropdown from 'react-bootstrap/Dropdown';
function Button()
{
    return(
        <div className="section1">
            <div className="dropdown">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        INR
                    </Dropdown.Toggle>

                    <div className="dropdown-menu">
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">INR</Dropdown.Item>
                        </Dropdown.Menu>
                    </div>
                </Dropdown>
            </div>
            <div className="dropdown">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        BTC
                    </Dropdown.Toggle>
                    <div className="dropdown-menu">
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">BTC</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">ETH</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">USDT</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">XRP</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">TRX</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">DASH</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">ZEC</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">XEM</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">IOST</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">WIN</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">BTT</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">WRX</Dropdown.Item>
                        </Dropdown.Menu>
                    </div>
                </Dropdown>
            </div>
            <button type="button" className="dropdown">BUY BTC</button>
        </div>
    );

}
export default Button;