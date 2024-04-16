import React from "react";
import './style.css';
import facebookIcon from '../../asset/icons/footer/facebook.png';
import instagramIcon from '../../asset/icons/footer/instagram.png';
import linkedinIcon from '../../asset/icons/footer/linkedin.png';
import twitterIcon from '../../asset/icons/footer/twitter.png';
import youtubeIcon from '../../asset/icons/footer/youtube2.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="contactUs">
                <hr/>
                <ul>
                    <li><a href=""><img src={facebookIcon} id="facebookIcon"/></a></li>
                    <li><a href=""><img src={instagramIcon} id="instagramIcon"/></a></li>
                    <li><a href=""><img src={youtubeIcon} id="youtubeIcon"/></a></li>
                    <li><a href=""><img src={twitterIcon} id="twitterIcon"/></a></li>
                    <li><a href=""><img src={linkedinIcon} id="linkedinIcon"/></a></li>
                </ul>
                <hr/>
            </div>

            <div className="title">
                <span>E-Commerce Solutions</span>
            </div>

            <div className="description">
                <span>Shop 'Til You Drop…But Don't Cry</span>
            </div>

            <div className="accessbility-links">
                <ul>
                    <hr/>
                    <li><a href="">Legal Stuff</a></li> <hr/>
                    <li><a href="">Privacy Policy</a></li> <hr/>
                    <li><a href="">Security</a></li> <hr/>
                    <li><a href="">Website Accessbility</a></li> <hr/>
                    <li><a href="">Manage Cookies</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;