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
            

            <div className="company-name">
                <div className="company">
                    Elite Commerce Solutions
                </div>
                <div className="seperator">|</div>
                <div className="phrase">
                    Shop 'Til You Drop…But Don't Cry
                </div>
            </div>

            <div className="copyright-info">
                © Copyright 2015 All rights reserved.
            </div>

        </div>
    );
};

export default Footer;