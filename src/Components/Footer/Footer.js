import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footerbg border-top">
           <div className="container py-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="d-flex flex-column">
                        <h3 className="text-center">About Us</h3>
                        <p className="p-3">Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities) and gum disease and to maintain the overall health of your mouth.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex flex-column text-center menulink">
                        <h3 className="">Menu Link</h3>
                        <Link to="/about">About</Link>
                        <Link to="/teams">Teams</Link>
                        <Link to="/service">Services</Link>
                    </div>
                </div>
                <div className="col-md-4">
                <h3 className="d-flex text-center">Social Link</h3><br/>
                    <div className="d-flex flex-row text-center socialicon">
                        
                        <Link to="/about">
                            <img src="https://i.ibb.co/Pcz7NTK/facebook.png" alt="" />
                        </Link>
                        <Link to="/teams">
                            <img src="https://i.ibb.co/FgrgkrX/messenger.png" alt="" />
                        </Link>
                        <Link to="/service">
                            <img src="https://i.ibb.co/swLwjdk/twitter.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            </div> 
            <div className=" bgfooterbottom">
                <p>CopyRight by Rakib 2021</p>
            </div>
        </div>
    );
};

export default Footer;