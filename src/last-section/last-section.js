import React from 'react';
import "./last-section.css";
function LastSection() {
    return (
        <div className="footer">
            <hr 
                color="grey"
                height="10"
                width="100%"
            />
            <div className="base">
                <h3>Copyright©2019</h3>
                <h3>Hodllnfo.com</h3>
                <div className="new">
                    <h3>Developed By</h3>
                    <h3 className="alpha">QuadBtech</h3>
                </div>
                <h3>Support</h3>
            </div>
            <button className="end">Add hodlinfo to home screen</button>
        </div>
    )
}

export default LastSection;