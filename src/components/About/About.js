import React from 'react';
import { Button} from 'react-bootstrap';
import about from '../../bg-1.jpg';
import './About.css';
const About = () => {
    return (
        <div className="container-fluid my-5 p-5">
            <div className="row d-flex">
                <div className="col-lg-6 col-md-12 mt-5 text-start">
                    <h2>About Us</h2>
                    <p>WebLearners is an online learning and teaching marketplace with over 50 courses and 4000 students. Learn programming, marketing, data science and more.With courses added regularly to our catalog, you always get the latest skills. Sale from $13.99 ends today.</p>
                    <Button className='text-white mt-4 mb-3' variant="info">Get Started</Button>{' '}
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src={about} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default About;