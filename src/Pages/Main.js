import React from 'react'

export default function Main() {
    return (
        <div>  
            <section id="hero" className="d-flex align-items-center">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Rent Items for Short Term Use</h1>
                            <h2>Have you ever wanted to try something before buying, or needed a some equipment for a day?</h2>
                            <h2>We have just the solution!</h2>                            
                        </div>
                        <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    );
}
