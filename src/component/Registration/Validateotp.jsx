import React from "react";

const Validateotp = () =>{
    return(
        <>
            <div className="heading">
                        <h1>Sign Up</h1>
            </div>
            <div className="phoneinfo">
                <span>Please enter the OTP sent to 9164782348.</span>
                <a href="#" className="changenumber">Change?</a>
            </div>
            <div className="inputfield-container">
                <div className="inputTextField">
                    <input type="text" className="otp" placeholder="OTP"/>
                </div>
                <div className="buttonField">
                    <button>Validate OTP</button>
                </div>
            </div>
        </>
    );
};

export default Validateotp;