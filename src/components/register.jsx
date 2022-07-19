import React from "react";
import "../styles/register.css";
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';

function Register(){
    return(
        <>
            <div className="googlemap">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfVFnGXR98o_nmsNlz2efNwOAeAlwzftVTpgBJFfY67RqKJEA/viewform?embedded=true" width="860" height="591" frameborder="0" marginheight="19" marginwidth="0" title="Event registration form">Loading…</iframe>
            </div>

            {/*footer */}
            <div class="container-fluid pt-2">
                    <div class="section5" id="newsletter">
                        <section>
                            <h1 class="title inline-photo2 show-on-scroll2 mt-md-3">Subscribe to our newsletter</h1>
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

export default Register;