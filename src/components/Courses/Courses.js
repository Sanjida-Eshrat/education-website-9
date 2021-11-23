import React from 'react';
import { Card, Col ,Button } from 'react-bootstrap';
import Rating from 'react-rating';
import './Courses.css'
const Courses = (props) => {
    const {title,img,instructor,rating,price} = props.course;
    return (
        <div>
             <Col>
                <Card style={{height:'500px'}}>
                    <Card.Img variant="top" src={img} style={{height:'250px'}} className="img-fluid img-style"/>
                    <Card.Body>
                        <Card.Title>{title.slice(0,25)}</Card.Title>
                        <Card.Text>By {instructor}</Card.Text>
                        <Rating 
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color" readonly></Rating>
                        <h5>{rating}</h5>
                        <Card.Text>Price: $ {price}</Card.Text>
                        <Button variant="dark">Details</Button>{' '}
                    </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default Courses;