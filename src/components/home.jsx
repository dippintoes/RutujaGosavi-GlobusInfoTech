import React from "react";
import '../styles/home.css';
import conference from '../images/conference.png';
import { FaCalendarDay,FaCalendarAlt,FaCalendarWeek,FaPlus,FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaPinterest} from 'react-icons/fa';
import emp from "../images/emp.png";

function Home(){    
    return(
        <>
            <div>

                <div class="p-10 bg-surface-secondary hero">
                    <div class="Container">
                        <div class="header">
                            <span class="tagline">2ND LCUP - GE&RA</span><br/><br/><br/> <span  class="tagline"> INTERNATIONAL RESEARCH CONFERENCE</span>
                            <p>Internationalization and Extension of Educational Institutions Through Innovative and Emancipatory Researches Amidst the Current Challenges of Globalization and Technological Divide</p>
                        </div>
                    </div>
                </div>
        
                <div class="container-fluid pt-2 about">
                {/* about*/}
                
                    <div class="row" id="mainabout">
                        <div class="col-8" ><h1 class="display-4 my-5 text-danger">About the event</h1><hr/><h4 className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.</h4><p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliq enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p><div class="d-flex flex-row gap-3 mt-5">
                        <button className="bg-info p-3 fs-5 mt-3">Buy a ticket</button><br/><button className="bg-secondary p-3 fs-5 mt-3">Read more</button></div></div>
                        <div class="col-4 mb-3" id="about"><img src={conference} width="200px" height="350px"/></div>
                    </div>

                {/* speakers*/}

                    <div class="our-team" id="speakers">
                        <div class="container" >
                            <div class="row">
                                <div class="col-12">
                                <h2 class="display-4 text-center text-light">Keynote speakers</h2><hr/>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <div class="box-bg">
                                    <div class="client-img">
                                        <img src={emp} class="img-fluid"/>
                                    </div>
                                    <div class="details">
                                        <h4 class="text-center">Your Name</h4>
                                        <h6 class="text-center">Web Designer</h6>
                                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore</p>
                                        <a href="#">Read More</a>
                                    </div>
                                    <div class="social-links">
                                        <h4 class="text-center">Get connected</h4>
                                        <ul>
                                        <li><a href="#"><FaFacebook></FaFacebook></a></li>
                                        <li><a href="#"><FaInstagram></FaInstagram></a></li>
                                        <li><a href="#"><FaLinkedin></FaLinkedin></a></li>
                                        <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                        <li><a href="#"><FaPinterest></FaPinterest></a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-4">
                                    <div class="box-bg">
                                    <div class="client-img">
                                        <img src={emp} class="img-fluid"/>
                                    </div>
                                    <div class="details">
                                        <h4 class="text-center">Your Name</h4>
                                        <h6 class="text-center">Web Developer</h6>
                                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore</p>
                                        <a href="#">Read More</a>
                                    </div>
                                    <div class="social-links">
                                        <h4 class="text-center">Get Connected!</h4>
                                        <ul>
                                        <li><a href="#"><FaFacebook></FaFacebook></a></li>
                                        <li><a href="#"><FaInstagram></FaInstagram></a></li>
                                        <li><a href="#"><FaLinkedin></FaLinkedin></a></li>
                                        <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                        <li><a href="#"><FaPinterest></FaPinterest></a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-4">
                                    <div class="box-bg">
                                    <div class="client-img">
                                        <img src={emp} class="img-fluid"/>
                                    </div>
                                    <div class="details">
                                        <h4 class="text-center">Your Name</h4>
                                        <h6 class="text-center">Graphic Designer</h6>
                                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore</p>
                                        <a href="#">Read More</a>
                                    </div>
                                    <div class="social-links">
                                        <h4 class="text-center">Get Connected!</h4>
                                        <ul>
                                        <li><a href="#"><FaFacebook></FaFacebook></a></li>
                                        <li><a href="#"><FaInstagram></FaInstagram></a></li>
                                        <li><a href="#"><FaLinkedin></FaLinkedin></a></li>
                                        <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                        <li><a href="#"><FaPinterest></FaPinterest></a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-4">
                                    <div class="box-bg">
                                    <div class="client-img">
                                        <img src={emp} class="img-fluid"/>
                                    </div>
                                    <div class="details">
                                        <h4 class="text-center">Your Name</h4>
                                        <h6 class="text-center">PHP Developer</h6>
                                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore</p>
                                        <a href="#">Read More</a>
                                    </div>
                                    <div class="social-links">
                                        <h4 class="text-center">Get Connected!</h4>
                                        <ul>
                                        <li><a href="#"><FaFacebook></FaFacebook></a></li>
                                        <li><a href="#"><FaInstagram></FaInstagram></a></li>
                                        <li><a href="#"><FaLinkedin></FaLinkedin></a></li>
                                        <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                        <li><a href="#"><FaPinterest></FaPinterest></a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-4">
                                    <div class="box-bg">
                                    <div class="client-img">
                                        <img src={emp} class="img-fluid"/>
                                    </div>
                                    <div class="details">
                                        <h4 class="text-center">Your Name</h4>
                                        <h6 class="text-center">Web Designer</h6>
                                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore</p>
                                        <a href="#">Read More</a>
                                    </div>
                                    <div class="social-links">
                                        <h4 class="text-center">Get Connected!</h4>
                                        <ul>
                                        <li><a href="#"><FaFacebook></FaFacebook></a></li>
                                        <li><a href="#"><FaInstagram></FaInstagram></a></li>
                                        <li><a href="#"><FaLinkedin></FaLinkedin></a></li>
                                        <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                        <li><a href="#"><FaPinterest></FaPinterest></a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-4">
                                    <div class="box-bg">
                                    <div class="client-img">
                                        <img src={emp} class="img-fluid"/>
                                    </div>
                                    <div class="details">
                                        <h4 class="text-center">Your Name</h4>
                                        <h6 class="text-center">Graphic Designer</h6>
                                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore</p>
                                        <a href="#">Read More</a>
                                    </div>
                                    <div class="social-links">
                                        <h4 class="text-center">Get Connected!</h4>
                                        <ul>
                                        <li><a href="#"><FaFacebook></FaFacebook></a></li>
                                        <li><a href="#"><FaInstagram></FaInstagram></a></li>
                                        <li><a href="#"><FaLinkedin></FaLinkedin></a></li>
                                        <li><a href="#"><FaTwitter></FaTwitter></a></li>
                                        <li><a href="#"><FaPinterest></FaPinterest></a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* schedule*/}

                    <div class="container schedule" id="schedule">
                    <h1 class="display-4 text-center mt-5 mb-4 text-warning">Event <span class="mt-3 text-success">Schedule</span></h1><hr/>
                        <div class="row">
                        <div class="col-md-4 col-sm-12 col-xsx-12">
                                <div class="serviceBox">
                                    <div class="service-icon">
                                        <span><FaCalendarDay></FaCalendarDay></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 class="title">Day 1</h3>
                                        <p class="description"><time>15 April 2022</time>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliq enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                                        <a href="/schedule/day1" class="read-more fa fa-plus" data-toggle="tooltip" title="Read More"><FaPlus></FaPlus></a>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="col-md-4 col-sm-12 col-xsx-12">
                                <div class="serviceBox green">
                                    <div class="service-icon">
                                        <span><FaCalendarAlt></FaCalendarAlt></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 class="title">Day 2</h3>
                                        <p class="description"><time>16 April 2022</time>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliq enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                                        <a href="/schedule/day2" class="read-more fa fa-plus" data-toggle="tooltip" title="Read More"><FaPlus></FaPlus></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-12 col-xsx-12">
                                <div class="serviceBox orange">
                                    <div class="service-icon">
                                        <span><FaCalendarWeek></FaCalendarWeek></span>
                                    </div>
                                    <div class="service-content">
                                        <h3 class="title">Day 3</h3>
                                        <p class="description"><time>17 April 2022</time>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliq enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                                        <a href="/schedule/day3" class="read-more fa fa-plus" data-toggle="tooltip" title="Read More"><FaPlus></FaPlus></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/*footer */}
                <div class="section5" id="newsletter">
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
                </div> 
            </div>
        </>
    );
}

export default Home;