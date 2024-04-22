import React from "react";
import './style.css';
import Getotp from './Getotp.jsx';
import Validateotp from "./Validateotp.jsx";
import RegistrationDetails from "./RegistrationDetails.jsx";

const Registration = () => {
    return (
        <div className="registration-container">
            <div className="main">
                <div className="header" >
                    <span tabIndex={0}>x</span>
                </div>
                
                <div className="body">
                    <Getotp/>
                    {/* <Validateotp/>
                    <RegistrationDetails/> */}
                    
                </div>

                <div className="footer" >
                    <span>Shop 'Til You Drop…But Don't Cry</span>
                </div>
                {/* <div className="right">
                    <div className="title">
                        <h1>Elite Commerce Solutions</h1>
                    </div>

                    <div className="description">
                        <span>Shop 'Til You Drop…But Don't Cry</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Registration;