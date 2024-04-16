import React from "react";
import './style.css';
import facebookIcon from '../../asset/icons/facebook.png';
import googlePlusIcon from '../../asset/icons/googlePlus.png';
import githubIcon from '../../asset/icons/github.png';
import linkedinIcon from '../../asset/icons/linkedin.png';

const Registration = () => {
    return (
        <div className="registration-container">
            <div className="main">
                <div className="left">
                    <div className="heading">
                        <h1>Sign Up</h1>
                    </div>

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
                        <span>or use your Email/ Phone to Register here </span>
                    </div>
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