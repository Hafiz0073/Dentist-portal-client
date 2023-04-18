import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: "Fluoride Treatment",
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: Fluoride
        },
        {
            id: 2,
            title: "Cavity Filling",
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            id: 3,
            title: "Teeth Whitening",
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        },
    ]
    return (
        <div className='text-center mt-8'>
            <div className='mb-14'>
                <h3 className='text-xl text-primary font-bold uppercase text-center'>OUR SERVICES</h3>
                <h2 className='text-3xl text-accent font-400 text-center'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;