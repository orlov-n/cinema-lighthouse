import React from 'react';
import './Error.css';

const Error = ({ errorMessage }) => {
    return (
        <h2>{errorMessage}</h2>
    );
};

export default Error;