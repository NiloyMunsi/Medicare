import React from 'react';

const Dr = (props) => {
    const { name, position ,img} = props.dr;
    return (
        <div className="dr">
        <img className="profile-pic" src={img} alt="" />
        <h2>Name: {name}</h2>
        <p>Specialist: {position}</p>
        </div>
    );
};

export default Dr;