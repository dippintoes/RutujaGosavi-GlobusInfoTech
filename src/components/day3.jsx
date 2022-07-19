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
            <div class="container-fluid pt-2">
                <div class="section5" id="newsletter">
                    <section>
                        <h1 class="title inline-photo2 show-on-scroll2">Subscribe to our newsletter</h1>
                        <p class="inline-photo show-on-scroll">Get latest news regarding upcoming conferences, stay in touch... </p>
                    </section>
                    <section>
                    <button type="button" class="btn btn2 p-3 btn-light btn-rounded">Subscribe</button>
                    </section>
                </div>
                <footer class="footer_area section_padding_130_0" id="footer">
                        <div class="container">
                            <div class="row">
                            <div class="col-12 col-sm-6 col-lg-4">
                                <div class="single-footer-widget section_padding_0_130">
                                <div class="footer-logo mb-3"></div>
                                <p> INTERNATIONAL RESEARCH CONFERENCE</p>
                                <div class="copywrite-text mb-5">
                                    <p class="mb-0">2ND LCUP - GE&RA</p>
                                </div>
                                <div class="footer_social_area"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><FaFacebook></FaFacebook></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Linkedin"><FaLinkedin></FaLinkedin></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><FaInstagram></FaInstagram></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><FaTwitter></FaTwitter></a></div>
                                </div>
                            </div>
                              <div class="col-12 col-sm-6 col-lg">
                                <div class="single-footer-widget section_padding_0_130">
                                  <h5 class="widget-title">About</h5>
                                  <div class="footer_menu">
                                    <ul>
                                    <li><a href="/#mainabout">About Us</a></li>
                                    <li><a href="/#speakers">Speakers</a></li>
                                    <li><a href="#">Terms &amp; Policy</a></li>
                                    <li><a href="#">Community</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                              <div class="col-12 col-sm-6 col-lg">
                                <div class="single-footer-widget section_padding_0_130">
                                <h5 class="widget-title">Support</h5>
                                  <div class="footer_menu">
                                    <ul>
                                    <li><a href="#">Help</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Term &amp; Conditions</a></li>
                                    <li><a href="#">Help &amp; Support</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg">
                                <div class="single-footer-widget section_padding_0_130">
                                  <h5 class="widget-title">Contact</h5>
                                <div class="footer_menu">
                                    <ul>
                                    <li><a href="#">Call Centre</a></li>
                                    <li><a href="#">Email Us</a></li>
                                    <li><a href="#">Term &amp; Conditions</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </footer>
            </div>
        </>  
    );
}

export default Day3;