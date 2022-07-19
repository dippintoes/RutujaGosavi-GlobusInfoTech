import React from "react";
import '../styles/header.css';
import logo from '../images/logo.png';

function Header(){    
    return(
        <>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-0 py-3" id="navbar">
                    <div class="container-xl">
                        <a class="navbar-brand" href="#">
                        <img src={logo} class="h-12" alt="..."/>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav mx-lg-auto">
                            <a class="nav-item nav-link active" href="/" aria-current="page">Home</a>
                            <a class="nav-item nav-link" href="/#mainabout">About</a>
                            <a class="nav-item nav-link" href="/#speakers">Speakers</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Schedule</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/schedule/day1">Day 1</a>
                                    <a class="dropdown-item" href="/schedule/day2">Day 2</a>
                                    <a class="dropdown-item" href="/schedule/day3">Day 3(Awarding ceremony)</a>
                                </div>
                            </div>          
                            <a class="nav-item nav-link" href="#footer">Contact</a>
                        </div>
                        
                        <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                            <a href="/register" type="button" class="btn p-2 btn-sm btn-light w-full btn-rounded w-lg-auto">
                            Register
                            </a>
                        </div>
                        </div>
                    </div>
            </nav>
        </>
  );
}

export default Header;