import React from 'react';
import treatment1 from '../../../assets/images/treatment.png'

const ShortInfo = () => {
    return (
        <div className="card card-side py-36 ">
            <figure><img src={treatment1} alt="Movie" className='w-1/2 mx-auto rounded-md' /></figure>
            <div className="card-body w-1/2 sm:w-full pr-14">
                <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary text-white uppercase">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ShortInfo;