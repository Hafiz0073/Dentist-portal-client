import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointmrnt from '../MakeAppointment/MakeAppointmrnt';
import Services from '../Services/Services';
import ShortInfo from '../ShortInfo/ShortInfo';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ShortInfo></ShortInfo>
            <MakeAppointmrnt></MakeAppointmrnt>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;