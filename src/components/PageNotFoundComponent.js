import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="container">
            <h3>This page is not available.</h3>
            <div><p><Link to="/">go to home?</Link></p></div>
            <div><p> <Link to="/search">go to search?</Link></p></div>
        </div>
    );
}

export default PageNotFound;