import React from 'react';
import { Link } from 'react-router-dom';
const Test = () => {
    return (
        <React.Fragment>
            <h1>Try to load document right here and get in viewer</h1>
            <Link to="/viewer">Viewer</Link>
        </React.Fragment>
    );
};

export default Test;