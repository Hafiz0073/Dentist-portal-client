import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaruButton/PrimaryButton';

const MakeAppointmrnt = () => {
    return (
        <section className='mt-16' style={{
            background: `url(${appointment})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt="" className="-mt-32 hidden lg:block lg:w-1/2  rounded-lg shadow-2xl" />
                    <div>
                        <h3 className='text-primary font-bold'>Appointment</h3>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">

                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <PrimaryButton>Get Start</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointmrnt;