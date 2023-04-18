import React from 'react';


const InfoCard = ({ dataInfo }) => {
    const { name, Description, icon, bgClass } = dataInfo


    return (
        <div className={`card card-side shadow-xl ${bgClass} p-4 text-white`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{Description}</p>

            </div>
        </div>
    );
};

export default InfoCard;