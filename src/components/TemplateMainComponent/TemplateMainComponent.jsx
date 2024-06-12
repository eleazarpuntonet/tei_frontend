import React from 'react';
import './TemplateMainComponent.css';
import { assets } from '../../assets';
import { Header, Navbar, Datos, InmueblesDestacados } from './components'

export const TemplateMainComponent = () => {
    return(
        <>
            {/* <Loader></Loader> */}
            {/* <Topbar></Topbar> */}
            <Navbar></Navbar>
            <Header></Header>




            {/* Inicio Modal Busqueda */}
            <div className="modal fade" id="searchModal" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{background: "rgba(9, 30, 62, .7)"}}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{maxWidth:"600px"}}>
                                <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"></input>
                                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Modal Busqueda */}

            <Datos></Datos>
            <InmueblesDestacados></InmueblesDestacados>

            {/* Inicio Abouts */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                                <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                            </div>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <div className="row g-0 mb-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px",height: "60px"}}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Call to ask any question</h5>
                                    <h4 className="text-primary mb-0">+012 345 6789</h4>
                                </div>
                            </div>
                            <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
                        </div>
                        <div className="col-lg-5" style={{minHeight:"500px"}}>
                            <div className="position-relative h-100">
                                <img src={assets.backgorund_image} className="position-absolute w-100 h-100 rounded wow zoomIn" alt="temporal" data-wow-delay="0.9s" style={{objectFit: "cover"}}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Abouts */}

            {/* Inicio Features */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                        <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                        <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="row g-5">
                                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                        <i className="fa fa-cubes text-white"></i>
                                    </div>
                                    <h4>Best In Industry</h4>
                                    <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                </div>
                                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                        <i className="fa fa-award text-white"></i>
                                    </div>
                                    <h4>Award Winning</h4>
                                    <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: "350px"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute __fitcover w-100 h-100 rounded wow zoomIn" alt="preview" data-wow-delay="0.1s" src={assets.backgorund_image}></img>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row g-5">
                                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <div className="bg-primary __60square rounded d-flex align-items-center justify-content-center mb-3">
                                        <i className="fa fa-users-cog text-white"></i>
                                    </div>
                                    <h4>Professional Staff</h4>
                                    <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                </div>
                                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <div className="bg-primary __60square rounded d-flex align-items-center justify-content-center mb-3">
                                        <i className="fa fa-phone-alt text-white"></i>
                                    </div>
                                    <h4>24/7 Support</h4>
                                    <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Features */}

            {/* Inicio Servicios */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                        <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                        <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-shield-alt text-white"></i>
                                </div>
                                <h4 className="mb-3">Cyber Security</h4>
                                <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-chart-pie text-white"></i>
                                </div>
                                <h4 className="mb-3">Data Analytics</h4>
                                <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-code text-white"></i>
                                </div>
                                <h4 className="mb-3">Web Development</h4>
                                <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fab fa-android text-white"></i>
                                </div>
                                <h4 className="mb-3">Apps Development</h4>
                                <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-search text-white"></i>
                                </div>
                                <h4 className="mb-3">SEO Optimization</h4>
                                <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                                <h3 className="text-white mb-3">Call Us For Quote</h3>
                                <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                                <h2 className="text-white mb-0">+012 345 6789</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Servicios */}

            {/* Inicio Precios */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                        <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
                        <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="bg-light rounded">
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">Basic Plan</h4>
                                    <small className="text-uppercase">For Small Size Business</small>
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        <small className="align-top" style={{fontSize: '22px', lineHeight: '45px'}}>$</small>49.00<small
                                            className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Month</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-times text-danger pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1"></i></div>
                                    <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="bg-white rounded shadow position-relative" style={{zIndex: 1}}>
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">Standard Plan</h4>
                                    <small className="text-uppercase">For Medium Size Business</small>
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        <small className="align-top" style={{fontSize: '22px', lineHeight: '45px'}}>$</small>99.00<small
                                            className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Month</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1"></i></div>
                                    <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                            <div className="bg-light rounded">
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">Advanced Plan</h4>
                                    <small className="text-uppercase">For Large Size Business</small>
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        <small className="align-top" style={{fontSize: '22px', lineHeight: '45px'}}>$</small>149.00<small
                                            className="align-bottom" style={{fontSize: '16px', lineHeight: '40px'}}>/ Month</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Precios */}


            {/* Inicio Quote */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                                <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
                            </div>
                            <div className="row gx-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                    <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                    <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                                </div>
                            </div>
                            <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                            <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded __60square">
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Call to ask any question</h5>
                                    <h4 className="text-primary mb-0">+012 345 6789</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-xl-12">
                                            <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: '55px'}}></input>
                                        </div>
                                        <div className="col-12">
                                            <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: '55px'}}></input>
                                        </div>
                                        <div className="col-12">
                                            {/* <select className="form-select bg-light border-0" style={{height: '55px'}}>
                                                <option selected>Select A Service</option>
                                                <option value="1">Service 1</option>
                                                <option value="2">Service 2</option>
                                                <option value="3">Service 3</option>
                                            </select> */}
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control bg-light border-0" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Quote */}


            {/* Inicio Team */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWdth: '600px'}}>
                        <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                        <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light rounded overflow-hidden">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={assets.backgorund_image} alt=""></img>
                                    <div className="team-social">
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h4 className="text-primary">Full Name</h4>
                                    <p className="text-uppercase m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="team-item bg-light rounded overflow-hidden">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={assets.backgorund_image} alt=""></img>
                                    <div className="team-social">
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h4 className="text-primary">Full Name</h4>
                                    <p className="text-uppercase m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                            <div className="team-item bg-light rounded overflow-hidden">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={assets.backgorund_image} alt=""></img>
                                    <div className="team-social">
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h4 className="text-primary">Full Name</h4>
                                    <p className="text-uppercase m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Team */}

            {/* Inicio Footer */}
            <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                                <a href="index.html" className="navbar-brand">
                                    <h1 className="m-0 text-white"><i className="fa fa-user-tie me-2"></i>Startup</h1>
                                </a>
                                <p className="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-white p-3" placeholder="Your Email"></input>
                                        <button className="btn btn-dark">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Get In Touch</h3>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-primary me-2"></i>
                                        <p className="mb-0">123 Street, New York, USA</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-primary me-2"></i>
                                        <p className="mb-0">info@example.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-primary me-2"></i>
                                        <p className="mb-0">+012 345 67890</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Quick Links</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                                        <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Popular Links</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                                        <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-white" style={{background: '#061429'}}>
                <div className="container text-center">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-md-6">
                            <div className="d-flex align-items-center justify-content-center" style={{height: '75px'}}>
                                <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">Tuenlaceinmobiliario.com</a>. Todos los derechos reservados. 
                                
                                Desarrollador por <a className="text-white border-bottom" href="#algo">Innova7te</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Footer */}

        </>
    )
}