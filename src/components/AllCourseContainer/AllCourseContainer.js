import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllCourse from '../AllCourse/AllCourse';

const AllCourseContainer = () => {
    const [allCourses,setAllCourses] = useState([]);
    useEffect(()=>{
        fetch('./serviceData.JSON')
        .then(res => res.json())
        .then(data => setAllCourses(data));
    },[])
    return (
        <div className="m-0 pb-3">
            <div className="container-fluid">
                <Row xs={1} md={4} className="g-4 mt-3">
                    {
                        allCourses.map(cs => <AllCourse key={cs.courseId} cs={cs}></AllCourse>)
                    }
                </Row>
            </div>
            
        </div>
    );
};

export default AllCourseContainer;