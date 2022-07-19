import React from "react";
import "../styles/day.css";
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';

function Day1(){
    return(
        <>
            <div class="container-fluid pt-2 mainhero">
                <div class="box">
                    <p className="text-center fw-400">Day 1 - <time>15 April 2022</time></p>
                </div>
                <hr/>
                <div className="planery1">
                    <h2 class="plasess">Planery Session 1 - <time>April 29, 2022</time></h2>
                    <iframe width="560" height="315" class="responsive-youtube"  src="https://www.youtube.com/embed/OjXkeHHPTzQ" frameborder="0" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="container-fluid pt-2">
                    <div className="program">
                        <h2 class="plaprog">Programme</h2>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-body">
                                        <h6 class="card-title fs-3 text-center mb-4">Timeline</h6>
                                            <div id="content">
                                                <ul class="timeline">
                                                    <li class="event" data-date="12:30 - 1:00pm">
                                                        <h3>Registration</h3>
                                                        <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                                                    </li>
                                                    <li class="event" data-date="2:30 - 4:00pm">
                                                        <h3>Opening Ceremony</h3>
                                                        <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP &amp; Busta Rhymes as an opening show.</p>
                                                    </li>
                                                    <li class="event" data-date="5:00 - 8:00pm">
                                                        <h3>Main Event</h3>
                                                        <p>This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!</p>
                                                    </li>
                                                    <li class="event" data-date="8:30 - 9:30pm">
                                                        <h3>Closing Ceremony</h3>
                                                        <p>See how is the victor and who are the losers. The big stage is where the winners bask in their own glory.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="container-fluid pt-2">
                    <div className="program2">
                        <h2 class="plaprog">Parallel Session 1</h2>

                        <h6 class="plaprog2 d-flex flex-row justify-content-center gap-5 mb-5"><div><a className="p-3">Presenter's Link</a></div><div><a className="p-3">Viewer's Link</a></div><div><a className="p-3">Evaluation Link</a></div></h6>

                        <h6 class="plaprog3 d-flex flex-row justify-content-center gap-5 mb-5"><div><i>Moderator: Prof. Ma. Elizabeth Medina</i></div><div><i>Coordinator: Mr. Elmer John Gonzalez</i></div></h6>

                        <div class="container mt-5 activities">
                            <div class="row mt-5">   
                                <div class="col-lg-6">
                                <div class="recent-activities card">
                                    <div class="card-close">
                                    <div class="dropdown">
                                        <button type="button" id="closeCard8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-ellipsis-v"></i></button>
                                        <div aria-labelledby="closeCard8" class="dropdown-menu dropdown-menu-right has-shadow"><a href="#" class="dropdown-item remove"> <i class="fa fa-times"></i>Close</a><a href="#" class="dropdown-item edit"> <i class="fa fa-gear"></i>Edit</a></div>
                                    </div>
                                    </div>
                                    
                                    <div class="card-body no-padding">
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="recent-head text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="recent-head text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="recent-head text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-lg-6">
                                <div class="recent-activities card">
                                    <div class="card-close">
                                    <div class="dropdown">
                                        <button type="button" id="closeCard8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-ellipsis-v"></i></button>
                                        <div aria-labelledby="closeCard8" class="dropdown-menu dropdown-menu-right has-shadow"><a href="#" class="dropdown-item remove"> <i class="fa fa-times"></i>Close</a><a href="#" class="dropdown-item edit"> <i class="fa fa-gear"></i>Edit</a></div>
                                    </div>
                                    </div>
                                    
                                    <div class="card-body no-padding">
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="recent-head text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="recent-head text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="container-fluid pt-2">
                    <div className="program3">
                        <h2 class="plaprog">Parallel Session 2</h2>

                        <h6 class="plaprog2 d-flex flex-row justify-content-center gap-5 mb-5"><div><a className="p-3">Presenter's Link</a></div><div><a className="p-3">Viewer's Link</a></div><div><a className="p-3">Evaluation Link</a></div></h6>

                        <h6 class="plaprog3 d-flex flex-row justify-content-center gap-5 mb-5"><div><i>Moderator: Prof. Ma. Elizabeth Medina</i></div><div><i>Coordinator: Mr. Elmer John Gonzalez</i></div></h6>

                        <div class="container mt-5 activities">
                            <div class="row mt-5">   
                                <div class="col-lg-6">
                                <div class="recent-activities card">
                                    <div class="card-close">
                                    <div class="dropdown">
                                        <button type="button" id="closeCard8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-ellipsis-v"></i></button>
                                        <div aria-labelledby="closeCard8" class="dropdown-menu dropdown-menu-right has-shadow"><a href="#" class="dropdown-item remove"> <i class="fa fa-times"></i>Close</a><a href="#" class="dropdown-item edit"> <i class="fa fa-gear"></i>Edit</a></div>
                                    </div>
                                    </div>
                                    
                                    <div class="card-body no-padding">
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="recent-head text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="recent-head text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="recent-head text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-lg-6">
                                <div class="recent-activities card">
                                    <div class="card-close">
                                    <div class="dropdown">
                                        <button type="button" id="closeCard8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-ellipsis-v"></i></button>
                                        <div aria-labelledby="closeCard8" class="dropdown-menu dropdown-menu-right has-shadow"><a href="#" class="dropdown-item remove"> <i class="fa fa-times"></i>Close</a><a href="#" class="dropdown-item edit"> <i class="fa fa-gear"></i>Edit</a></div>
                                    </div>
                                    </div>
                                    
                                    <div class="card-body no-padding">
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="recent-head text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="recent-head text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="row">
                                        <div class="col-4 date-holder text-right">
                                            
                                            <div class="date"> Heritage and Arts for Tourism and Creative Industries (HATCI)</div>
                                        </div>
                                        <div class="col-8 content">
                                            <h5 className="text-primary">Villanueva, Fe Corazon

Castro, Carl Francis</h5>
                                            <p>Tourist Spots and Tourism Businesses in San Miguel De Mayumo, Bulacan During Pandemic: Status, Challenges, and Sustainability</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            {/*footer */}
            <div class="container-fluid pt-2">
                <div class="section5">
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

export default Day1;