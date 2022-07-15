import React from "react";
import '../styles/home.css';
import conference from '../images/conference.png';
import { FaCalendarDay,FaCalendarAlt,FaCalendarWeek} from 'react-icons/fa';

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
        
                <div class="container pt-2">
                {/* about*/}
                
                    <div class="row">
                        <div class="col-6 mb-3" id="about"><img className="mt-4" src={conference} width="200px" height="350px"/></div>
                        <div class="col-6"><h1 class="display-4 my-5 text-danger">About the event</h1><hr/><h4 className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.</h4><p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliq enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                        <button className="bg-info p-3 fs-5 mt-4">Buy a ticket</button><br/><button className="bg-secondary p-3 fs-5 mt-3">Read more</button></div>
                    </div>

                {/* speakers*/}

                    <div id="speakers">
                        <h1 class="display-4 text-center mb-5 text-light">Keynote speakers</h1><hr/>
                        <div class="row">
                            
                           
                        </div>
                    </div>

                {/* schedule*/}

                    <div class="container schedule" id="footer">
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
                                        <a href="Day.html" class="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
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
                                        <a href="WebDevelopment.html" class="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
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
                                        <a href="MobileAppDevelopment.html" class="read-more fa fa-plus" data-toggle="tooltip" title="Read More"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> 
            </div>
        </>
    );
}

export default Home;