import React from "react";
import facebookIcon from '../../asset/icons/facebook.png';
import googlePlusIcon from '../../asset/icons/googlePlus.png';
import githubIcon from '../../asset/icons/github.png';
import linkedinIcon from '../../asset/icons/linkedin.png';

const Getotp = () =>{
    return(
        <>
            <div className="signin-options">
                <ul>
                    <li className="list-item">
                        <a href="#"><img src={googlePlusIcon}/></a>
                    </li>
                    <li className="list-item">
                        <a href="#"><img src={facebookIcon}/></a>
                    </li>
                    <li className="list-item">
                        <a href="#"><img src={githubIcon}/></a>
                    </li>
                    <li className="list-item">
                        <a href="#"><img src={linkedinIcon}/></a>
                    </li>
                </ul>
            </div>
            <div className="helpText">
                <span>or use your Phone to Register here </span>
            </div>

            <div className="inputTextField">
                <select name="countrycode" id="countrycode">
                    <option value="India" selected>+91</option>
                    <option value="US">+1</option>
                </select>
                <input type="tel" className="phone" placeholder="Phone" maxLength={10}/>
                    {/* <label htmlFor="">Email</label>*/}
            </div>

            <div className="buttonField">
                <button>Get OTP</button>
            </div>
        </>
    );
};
export default Getotp;