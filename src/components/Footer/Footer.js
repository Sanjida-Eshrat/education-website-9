import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        // <div className="bg-secondary mt-auto">
        //     <small>All copyrights reserved to WebLearners</small>
        // </div>
        <div>
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <h1><span style={{color:'orange'}}>Web</span>Learners</h1>
                  <p className="mt-4 ">
                    <small>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quod minima similique, ut sit dicta repellat itaque labore nobis repudiandae.
                    </small>
                  </p>
  
                  <p className="mt-5">
                    <small>WebLearners © . All rights reserved.</small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                  <ul>
                    <li className="footer-menu">Home</li>
                    <li className="footer-menu">About</li>
                    <li className="footer-menu">Courses</li>
                    <li className="footer-menu">Contact us</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3>For any enquiry</h3>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <div className="phone d-flex align-items-center justify-content-center mt-4">

                    <div>
                      <h5>+1 8 800 999 35 35</h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">
                    <div>
                      <p>
                         102 1st Avenue, New York, NY 100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;