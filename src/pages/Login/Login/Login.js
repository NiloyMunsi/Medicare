import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Email from './Email/Email';
import './Login.css'

const Login = () => {
    const { singInUseingGoogle,isloading} = useAuth();
    if (isloading) {
        return   <Spinner animation="border" variant="dark" />
    }
    return (
        <div className="log-container">
            
            <Email></Email>
            <Link to="/register">
                
                <button onClick={singInUseingGoogle} className="btn btn-primary">Register with Google</button></Link>
        </div>
    );
};

export default Login;