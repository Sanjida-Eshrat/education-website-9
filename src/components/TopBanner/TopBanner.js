import React from 'react';
import { Button, Container } from 'react-bootstrap';
import background from '../../bg-N.jpg';


const TopBanner = () => {
    return (
        <div className="bg-light m-0 text-white container-fluid " style={{backgroundImage: `url(${background})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <Container fluid>
                <div className="text-start container top-banner" style={{paddingTop:'195px',paddingBlockEnd:'180px'}}>
                <h1 className="pt-4 text-2">Welcome to <br/><span style={{color:'orange'}}>Web</span>Learners</h1>
                <Button className='text-white mt-4' variant="outline-info">Get Started</Button>{' '}
                </div>
            </Container>
        </div>
    );
};

export default TopBanner;