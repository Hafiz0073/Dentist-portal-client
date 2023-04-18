import React from 'react';
import time from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';


const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: "Time",
            Description: "Opening Time is 9:00Am to 6:00Pm",
            icon: time,
            bgClass: "bg-primary"
        },
        {
            id: 2,
            name: "Location",
            Description: "Our lOcation is Herat of City",
            icon: location,
            bgClass: "bg-accent"
        },
        {
            id: 3,
            name: "Contact",
            Description: "Any Time Contact Us",
            icon: phone,
            bgClass: "bg-primary"
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                cardData.map(dataInfo => <InfoCard
                    key={dataInfo.id}
                    dataInfo={dataInfo}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;