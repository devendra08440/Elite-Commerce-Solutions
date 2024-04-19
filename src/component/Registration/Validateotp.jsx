import React from "react";

const Validateotp = () =>{
    return(
        <>
            <div className="phoneinfo">
                <span>Please enter the OTP sent to 9164782348.</span>
            </div>
            <div className="inputTextField">
                <input type="text" className="otp" placeholder="OTP"/>
            </div>
            <div className="buttonField">
                <button>Validate OTP</button>
            </div>
        </>
    );
};

export default Validateotp;