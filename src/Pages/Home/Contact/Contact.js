import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaruButton/PrimaryButton';

const Contact = () => {

    return (
        <section className='mt-8' style={{ background: `url(${appointment})` }} >
            <p className='text-center text-primary pt-8'>Contact Us</p>
            <p className='text-center text-xl text-white'>Stay connected with us</p>

            <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow">

                <div>
                    <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 " />
                </div>
                <div>

                    <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 " />
                </div>
                <div>

                    <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 "></textarea>
                </div>
                <div className='text-center'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </form>


        </section >
    );
};

export default Contact;