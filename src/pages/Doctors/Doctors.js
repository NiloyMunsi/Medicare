import React, { useEffect, useState } from 'react';
import Dr from '../Dr/Dr';
import './Doctor.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div id="doctors">
            <h1>OUR DOCTORS</h1>
            
            <div className="doctors-container">
                
            {
                    doctors.map(dr => <Dr
                        key={dr.id}
                        dr={dr}>
                        
                        </Dr>)
                }
                
            </div>
            <hr />
        </div>
    );
};

export default Doctors;