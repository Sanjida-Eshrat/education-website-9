import React from 'react';
import error404 from '../../404.jpg';


const NotFound = () => {
    return (
        <div className="container">
            {/* 404 image */}
            <img src={error404} className="w-50 h-auto mt-0" alt="" />
            
        </div>
    );
};

export default NotFound;