import React from 'react';
import './Notfound.css';
import photo from '../../photos/notfound.png'
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

const Notfound = () => {
    return (
        <div>
            <h1>Opps! 4O4 page not found !</h1>
            <img className="notfound" src={photo} alt="" />
            <br />
            <Link to="/"><Button className="btn btn-warning">Back to Home</Button></Link>
        </div>
    );
};

export default Notfound;