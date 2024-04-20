import React from "react";

const RegistrationDetails = () =>{
    return(
        <div className="inputfield-container">  
             <div className="inputTextField">
                <label for = "phone">Phone Number</label>
                <input className="phone" value = "97638273827" />
            </div>
            
            <div className="inputTextField">
                <label for = "firstname">First Name</label>
                <input type="text" className="firstname"/>
            </div>

            <div className="inputTextField">
            <label for = "lastname">Last Name</label>
                <input type="text" className="lastname"/>
            </div>

            <div className="inputTextField">
                <label for = "email">Email Id</label>
                <input type = "text" className="email"/>
            </div>
            
            <div className="inputTextField">
                <label for = "gender">Gender</label>
                <div className="gender">
                    <input type="radio" id="male" name="gender" value="Male"/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="Female"/>
                    <label for="female">Female</label>
                </div>
            </div>

            <div className="buttonField">
                    <button>Save Details</button>
            </div>
        </div>

    );
};

export default RegistrationDetails;