import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const CourseContainer = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./course.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <div className="mt-3 pb-4 container-fluid bg-light">
            <h3 className="text-center py-4">Popular Courses</h3>
            <Row xs={1} md={4} className="g-3 mt-3">
                {
                    courses.map(course => <Courses key={course.id} course={course}></Courses>)
                }
            </Row>
            
        </div>
    );
};

export default CourseContainer;