import React from 'react'

export default function About() {
  return ( 
    <section id="hero" className="d-flex align-items-center">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2 className='text-black-50 fs-2'>About Us</h2>
              </div>
              <div className="row gy-4">
                <div className='col-md bg-light p-4'>
                  <h4>Who are We?</h4>
                  <p>
                    We are a group of students from Humber College and we have
                    passion to create outstanding
                    web applications, mobile applications and Database solutions.
                  </p>
                  <h4>What services we provide?</h4>
                  <ul>
                    <li>Web Development</li>
                    <li>Mobile Application Development</li>
                    <li>Database Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
         </div>
       </div>
     </section>
  );
}
