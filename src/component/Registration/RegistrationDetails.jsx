import React from "react";

const RegistrationDetails = () =>{
    return(
        <div className="inputfield-container">  
            <div className="inputTextField">
                <input className="phone" value = "97638273827" />
                <label htmlFor="">Phone Number</label> 
            </div>
            
            <div className="inputTextField">
                <input type="text" className="firstname" required/>
                <label htmlFor="">First Name</label>
            </div>

            <div className="inputTextField">
                <input type="text" className="lastname" required/>
                <label htmlFor="">Last Name</label>
            </div>

            <div className="inputTextField">
                <input type="text" className="email" required/>
                <label htmlFor="">Email</label>
            </div>
            
            {/* <div className="inputTextField">
                <input type="date" className="dob" required/>
                <label htmlFor="">Birthday</label>
            </div> */}
            
          {/*   <div className="inputTextField">
                <div className="gender">
                    <input type="radio" className="male"/>
                    <label for="male">Male</label>
                    <input type="radio" className="female"/>
                    <label for= "female">Female</label>
                </div>
            <label htmlFor="">Gender</label>
            </div> */}
            
            <div className="buttonField">
                <button>Save Details</button>
            </div>
        </div>

    );
};

export default RegistrationDetails;