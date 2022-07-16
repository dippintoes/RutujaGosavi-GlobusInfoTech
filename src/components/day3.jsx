import React from "react";
import "../styles/day.css";
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';


function Day3(){
    return(
        <>
            <div class="container-fluid mainhero">
                <div class="box">
                    <p className="text-center fw-400">Day 3 - <time>July 16, 2022</time></p>
                </div>
                <hr/>

                <div className="planery1">
                    <h2 class="plasess">Awarding Ceremony - <time>April 30, 2022</time></h2>
                    <iframe width="560" height="315" class="responsive-youtube"  src="https://www.youtube.com/embed/OjXkeHHPTzQ" frameborder="0" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="program">
                        <h2 class="plaprog">Programme</h2>
                        
                        <div class="container">                            
                            <ul class="timeline1">
                                <li><div class="tldate">Awarding Ceremony</div></li>
                                
                                <li>
                                <div class="tl-circ"></div>
                                <div class="timeline1-panel">
                                    <div class="tl-heading">
                                    <h4>BEST PAPER</h4>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>To be awarded by</small></p>
                                    </div>
                                    <div class="tl-body">
                                    <p>Sr. Editha S. Zerna, OSA, PhD University President, LCUP</p>
                                    </div>
                                </div>
                                </li>
                                
                                <li class="timeline1-inverted">
                                <div class="tl-circ"></div>
                                <div class="timeline1-panel">
                                    <div class="tl-heading">
                                    <h4>BEST PRESENTERS (Per Parallel Session)</h4>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> To be awarded by</small></p>
                                    </div>
                                    <div class="tl-body">
                                    <p>Sr. Editha S. Zerna, OSA, PhD University President, LCUP</p>
                                    </div>
                                </div>
                                </li>
                                
                                <li><div class="tldate">Summary Report</div></li>
                                
                                <li>
                                <div class="tl-circ"></div>
                                <div class="timeline1-panel">
                                    <div class="tl-heading">
                                    
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 3/22/2014</small></p>
                                    </div>
                                    <div class="tl-body">
                                    <p>Dr. Jocelyn Hipona Dean, College of Allied Medical Professions, LCUP Conference Convenor</p>
                                    </div>
                                </div>
                                </li>
                                <li class="timeline1-inverted">
                                <div class="timeline1-panel">
                                    <div class="tl-heading">
                                    <h4></h4>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>3/16/2014</small></p>
                                    </div>
                                    <div class="tl-body">
                                    <p>Rutuja Gosavi - CEO Pradigm Pvt. Ltm.</p>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div class="tl-circ"></div>
                                <div class="timeline1-panel">
                                    <div class="tl-heading">
                                    <h4>Future Plans</h4>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>3/03/2014</small></p>
                                    </div>
                                    <div class="tl-body">
                                    <p>Sr. Editha S. Zerna, OSA, PhD University President, LCUP</p>
                                    </div>
                                </div>
                                </li>
                                {/*
                                <li>
                                <div class="timeline1-panel noarrow">
                                    <div class="tl-heading">
                                    <h4>Secondary Timeline Box</h4>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 3/01/2014</small></p>
                                    </div>
                                    <div class="tl-body">
                                    <p>This might be a follow-up post with related info. Maybe we include some extra links, tweets, user comments, photos, etc.</p>
                                    </div>
                                </div>
                                </li>*/}
                                
                                <li><div class="tldate">Words of gratitude</div></li>
                                
                                <li class="timeline1-inverted">
                                <div class="tl-circ"></div>
                                <div class="timeline1-panel">
                                    <div class="tl-heading">
                                    {/*<h4>The Winter Months</h4>*/}
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>22:00 PM</small></p>
                                    </div>
                                    <div class="tl-body">
                                    <p>Dr. Janet R. Valdez Conference Host</p>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div class="tl-circ"></div>
                                <div class="timeline1-panel">
                                    <div class="tl-heading">
                                    <h4>Conclusion</h4>
                                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>01:30 PM</small></p>
                                    </div>
                                    <div class="tl-body">
                                    <p>Sr. Editha S. Zerna, OSA, PhD University President, LCUP</p>
                                    </div>
                                </div>
                                </li>
                            </ul>
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
        </>  
    );
}

export default Day3;