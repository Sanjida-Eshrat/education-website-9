
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './AllCourse.css';
const AllCourse = (props) => {
    const{courseTitle,courseImg,courseInstructor,rating,price} = props.cs;
    return (
        <div>
            <Col>
                <Card style={{height:'500px'}}>
                    <Card.Img variant="top" src={courseImg} style={{height:'250px'}} className="img-fluid img-style"/>
                    <Card.Body>
                        <Card.Title>{courseTitle.slice(0,25)}</Card.Title>
                        <Card.Text>By {courseInstructor}</Card.Text>
                        <Rating 
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color" readonly></Rating>
                        <h5>{rating}</h5> 
                        <Card.Text>$ {price}</Card.Text>
                        <Button variant="dark">
                            <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</Button>{' '}
                    </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default AllCourse;