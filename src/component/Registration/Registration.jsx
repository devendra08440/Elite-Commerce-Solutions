import React from "react";
import './style.css';
import Getotp from './Getotp.jsx';
import Validateotp from "./Validateotp.jsx";

const Registration = () => {
    return (
        <div className="registration-container">
            <div className="main">
                <div className="left">
                    <div className="heading">
                        <h1>Sign Up</h1>
                    </div>

                    <Getotp/>
                    {/* <Validateotp/> */}
                    
                </div>
                <div className="right">
                    <div className="title">
                        <h1>Elite Commerce Solutions</h1>
                    </div>

                    <div className="description">
                        <span>Shop 'Til You Drop…But Don't Cry</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;