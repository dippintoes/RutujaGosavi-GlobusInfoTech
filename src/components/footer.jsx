import React from "react";
import '../styles/footer.css';
import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';

function Footer(){
    return(
        <>
            <div class="section5">
                    <section>
                        <h1 class="title inline-photo2 show-on-scroll2">Subscribe to our newsletter</h1>
                        <p class="inline-photo show-on-scroll">Get latest news regarding upcoming conferences, stay in touch... </p>
                    </section>
                    <section>
                        <button class="btn2">Subscribe</button>
                    </section>
                </div>
                <footer>
                    <div class="footer" id="footer">
                        <section class="text-secondary">
                            <h3>2ND LCUP - GE&RA</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </section>
                        <section>
                            <h3>LINKS</h3>
                            <a href="#">Home</a>
                            <a href="#">About Us</a>
                            <a href="#">Speakers</a>
                            <a href="#">Schedule</a>
                            <a href="#">Contact Us</a>
                        </section>
                        <section>
                            <h3>OTHER</h3>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Cookie Policy</a>
                        </section>
                        <section>
                        <h3>ANY QUESTIONS?</h3>
                            <a href="emailto:support@lcupgenra.com"><span><i class="fa fa-envelope"></i></span><span>support@lcupgenra.com</span></a>
                            <a href="tel:xxxxxxxxx"><span><i class="fa fa-phone"></i></span><span>(+x)-xxx-xxxx-xxxxx</span></a>
                            <div class="icons d-flex flex-row justify-content-around">
                                <a href="#"><FaFacebook></FaFacebook></a>
                                <a href="#"><FaLinkedin></FaLinkedin></a>
                                <a href="#"><FaInstagram></FaInstagram></a>
                                <a href="#"><FaTwitter></FaTwitter></a>
                            </div>
                        </section>
                    </div>
                </footer>
                <div class="sub-footer" id="foot">
                Copyright ©2022 All rights reserved | 2ND LCUP - GE&RA
                </div>
        </>
    )
}

export default Footer;