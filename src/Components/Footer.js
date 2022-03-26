import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>MERN MANIACS</h3>
                                <p>
                                    205 Humber College Blvd <br />
                                    Etobicoke, ON M9W 5L7<br />
                                    Canada <br /><br />
                                    <strong>Phone:</strong> +1 (416) 675-3111<br />
                                    <strong>Email:</strong>  info@mernmaniacs.ca<br />
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="about">About us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Services</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="terms">Terms of service</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="privacy">Privacy policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Design</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Development</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Product Management</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Marketing</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Graphic Design</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="copyright-wrap d-md-flex py-4">
                        <div className="me-md-auto text-center text-md-start">
                            <div className="copyright">
                                &copy; Copyright <strong><span>Techie</span></strong>. All Rights Reserved
                            </div>
                            <div className="credits">
                                Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                            </div>
                        </div>
                        <div className="social-links text-center text-md-right pt-3 pt-md-0">
                            <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                            <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                            <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                            <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                            <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                        </div>
                    </div>

                </div>
            </footer>

            <Link to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
            {/* <div id="preloader"></div> */}
            {/* footer using link */}
      </>

  );
}
