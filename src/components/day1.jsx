import React from "react";
import "../styles/day.css";
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';

function Day1(){
    return(
        <>
            <div class="container-fluid mainhero">
                <div class="box">
                    <p className="text-center fw-400">Day 1 - <time>15 April 2022</time></p>
                </div>
                <hr/>

                <div className="planery1">
                    <h2 class="plasess">Planery Session 1 - <time>April 29, 2022</time></h2>
                    <iframe width="560" height="315" class="responsive-youtube"  src="https://www.youtube.com/embed/OjXkeHHPTzQ" frameborder="0" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="program">
                        <h2 class="plaprog">Planery Session 1 - <time>April 29, 2022</time></h2>
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
        </>  
    );
}

export default Day1;