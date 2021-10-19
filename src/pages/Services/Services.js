import React, { useEffect, useState } from 'react';
import Serve from './Serve/Serve';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='services-container' id="treatments">
            <h1>Effective Treatment Methods</h1>
            <div className="serve-container">
                
            {
                    services.map(service => <Serve
                        key={service.id}
                        service={service}>
                        
                        </Serve>)
            }
            </div>
        </div>
    );
};

export default Services;