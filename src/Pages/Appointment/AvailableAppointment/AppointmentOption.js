import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption
    return (
        <div className="card  shadow-xl mt-14">
            <div className="card-body text-center">
                <h2 className="text-primary text-center text-4xl">{name}</h2>
                <p>{slots.length > 0 ? slots[1] : 'Try Another Day'}</p>
                <p>{slots.length}{slots.length > 1 ? ' Spaces' : ' Space'} Available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-center text-white"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;