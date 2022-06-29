import React from "react";
import '../styles/home.css';
import logo from '../images/logo.png';

function Home(){    
    return(
        <>
            <div>
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src={logo}></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto text-center">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Events<span class="sr-only">(upcoming)</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Session</a>
          <a class="dropdown-item" href="#">Schedule</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">All about speakers</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Past events</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Awards</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Register</a>
      </li>
    </ul>
    
  </div>
</nav>

                <div class="jumbotron jumbotron-fluid bg-dark text-white">
                    <div class="container text-sm-center pt-5">
                        <h1 class="display-2">Full Stack Conf</h1>
                        <p class="lead">A One-day Conference About All Things JavaScript!.</p>
                        <div class="btn-group mt-4" role="group" aria-label="Callout buttons">
                            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#register">Register Now</button>
                            <a class="btn btn-light btn-lg" href="#speakers">See Speakers</a>
                        </div>
                    </div>
                </div>
        
                <div class="container pt-4">
                    <div id="about" class="row">
                        <div class="col-lg order-lg-2">
                            <h3 class="mb-4">About Full Stack Conf</h3>
                            <img class="mb-4 img-fluid rounded d-none d-sm-block" src="https://i.postimg.cc/gJJnvLfq/pdx.jpg" alt="Portland"/>
                            <p>The beautiful city of Portland, Oregon will be the host city for Full Stack Conf!</p>
                            <p>Explore the future of JavaScript with a lineup of industry professionals. Discover new techniques to advance your career as a web developer.</p>
                        </div>
                        <div class="col-lg order-lg-1">
                            <h3 class="mb-4">Expert Speakers</h3>
                            <p>Our expert speaker lineup was just announced, so don't wait too long before grabbing your tickets!</p>
                            <p>Want to meet the international JavaScript community and share skills with some of the world's top experts, hackers, and makers? Be the first to know what to expect for the future of JavaScript.</p>
                            <p>Full Stack Conf is committed to being inclusive and welcoming for everyone. We look forward to another intensive day of learning and sharing.</p>
                        </div>
                        <div class="col-lg order-lg-3">
                            <h3 class="mb-4">What You'll Learn</h3>
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action"><strong>MongoDB</strong>: NoSQL database</a>
                                <a href="#" class="list-group-item list-group-item-action"><strong>Express</strong>: Framework for Node</a>
                                <a href="#" class="list-group-item list-group-item-action"><strong>React</strong>: JavaScript library</a>
                                <a href="#" class="list-group-item list-group-item-action"><strong>Node.js</strong>: JavaScript environment</a>
                                <a href="#" class="list-group-item list-group-item-action"><strong>ES2015</strong>: Latest version of JavaScript</a>
                                <a href="#" class="list-group-item list-group-item-action"><strong>Babel</strong>: JavaScript compiler</a>
                            </div>
                        </div>
                    </div>
                    <h1 id="speakers" class="display-4 text-center my-5 text-muted">Speakers</h1>
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="card mb-3">
                                <img src="https://i.postimg.cc/sf5v5zLL/vivianne.png" class="card-img-top" alt="Vivianne"/>
                                <div class="card-body">
                                    <h4 class="card-title">Vivianne McVue</h4>
                                    <p class="card-text">Vivianne is a web developer and teacher who is passionate about building scalable, data-driven web apps, especially ones that address old problems with new tech!</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card mb-3">
                                <img src="https://i.postimg.cc/wj4v9jt1/nodestradamus.png" class="card-img-top" alt="Nodestradamus"/>
                                <div class="card-body">
                                    <h4 class="card-title">NodeStradamus</h4>
                                    <p class="card-text">"NodeStra" is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card mb-3">
                                <img src="https://i.postimg.cc/zBKXwwxh/robbie.png" class="card-img-top" alt="Robbie"/>
                                <div class="card-body">
                                    <h4 class="card-title">Robbie Redux</h4>
                                    <p class="card-text">Robbie is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing barriers to learning code.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card mb-3">
                                <img src="https://i.postimg.cc/PxWTvXqz/ecma.png" class="card-img-top" alt="Ecma"/>
                                <div class="card-body">
                                    <h4 class="card-title">Ecma Scriptnstuff</h4>
                                    <p class="card-text">Ecma found her passion for programming and teaching over 15 years ago. She is excited to introduce you to all of the wonders of JavaScript.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card mb-3">
                                <img src="https://i.postimg.cc/j2RKzpwV/jay.png" class="card-img-top" alt="Jay"/>
                                <div class="card-body">
                                    <h4 class="card-title">Jay Query</h4>
                                    <p class="card-text">Jay is a developer, author of CSS: The Missing Manual, JavaScript &amp; jQuery: The Missing Manual, and web development teacher.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card mb-3">
                                <img src="https://i.postimg.cc/Wp7s21Cs/json.png" class="card-img-top" alt="Json"/>
                                <div class="card-body">
                                    <h4 class="card-title">Json Babel</h4>
                                    <p class="card-text">All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 id="schedule" class="display-4 text-center my-5 text-muted">Schedule</h1>

                    <ul class="list-group">
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between">
                            <h5 class="mb-1">Keynote: Internet of Things</h5>
                            <span class="badge badge-pill badge-info p-2">9:00am</span>
                            </div>
                            <p class="mb-1">NodeStradamus</p>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between">
                            <h5 class="mb-1">React Basics</h5>
                            <span class="badge badge-pill badge-info p-2">10:00am</span>
                            </div>
                            <p class="mb-1">Vivianne McVue</p>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between">
                            <h5 class="mb-1">Hey, Mongo!</h5>
                            <span class="badge badge-pill badge-info p-2">11:00am</span>
                            </div>
                            <p class="mb-1">Jay Query</p>
                        </li>
                        <li class="list-group-item list-group-item-success">
                            <div class="d-flex justify-content-between">
                            <h5 class="mb-1">Lunch</h5>
                            <span class="badge badge-pill badge-info p-2">12:00pm</span>
                            </div>
                            <p class="mb-1">Free pizza for everyone!</p>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between">
                            <h5 class="mb-1">Introducing ES2015</h5>
                            <span class="badge badge-pill badge-info p-2">1:00pm</span>
                            </div>
                            <p class="mb-1">Ecma Scriptnstuff</p>
                        </li> 
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between">
                            <h5 class="mb-1">Getting Started With Redux</h5>
                            <span class="badge badge-pill badge-info p-2">2:00pm</span>
                            </div>
                            <p class="mb-1">Robbie Redux</p>
                        </li> 
                        <li class="list-group-item">
                            <div class="d-flex justify-content-between">
                            <h5 class="mb-1">What's Babel?</h5>
                            <span class="badge badge-pill badge-info p-2">3:00pm</span>
                            </div>
                            <p class="mb-1">Json Babel</p>
                        </li>        
                    </ul>

                    <button type="button" class="btn btn-dark btn-lg d-block mx-auto my-5" data-toggle="modal" data-target="#register">Don't Miss Out, Register Now</button>

                    <hr/>

                    <div class="row py-4 text-muted">
                        <div class="col-md col-xl-5">
                            <p><strong>About Treehouse</strong></p>
                            <p>Treehouse brings affordable technology education to people everywhere to help them achieve their dreams and change the world.</p>
                        </div>
                        <div class="col-md col-xl-5 ml-auto">
                            <p><strong>Stay up-to-date on Full Stack Conf</strong></p>
                            <div class="input-group">
                            <input type="text" class="form-control" placeholder="Email"/>
                            <span class="input-group-btn">
                                <button class="btn btn-primary" type="button">Sign up</button>
                            </span>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <div class="row py-3">
                        <div class="col-md-7"> 
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Community</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Tracks</a>
                                </li>
                                <li class="nav-item">
                                    <div class="btn-group dropup">
                                    <button type="button" class="btn btn-outline-secondary">Other Confs</button>
                                    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">CSS Conf</a>
                                        <a class="dropdown-item" href="#">Python Conf</a>
                                        <a class="dropdown-item" href="#">Java Conf</a>
                                        <a class="dropdown-item" href="#">Swift</a>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md text-md-right">
                            <small>&copy; 2017 Full Stack Conf</small>
                        </div>
                    </div>
                </div>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header bg-dark text-white">
                            <h5 class="modal-title" id="exampleModalLabel">Register for Full Stack Conf</h5>
                            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Hurry!</strong> Early bird registration ends in two days.
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <h5 class="mb-4">Basic Info</h5>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name"/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email"/>
                                </div>
                                <div class="form-group">
                                    <label for="role">Job Role:</label>
                                    <select name="custom-select form-control" id="role">
                                    <option value="full stack js developer">Full Stack JavaScript Developer</option>
                                    <option value="front end developer">Front End Developer</option>
                                    <option value="back end developer">Back End Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="student">Student</option>
                                    </select>
                                </div>
                                <hr class="my-4"/>

                                <h5 class="mb-4">Which Topics Interest You Most?</h5> 
                                <div class="form-check">
                                    <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1"></input>
                                    <label class="custom-control-label" for="customCheck1">JavaScript Frameworks</label>
                                    </div>
                                </div>
                                <div class="form-check">
                                    <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                    <label class="custom-control-label" for="customCheck1">JavaScript Libraries</label>
                                    </div>
                                </div>
                                <div class="form-check">
                                    <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                    <label class="custom-control-label" for="customCheck1">Node.js</label>
                                    </div>
                                </div>
                                <div class="form-check">
                                    <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                    <label class="custom-control-label" for="customCheck1">Build Tools</label>
                                    </div>
                                </div>
                                <div class="form-check">
                                    <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                    <label class="custom-control-label" for="customCheck1">ES2015</label>
                                    </div>
                                </div>
                                <hr class="mb-4"/>

                                <h5 class="mb-4">Payment Info</h5>
                                <div class="form-row">
                                    <div class="col-lg-6 form-group">
                                        <label for="cc-num">Card Number:</label>
                                        <input class="form-control" id="cc-num" type="text"/>
                                    </div>
                                    <div class="col-lg form-group">
                                        <label for="zip">Zip Code:</label>
                                        <input class="form-control" id="zip" type="text"/>
                                    </div>                        
                                    <div class="col-lg form-group">
                                        <label for="cvv">CVV:</label>
                                        <input class="form-control" id="cvv" type="text"/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <label class="col-lg-12">Expiration Date:</label>
                                    <div class="form-group col-lg-8">
                                        <select class="custom-select form-control" id="exp-month">
                                            <option value="1">1 - January</option>
                                            <option value="2">2 - February</option>
                                            <option value="3">3 - March</option>
                                            <option value="4">4 - April</option>
                                            <option value="5">5 - May</option>
                                            <option value="6">6 - June</option>
                                            <option value="7">7 - July</option>
                                            <option value="8">8 - August</option>
                                            <option value="9">9 - September</option>
                                            <option value="10">10 - October</option>
                                            <option value="11">11 - November</option> 
                                            <option value="12">12 - December</option>
                                        </select> 
                                    </div>
                                    <div class="form-group col-lg">
                                        <select class="custom-select form-control" id="exp-year">
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                        </select>  
                                    </div>
                                </div>
                                <hr class="mb-4"/>

                                <button type="submit" class="btn btn-primary btn-large">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;