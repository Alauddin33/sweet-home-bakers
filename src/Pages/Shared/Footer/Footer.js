import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-600 text-primary-content">
            <div>
                <img width="50" height="50" className="inline-block" src={logo} alt="" />
                <p className="font-bold">
                    Sweet Home Bakers. <br />Providing great taste since 1999
                </p>
                <p>Copyright © 2025 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" ><FaFacebook /> </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" ><FaInstagram /> </a>
                    <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target="_blank" rel="noopener noreferrer" ><FaLinkedin /> </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;